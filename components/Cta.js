import Link from "next/link"
export default function Cta ({title, btn}){
    return (
        <section className="call-to-action">
            <div className="cta" id="div_to_scroll_past">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="title">
                        <span className="">{title}</span>
                    </div>
                    <Link href="/contact"> 
                        <a className="btn btn-lg btn-outline-light btn-solution btn-lg py-3 px-5 mt-md-5 mt-3">{btn}</a>
                    </Link>
                    </div>
                </div>
                </div>
            </div> 
        </section>
    )
}

{/* default cta */}
Cta.defaultProps = {
    title: "Ready to start a new project together?",
    btn: "Let's Get Started",
 }