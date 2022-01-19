import Image from "next/image"
import Link from "next/link"
import useSWR from 'swr'
import unfetch from "unfetch"

export default function Footer (){
    
      const { data } = useSWR("/api/casestudies", (url) =>
      unfetch(url).then((res) => res.json())
    );

    return (
        <>
      <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <Image 
            src="/images/ws-logo-w-2.svg" 
            width="250" 
            height="214"
            alt="Websolutions.ca" />
          </div>
          <div className="col-xl-9">
              <h3 className="footer-title">For almost 20 years Websolutions.ca has been designing cutting edge websites and applications for clients big and small.</h3>
              <div className="row mt-5">
                  <div className="col-md-4">
                      <h4>Have a question?</h4>
                      <ul className="list-unstyled p-0">
                          <li><a href="mailto:info@websolutions.ca" target="_blank">info@websolutions.ca</a></li>
                          <li><a href="tel:+18885478906"> +1 888-547-8906</a></li>
                          <li><a href="https://www.facebook.com/websolutions.ca/" target="_blank" rel="noopener" aria-label="Facebook" title=""><i className="fab fa-facebook-square"></i></a>&nbsp; 
                            <a href="https://www.instagram.com/websolutions.ca/?hl=en" target="_blank" rel="noopener" aria-label="Instagram" title=""><i className="fab fa-instagram"></i></a>&nbsp; 
                            <a href="http://www.linkedin.com/company/108890" target="_blank" rel="noopener" aria-label="Linkedin" title=""><i className="fab fa-linkedin"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div className="col">
                    <h4>Cast studies</h4>
                     
                    {!data && <span>Loading....</span>}
                    {data && (
                        <>
                         <ul className="list-unstyled p-0">
                            {data.map((casestudy) => (
                            <li key={casestudy.id}><Link href={`/casestudies/${casestudy.slug}`}><a >{casestudy.title}</a></Link></li>
                            ))}
                        </ul>
                      
                        </>
                    )}
                  </div>
                  <div className="col-md-4">
                      <h4>Quick links</h4>
                      <ul className="list-unstyled p-0">
                        <li> <Link href="/"><a className="">Intro</a></Link> </li>
                        <li> <Link href="/about"><a className="" >About</a></Link> </li>
                        <li> <Link href="/services"><a className="">Services</a></Link> </li>
                        <li> <Link href="/cast-studies"><a className="">Case Studies</a></Link> </li>
                        <li> <Link href="/jobs"><a className="">Job offers</a></Link> </li>
                        <li> <Link href="/contact"><a className="">Contact</a></Link> </li>
                      </ul>
                  </div>
              </div>
              <div className="copy"> &copy; {new Date().getFullYear()} Websolutions.ca. All rights reserved. </div>

          </div>
          </div>
      </div>
    </footer>
        </>
    )
}