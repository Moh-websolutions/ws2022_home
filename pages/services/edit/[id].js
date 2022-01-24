import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
  

export default function EditServices({ service, allCasestudies }) {
    console.log(service.data.attributes.thumbnail.data.attributes.url);
    const [file, setFile] = useState(false);
    const [response, setResponse] = useState({});
    // const postData = {
    //   title: "test",
    //   singleservices: [],
    //   allCasestudies: []
    // };
    const [ values, setValues ] = useState({
        title: service.data.attributes.title,
        content: service.data.attributes.content,
        thumbnail: [],   // this is the url of the thumbnail of the service
        singleservices: []
    });
    const { title, content, singleservices,thumbnail } = values;

    const handleInputChange = (event) => {
      setFile(event.target.files[0]);
    };
    const upload = (e) => {
      let formData = new FormData();
      formData.append("files.thumbnail", file);
      formData.append("data", JSON.stringify(values));
      axios({
        method: "put",
        url: `http://localhost:1337/api/services/${service.data.id}`,
        data: formData
      })
        .then(({ data }) => {
          setResponse(data);
          console.log("Succesfully uploaded: ", JSON.stringify(data));
        })
        .catch((error) => {
          console.log("Error: ", error.message);
        });
    };
      // handlechange function
      const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
 
 

    return (
        <>
        <Link href="/services">Go back</Link>
        <h1>add service</h1>

        <ToastContainer />
        <input type="file"  onChange={handleInputChange} />
        <img src={service.data.attributes.thumbnail.data.attributes.url} width="100"  />
      <br />
      <br />
      <br />
      <br />
            <label htmlFor="title">En title</label>
            <input 
            className="form-control"
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={ handleChange }
            />
            <input 
            className="form-control"
            name="thumbnail"
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={ handleChange }
            />

            <label htmlFor="content">En title</label>
            <textarea 
            className="form-control"
            name="content"
            type="text"
            id="content"
            value= {content}
            onChange={  handleChange }
            />
             <div>
            <br />
            <b>Select CaseStudies</b>
            <br />
            
            {
                allCasestudies.data.map(casestudy => (
                    <div key={casestudy.id}>
                        <label htmlFor={casestudy.id}>{casestudy.attributes.name }</label>
                        <input
                            type="checkbox"
                            checked={singleservices.includes(casestudy.id)}
                            onChange={() => handleChange({
                                target: { name: 'singleservices', value: singleservices.concat(casestudy.id) }
                            })}
                            name="singleservices"
                            id={casestudy.id}
                        />
                    </div>
                ))
            }
            </div>
            <br />

            <button onClick={upload}>Upload File</button>

         </>
    )
}



export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await axios.get(`http://localhost:1337/api/services/${id}?populate=*`);
    const res2 = await axios.get('http://localhost:1337/api/casestudies');

    const service = res.data;
    const allCasestudies = res2.data;
    return {
        props: {
            service,
            allCasestudies
        }
    }
 }
 
// EditServices.getInitialProps = async ctx => {
//     try {
//       const res = await axios.get('http://localhost:1337/api/casestudies');
//       const allCasestudies = res.data;
//       return { allCasestudies };
//     } catch (err) {
//         console.error(err);
//     }
//   };

 