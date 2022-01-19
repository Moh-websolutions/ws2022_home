import Image from "next/image"
export default function AboutHistory() {
    return (
        <>
        <div className="row space-md">
            <div className="col-md-12">
                <div className="headline mt-0 mb-0">
                <div className="headline-content">
                    <h1 className="headline-title display-3">Our Expert Members do the magical</h1>
                </div>
                </div>
            </div>
        </div>

        <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                    <Image src="/images/team/photoRealJosh.jpg" alt="" width={140} height={140} className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                    <h5 className="mb-0">Josh Gammon</h5><span className="small text-muted">President, Programmer</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealTodd.jpg" alt="" width={140} height={140} className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Todd Morrison</h5><span className="small text-muted">Managing Director</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealMahmoud.jpg" alt="" width={140} height={140}  className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Mahmoud Abdelkader</h5><span className="small text-muted">Designer & Programmer</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealVictor.jpg" alt="" width={140} height={140}  className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Victor Luna</h5><span className="small text-muted">Programmer</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealJS.jpg" alt="" width={140} height={140} className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Jean-Sébastien Chiasson</h5><span className="small text-muted">Social Media & SEO Manager</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                </ul>
                </div>
            </div>
            
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealleon.jpg" alt="" width={140} height={140} className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Leon De Almeida</h5><span className="small text-muted">Junior Programmer | Illustrator</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                </ul>
                </div>
            </div>
            
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><Image src="/images/team/photoRealnathan.jpg" alt="" width={140} height={140} className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                <h5 className="mb-0">Nathan Dimitroff</h5><span className="small text-muted">Social Media Specialist</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="far fa-envelope"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                </ul>
                </div>
            </div>

        </div>
        </>
    )
}