import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function AddServices(service) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.localStorage.getItem('token')) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`;
            }
        }
    }, [])


    
    const router = useRouter();
    
    const [values, setValues] = useState({
        title: '',
        content: '',
    })
    
    const { title, content } = values;
    
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
            const res = await  axios.post('http://localhost:1337/api/services',  {
                data: {
                title,
                content,
            },
            headers : {
                'Content-Type': 'application/json',
            }
            });

            console.log(res);
            if(res.status === 200) {
                toast.success("Service added successfully");
                router.push('/services');
            }
            else {
                toast.error("Something went wrong");
            }
        }
        
    };

     const imageUpload = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const res = await axios.post('http://localhost:1337/api/upload', formData);
        console.log(res);
        if(res.status === 200) {
            toast.success("Image uploaded successfully");
        }
        else {
            toast.error("Something went wrong");
        }

    }




    useEffect(() => {
        
        const formElement = document.querySelector('form');

        formElement.addEventListener('submit', (e) => {
          e.preventDefault();
      
          const request = new XMLHttpRequest();
      
          const formData = new FormData();
      
          const formElements = formElement.elements;
      
          const data = {};
      
          for (let i = 0; i < formElements.length; i++) {
            const currentElement = formElements[i];
            if (!['submit', 'file'].includes(currentElement.type)) {
              data[currentElement.name] = currentElement.value;
            } else if (currentElement.type === 'file') {
              for (let i = 0; i < currentElement.files.length; i++) {
                const file = currentElement.files[i];
                formData.append(`files.${currentElement.name}`, file, file.name);
              }
            }
          }
      
          formData.append('data', JSON.stringify(data));
      
          request.open('POST', `http://localhost:1337/api/services`);
      
          request.send(formData);
        });
    }, [])


  
    return (
        <>
        <Link href="/services">Go back</Link>
        <h1>add service</h1>

        <ToastContainer />

        <form>
            <label htmlFor="title">En title</label>
            <input 
            className="form-control"
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={ handleChange }
            />
            <label htmlFor="content">En title</label>
            <input 
            className="form-control"
            name="content"
            type="text"
            id="content"
            value= {content}
            onChange={  handleChange }
            />
   <input type="file" name="cover" />     
   <input type="submit" value="Submit" />
            <input className="btn btn-dark" type="submit" value="Submit"  />
        </form>
        </>
    )
}
 