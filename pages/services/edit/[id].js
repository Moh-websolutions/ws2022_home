import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function EditServices({service}) {
     console.log(service.data.id);
    const router = useRouter();

    const [values, setValues] = useState({
        title: service.data.attributes.title,
        content: service.data.attributes.content,
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
            const res = await axios.put(`http://localhost:1337/api/services/${service.data.id}`, {
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
            <textarea 
            className="form-control"
            name="content"
            type="text"
            id="content"
            value= {content}
            onChange={  handleChange }
            />


            <input className="btn btn-dark" type="submit" value="Add service"  onClick={handleSubmit} />
        </form>
        </>
    )
}




 export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await axios.get(`http://localhost:1337/api/services/${id}`);
    const service = res.data;
    return {
        props: {
            service
        }
    }
}