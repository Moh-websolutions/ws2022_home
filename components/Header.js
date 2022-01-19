
export default function Header ({title, subtitle}){
    return (
        <header className="space-md subpages">
            <div className="container">
                <div className="row d-flex align-items-left justify-content-left">
                <div className="col-md-10">
                    <div className="headline mt-0 mb-0">
                    <div className="headline-content">
                        <h1 className="headline-title display-3">{title}</h1>
                        <p className="headline-subtitle">{subtitle}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}
{/* default cta */}
Header.defaultProps = {
    title: "Websolutions.ca",
    subtitle: "Websites that work for you",
 }