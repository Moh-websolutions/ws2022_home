import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const Editor = ({ data }) => {
  const [isLayoutReady, setIsLayoutReady] = useState(false)

  useEffect(() => {
    setIsLayoutReady(true)
  }, [])

  return (
    <div>
       <CKEditor
        editor={ ClassicEditor }
        data={data}
        
        onInit={editor =>{
          console.log('Editor is ready', editor)
        }
        }
        onChange={(event, editor) => {
          console.log('Change', { event, editor })
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', { event, editor })
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', { event, editor })
        }}

        config={{
         
          image: {
            resizeUnit: 'px',
            toolbar: [
              'imageStyle:alignLeft',
              'imageStyle:full',
              'imageStyle:alignRight',
              '|',
              'imageTextAlternative'
            ],
            styles: ['full', 'alignLeft', 'alignRight']
          },
           
         }}
        

        




         
       
          
 
      />  
    </div>
  )
}


export default Editor