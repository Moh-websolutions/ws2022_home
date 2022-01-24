import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import UploadImage from "@/components/admin/UploadImage";
  

export default function createServices({ allCasestudies }) {
     console.log(allCasestudies.data);
    const router = useRouter();

    const [values, setValues] = useState({
        title: "",
        content: "",
        singleservices: []
 
    })
    const { title, content, singleservices,thumbnail } = values;

    const name = "singleservice";
    // handlechange function
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
 
 // upload thumbnail image in the form of base64
  

    const handleSubmit = async (e) => {
 
            e.preventDefault();

        if (title === '' || content === '' || singleservices.length === 0) {
            toast.error('Please fill all the fields');
        } else {
            const res = await axios.post(`http://localhost:1337/api/services`, {
                data: {
                title,
                content,
                singleservices
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
  
 

    return (
        <>
        <Link href="/services">Go back</Link>
        <h1>add service</h1>

        <ToastContainer />

        <form onSubmit={handleSubmit} >
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
            
           
   <input type="submit" value="Submit now" />
        </form>

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