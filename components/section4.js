import '../sass/main.scss'

const Section4 = () => (
    <div className="section4">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top img1" src="/static/card1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h1 className="card-title">HEALTHCARE PROJECT</h1>
                            <p className="card-text">23andMe: Connecting the dots</p>
                            <p className="card-date">January 23, 2018</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top img2" src="/static/card2.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h1 className="card-title">HOSPITALITY AND LEISURE<br/> PROJECT</h1>
                            <p className="card-text">My Helsinki: Helping people find the best of Helsinki</p>
                            <p className="card-date">February 13, 2018</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top img3" src="/static/card3.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h1 className="card-title">TELECOM PROJECT</h1>
                            <p className="card-text">Ericsson: The Black Box</p>
                            <p className="card-date">March 15, 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Section4

