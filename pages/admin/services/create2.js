import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import dynamic from 'next/dynamic'

 
export default function createServices({ allCasestudies }) {
 
    console.log(allCasestudies.data);
    const [file, setFile] = useState(false);
    const [response, setResponse] = useState({});
    // const postData = {
    //   title: "test",
    //   singleservices: [],
    //   allCasestudies: []
    // };
    const [ values, setValues ] = useState({
        title: "",
        content: "",
        singleservices: []
    });
    const { title, content, singleservices } = values;

    const handleInputChange = (event) => {
      setFile(event.target.files[0]);
    };
    const upload = (e) => {
      let formData = new FormData();
      formData.append("files.thumbnail", file);
      formData.append("data", JSON.stringify(values));
      axios({
        method: "post",
        url: "http://localhost:1337/api/services?populate=*",
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
        <Link href="/admin/services">Go back</Link>
        <h1>add service</h1>
        
        <ToastContainer />
 

        <input type="file" onChange={handleInputChange} />
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
      
            </div>
        
             <div>
             <br />
             <br />
             <br />
             <br />
            <br />
           
            <br />
            <b>Select CaseStudies</b>
            <br />
            
            {
                allCasestudies.data.map(casestudy => (
                    <div key={casestudy.id}>
                        <label htmlFor={casestudy.id}>{casestudy.attributes.title }</label>
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



createServices.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1337/api/casestudies');
      const allCasestudies = res.data;
      return { allCasestudies };
    } catch (err) {
        console.error(err);
    }
  };

 