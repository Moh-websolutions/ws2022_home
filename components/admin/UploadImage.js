import Header from "@/components/Header";
import Link from "next/link"
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
 


export default function UploadImage() {
    
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
 

        </>
    )
}
 