import React from 'react';
import Navbar from '../Common/Navbar';
const AboutUs = ({ history }) => {
    const mystyle = {
        color: "black",
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div>
            <Navbar />
            <div className="container" style={mystyle} >
                <div className="row">
                    <div className="col-6">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://krify.co/wp-content/uploads/2019/03/Cost-of-logistics-mobile-app-development.jpg" alt="First slide" />
                                </div>
                              
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row container" style={{"border-radius": "10px"}} >
                            <h2>WELCOME TO FREIGHT-CENTRAL</h2>
                        </div>
                        <div className="row" style={{ "textAlign": "left" }}>
                            <h3>Who we are?</h3>
                            <p>We are one of the players in transportation industry who connects transporters, truck drivers,customers
                                and suppliers. We are a platform that connects the transportation industry with the truck drivers and
                                the customers and related entities with objective of making the material transportation simpler, quicker, efficient by providing better whehicles at affordable price.
                            </p>
                            <h3>What we do?</h3>
                            <p>We help movement of goodsand vehicles from the source to the destination. We provide the best services to the customers and the truck drivers.</p>
                        </div>
                    </div>
                </div>
                <div class="row m-4">
                    <div class="col-sm-6">
                        <div class="card hoverable">
                            <div class="card-body">
                                <h5 class="card-title">Our Vision</h5>
                                <p class="card-text">To help all players in transportation industry manufacures,transporters,customers,importers,truckers to come under one Umbrella and [rovide better service].</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body hoverable">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">At Freight-Central We serve the transportation industry to best of our abillities to foster profitable, safe, secure good transportation and service for customers</p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutUs;