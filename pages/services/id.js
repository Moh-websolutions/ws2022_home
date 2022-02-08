import Layout from "@/components/Layout"
import Cta from "@/components/Cta"
import Image from "next/image";
import moment from  "moment"
import ReactMarkdown from "react-markdown";
import { API_URL } from 'url.config';
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SingleService( {service} ) {
    //  {console.log(service.attributes.thumbnail.data.attributes.url)}
    const router = useRouter();

    const deleteService = async () => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            const res = await fetch(`http://localhost:1337/api/services/${service.id}`, {
                method: "DELETE",
            });
            const data = await res.json();
             if (!res.ok) {
                toast.error(data.message);
                return;
            }else
            {
                toast.success("Service deleted successfully");
                // toast remove all
                setTimeout(() => {
                    toast.dismiss();
                }, 1000);
              
                //wait for 2 seconds
                setTimeout(() => {
                    router.push("/services");
                }, 1200);
            }
        }
    };
    
    return (
        
       <Layout title={"Services | " + service.title}>
           <>
           <ToastContainer />
           <header className="space-md subpages">
               <div className="container">
                   <div className="row d-flex align-content-center">
                       <div className="col-lg-6">
                           <div className="headline mt-0 mb-0">
                               <div className="headline-content">
                                   <Link href={`/services/edit/${service.id}`}><a className="btn btn-warning">EDIT SERVICE</a></Link>
                                   <button onClick={deleteService} className="btn btn-danger">DELETE SERVICE </button>
                                   <h1 className="headline-title display-3">{service.attributes.title}</h1>
                                   <small>{moment(service.attributes.publishedAt).format("yyyy-MM-DD")}</small>
                                   <p className="headline-subtitle">{service.attributes.desc}</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 offset-lg-1">
                           <div className="cms-group mt-3">
                           { service.attributes.thumbnail.data !== null ?
                            <Image
                                src={service.attributes.thumbnail.data.attributes.url }
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            />
                            :
                             "NO IMAGE TO DISPLAY"
                           }
                           </div>
                       </div>

                       
                   </div>

               </div>
           </header>

           <section className="solutions bg-light">
               <div className="container">
                   <div className="row d-flex justify-content-start space-md">
                       <div className="col-lg-3 order-lg-1 order-12">
                           <ul className="list-unstyled project-intro">
                               <li className="title">Related case studies</li>
                               <li><a href="#">Design & Branding</a></li>
                               <li><a href="#">Social Media Management</a></li>
                               <li><a href="#">Custom Management Systems</a></li>
                               <li><a href="#">Digital Marketing</a></li>
                           </ul>
                       </div>
                       <div className="col-lg-7 offset-lg-1 order-1 custome_content">
                
                       <ReactMarkdown escapeHtml={false}>{service.attributes.content}</ReactMarkdown>
                            <div className="cms-group mt-5">
                               <h3 className="mt-0 mb-2 font-weight-bold">Related case studies</h3>
                               <a href="#\" className="mr-1">
                               <div className="cms-list">
                                   <p>Club Des Amis</p>
                               </div>
                               </a>
                               <a href="#\" className="mr-1">
                               <div className="cms-list">
                                   <p>Rogers Electric Motor Service</p>
                               </div>
                               </a>
                               <a href="#\" className="mr-1">
                               <div className="cms-list">
                                   <p>Go To Insure</p>
                               </div>
                               </a>
                               
                           </div>
                       
                       </div>
                   </div>
               </div>
           </section>
           
           <Cta title={"We guide users to their best experiences."} btn={"Let's Get Started"}/>

           </>
       </Layout>
   )
}

//This is an example of getServerSideProps

// export async function getServerSideProps({ query: { slug } }){
//     const res = await fetch(`${API_URL}/api/services/${slug}`);
//     const singleservice = await res.json();
//     return {
//         props: {services: singleservice[0]},
       
//     }
// }

// This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get services
//     const res = await fetch(`http://localhost:1337/api/services`)
//     const services = await res.json()
  
//     // Get the paths we want to pre-render based on services
//     const paths = services.data.map((service) => ({
//       params: { service: service.slug },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: true }
//   }
// export async function getStaticProps({params}){
    
//     const res = await fetch(`http://localhost:1337/api/services/${params.slug}`)
//     const services = await res.json();
//     const service = services[0];
//     return {
//         props: {service}
//     }
// }




export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/api/services?populate=*`)
    const services = await res.json()
  
    return {
      paths: services.data.map((service) => ({
        params: { id: service.id.toString() },
      })),
      fallback: false,
    }
  }


// for each individual page/path : get the data for the path/page
export async function getStaticProps({params}) {

    const { id } = params
    const res = await fetch(`http://localhost:1337/api/services/${id}?populate=*`);
    const services = await res.json();
    const service = services.data;
    return {
        props: {service}
    }
}
