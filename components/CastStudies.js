import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function CaseStudies ({casestudies}) {
    const router = useRouter()
    casestudies = casestudies.sort(() => Math.random() - 0.5)
    return (
        <>
        {/* {console.log(casestudies)} */}
             <section className="case-studies bg-light">
                <div className="space-md">
                    <div className="container">
                    { router.pathname === '/' ? 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headline mb-0">
                                <div className="headline-content">
                                <h2 className="headline-title display-2">Case studies</h2>
                                <p className="headline-subtitle">Public engagements</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    : 
                    "" }    
                        
                    { casestudies.map(casestudy => (
                        <div className="row mt-5 case-study d-flex align-items-center" key={casestudy.id}> 
                            <div className="col-lg-6">
                            <div className="case text-center">
                            <Link href={`/casestudies/${casestudy.slug}`}> 
                                <a aria-label={casestudy.title}>              
                                    <Image src={casestudy.imageUrl} className="pb-3"  width={644} height={489} alt="" />
                                </a>
                            </Link>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="case">
                            <Link  href={`/casestudies/${casestudy.slug}`}>
                                <a>
                                    {/* <h2>{casestudy.num}</h2> */}
                                    <h3>{casestudy.title}</h3>
                                </a>
                            </Link>
                                <p>{casestudy.desc}</p>
                                <p>
                                    <Link  href={`/casestudies/${casestudy.slug}`}>
                                        <a className="btn btn-lg btn-primary btn-solution mt-3">View {casestudy.title}</a>
                                    </Link>
                                </p>

                            </div>
                            </div>
                        </div>
                    ))}
                    
                    { router.pathname === '/' ? 
                        <div className="row">
                            <div className="col-md-12 d-flex  justify-content-center align-content-center text-center  mt-5">
                            <Link href="/casestudies"> 
                            <a className="btn btn-lg btn-primary btn-solution btn-lg py-3 px-5 mt-md-5 mt-3">View all Case Studies </a>
                            </Link>
                            </div>
                        </div>
                        :
                        ""
                    }
                    </div>
                </div>
                
            </section>
        </>
    )
}