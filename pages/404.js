import Image from "next/image"
import Layout from "@/components/Layout"
import Cta from "@/components/Cta"
import Link from "next/link"


export default function Custom404() {
    return (
        <Layout title={"404 | websolutions.ca"}>
        <>
        <header className="space-sm subpages">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-8">
                        <div className="headline mt-5 mb-0">
                            <div className="headline-content text-center">
                            <Image src="/images/404-1.svg"  className="img-fluid mb-5" width={300} height={200} alt="" />
                            <h1 className="headline-title display-3">Page <span className="text-danger">NOT</span> found!</h1>
                            <p className="headline-subtitle">The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                           <p className="pt-5"><Link href="/"><a  style={{borderBottom: '1px solid #212529'}}>Back home</a></Link></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </header>
        <Cta title={"We guide users to their best experiences."} btn={"Let's Get Started"}/>
        
        </>
        </Layout>
    )
  }