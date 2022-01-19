import Head from "next/head"
import Nav from "/components/Nav"
import Footer from "/components/Footer"

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Layout({ children, title, description, keywords}) {


    const router = useRouter();

    //show button on scroll down
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    const checkScrollTop = () => {
        if (!showButton && window.pageYOffset > 250) {
            setShowButton(true);
        } else if (showButton && window.pageYOffset <= 400) {
            setShowButton(false);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [])

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Websolutions.ca" />
                <meta name="theme-color" content="white" />
                <meta name="theme-color" content="black" />

                <title>{title}</title>
                {/* favicon */}
                <link rel="shortcut icon" href="/images/favicon/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                {/* iOS support */}
                <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
                {/* Android support */}
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-192x192.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-96x96.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/images/android-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-48x48.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-36x36.png" />
                
                {/*Font Awesome icons*/}
                <link rel="stylesheet" href="/fonts/fontawesome/css/fontawesome.min.css?v=2" />
                <link rel="stylesheet" href="/fonts/fontawesome/css/brands.min.css?v=2" />
                <link rel="stylesheet" href="/fonts/fontawesome/css/regular.min.css?v=2" />

                {/* <link rel="stylesheet" href="/fonts/fontawesome/css/all.min.css?v=2" /> */}
                {/*Google fonts */}
                <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900&display=swap" rel="stylesheet"/> 
                {/*Custom styles
                <link href="/styles/responsive.css" rel="stylesheet" /> */}
            </Head>
        
            <Nav />

            {/* //use of router 
            {router.pathname === '/' ? <div className="container-fluid">{children}</div> : <div className="container">{children}</div>}
            */}
            {children}
            
            <Footer />
             
            {/* Scroll top */}
            {showButton && (
                <div className="gototop js-top">
                    <a href="#" className="js-gotop back-to-top" onClick={scrollToTop}><i className="far fa-arrow-up"></i></a>
                </div>
            )}
             

        </>
    
    )
}

{/* default roots for <Head></Head> */}
Layout.defaultProps = {
    title: "Websolutions.ca",
    description: "Websolutions.ca is a web technology firm that specializes in websites, design, marketing and custom web based applications. Located in Bathurst, New Brunswick.  ",
    keywords: "bathurst web design, new brunswick websites, new brunswick web services, custom web based applications, motor management system"
}