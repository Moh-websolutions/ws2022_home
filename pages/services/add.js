import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export default function AddServices({imagesGallery}) {

    const [thumbnail, setThumbnail] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setThumbnail(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    URL.revokeObjectURL(createObjectURL);
    event.preventDefault();
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    if (thumbnail) {
      try {
        formData.append('data', JSON.stringify(data));
          
        request.open('POST', `http://localhost:1337/api/services`);
    
        request.send(formData);
        toast.success("Uploaded Successfully");
      } catch (error) {
        toast.error("Error Uploading");
      }
      
             
    }
    };
 
    return (
        <>
        <Link href="/services">Go back</Link>
        <h1>add service</h1>

        <ToastContainer />

        <img src={createObjectURL} />
        <h4>Select Image</h4>
       
            <input type="file" name="thumbnail" onChange={uploadToClient} />
            <button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
            >
            Send to server
            </button>
       
        </>
    )
}
 


export async function getStaticProps(){
    const res = await fetch(`http://localhost:1337/api/services`)
    const services = await res.json();
    return {
        props: {services},
        revalidate: 1
    }
}