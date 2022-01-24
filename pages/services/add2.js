import Image from 'next/image';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { API_URL } from 'url.config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
 
import  React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddServiceNew({services}) {
 
    
    console.log(services.data.slice(-1)[0].id)



    const router = useRouter(); // to get the url params
    const [values, setValues] = useState({
        title: '',
        content: '',
    })
    const { title, content } = values;

    const ImageValue = services.data.slice(-1)[0].id;

    // handlechange function
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '' || content === '') {
            toast.error('Please fill all the fields');
        } else {
            const res = await axios.post(`http://localhost:1337/api/services`, {
                data: {
                    title,
                    content,
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log(res);
            if (res.status === 200) {
                toast.success("Service added successfully");
                router.push('/services');
            }
            else {
                toast.error("Something went wrong");
            }
        }
    }
    

 


    const [image, setImage] = useState(null); // to store the image
    const [createObjectURL, setCreateObjectURL] = useState(null); // to store the image url
    const [response, setResponse] = useState({}); // to store the response
    
    // uploadToClient function to display the image in the browser
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };
 

  
 

    // To submit the Image to /api/upload and store the response https://cloudinary.com/
    // from Strapi media library https://strapi.io/documentation/3.0.0-beta.x/guides/upload.html
    useEffect (() => {

      const formElement = document.querySelector('form');

      formElement.addEventListener('submit', (e) => {

        e.preventDefault();
    
        const request = new XMLHttpRequest();
        //wait 3 second before POSTing

        request.open('POST', 'http://localhost:1337/api/upload');
        //request.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);    
        request.send(new FormData(formElement));

        request.onreadystatechange = (e) => {
          if (request.readyState === 4) {
         

                if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                setResponse(response);
                console.log(response);
                const imageurl = response[0].formats.thumbnail.url;
                console.log(imageurl);
                //get imageurl and display it in the text id "imageurl"
                const imageurlElement = document.getElementById('imageurl');
                imageurlElement.innerHTML = imageurl;
                //get imageurl and display it in the image src
                const imageurlElement2 = document.getElementById('imageurl2');
                //   imageurlElement2.src = "http://localhost:1337"+ imageurl;
                imageurlElement2.src = imageurl;
                } else {
                console.log('error');
                }
             
          }
        };
      });
 
       
      
    }, [])
    
 
  return (
      
      <> 
      <pre>{JSON.stringify(response)}</pre> 
      <img id='imageurl2'   width="200"   />
      <p id="imageurl"></p>

        <ToastContainer />
        {/* <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" /> */}
         {/* <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button> */}

<form onSubmit={handleSubmit}>
<img src={createObjectURL} />
   {/* <input type="file" name="files" /> */}
    <input type="text"  placeholder='title' name="title" value={title} onChange={handleChange} />
    <input type="text" placeholder='content' name="content" value={content} onChange={handleChange} />
<br/>
<br/>
  <input type="file" name="files" onChange={uploadToClient} />
  <input type="text" name="ref"  hidden value="api::service.service" />
  <input type="text" name="refId" hidden value={ImageValue} />
  <input type="text" name="field" hidden value="thumbnail" />
  <input type="submit" value="Submit" />
  <br/><br/><br/>
</form>
                

      </>
  )
}



export async function getStaticProps(){
    const res = await fetch(`http://localhost:1337/api/services?populate=*`)
    const services = await res.json();
    return {
        props: {services},
        revalidate: 1
    }
}