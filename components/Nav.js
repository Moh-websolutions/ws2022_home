import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
export default function Nav (){
    const router = useRouter()
    return (
        <>
        <nav  className=" header navbar navbar-expand-lg navbar-light bg-white fixed-top" id="mainNav">
            <div className="container"> 
                <Link href="/">
                    <a className="navbar-brand js-scroll-trigger" aria-label="Websolutions.ca">
                        <Image 
                        src="/images/ws-logo-full.svg" 
                        width="210"
                        height="39" 
                        alt=""
                        />
                    
                    </a>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="my-1 mx-2 close">X</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"> <Link href="/">{router.pathname === '/' ? <a className="active nav-link js-scroll-trigger">Intro</a> : <a className="nav-link js-scroll-trigger">Intro</a>}</Link> </li>
                        <li className="nav-item"> <Link href="/about">{router.pathname === '/about' ? <a className="active nav-link js-scroll-trigger">About</a> : <a className="nav-link js-scroll-trigger">About</a>}</Link> </li>
                        <li className="nav-item"> <Link href="/services">{router.pathname === '/services' ? <a className="active nav-link js-scroll-trigger">Services</a> : <a className="nav-link js-scroll-trigger">Services</a>}</Link> </li>
                        <li className="nav-item"> <Link href="/casestudies">{router.pathname === '/casestudies' ? <a className="active nav-link js-scroll-trigger">Case Studies</a> : <a className="nav-link js-scroll-trigger">Case Studies</a>}</Link> </li>
                        <li className="nav-item"> <Link href="/contact">{router.pathname === '/contact' ? <a className="active nav-link js-scroll-trigger">Contact</a> : <a className="nav-link js-scroll-trigger">Contact</a>}</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}