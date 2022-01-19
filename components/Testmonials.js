import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

 

export default function Testmonials ({testimonials}){
    return (
        <>
        <section className="creation testimonials bg-light" id="testimony">
        <div className="space-md">
            <div className="container">
                <div className="row d-flex align-content-center">
                    <div className="col-md-12 mt-0">
                        <div className="headline mb-0 mt-0">
                            <div className="headline-content">
                            <h2 className="headline-title display-2 mt-0">What our clients say</h2>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Map testmonial */}
    
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-demo mt-5">
                            <div id="testimonial-slider" className="owl-carousel">
                                <Carousel showArrows={false} emulateTouch={true} showThumbs={false} showIndicators={false} infiniteLoop={true}	showStatus={false} autoPlay={true}  >
                                { testimonials.map(testimonial => (
                                    <div className="testimonial" key={testimonial.id}>
                                        <p className="description">
                                            {testimonial.desc}
                                        </p>
                                        <div className="testimonial-content d-flex align-items-center justify-content-center">
                                            <div className="pic">
                                                <Image src={testimonial.imageUrl} width={150} height={150} alt="" />
                                            </div>
                                            <div className="info">
                                            <h3 className="title">{testimonial.name}</h3>
                                            <small className="post">{testimonial.company } </small>

                                            <div className="star-rating">
                                                <ul className="list-inline">
                                                <li className="list-inline-item"><i className="far fa-star"></i></li>
                                                <li className="list-inline-item"><i className="far fa-star"></i></li>
                                                <li className="list-inline-item"><i className="far fa-star"></i></li>
                                                <li className="list-inline-item"><i className="far fa-star"></i></li>
                                                <li className="list-inline-item"><i className="far fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </section>
                
        </>
    )
}