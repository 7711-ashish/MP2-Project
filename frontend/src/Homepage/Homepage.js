import React, {useEffect, useState} from 'react';
// import {history} from 'react-history';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import "./homepage.css"
// import Contact from '../Common/Contact';
// import CustomerSignin from '../Customer/CustomerSignin';
const Homepage = ({history}) => {

    const [cntTruck, setTruck] = useState("");
    const [cntTrans, setTrans] = useState("");
    const [cntCust, setCust] = useState("");

    useEffect(() => {
        sessionStorage.clear();
        console.log(sessionStorage.getItem('authtoken'));
        function count(){
            fetch('/count',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>res.json()).then(data=>{
                setTruck(data.countTruck);
                setTrans(data.countTransporter);
                setCust(data.countCustomer);
            });
                
        };
        count();
    },[])

    const handleCustomer=(e)=>{
        history.push('/Customersignin');
    }
    const handleAdmin=(e)=>{
        history.push('/adminLogin');
    }
    const handleTransporter=(e)=>{
        history.push('/transSignin');
    }
    const handleGo=(e)=>{
        history.push('/register');
    }
    const Details=(e)=>{
        history.push('/AboutUs');
    }
   
    return (
       
           
            <div className="bac" style={{backgroundColor: "lightblue"}}>
            <Navbar />
            <div className="container mt-3">
            <div className="row">
                <div className ="col-4 mb-4">
                    <a className ="card hoverable">
                        <div className ="card-body my-4">
                            <h1>{cntTruck}</h1>
                            <h5 className ="mb-0" style={{"color":"black"}} >REGISTERED TRUCKS</h5>
                        </div>
                    </a>
                </div>
                <div className ="col-4 mb-4">
                    <a className ="card hoverable">
                        <div className ="card-body my-4">
                            <h1>{cntTrans}</h1>
                            <h5 className =" mb-0" style={{"color":"black"}}>REGISTERED TRANSPORTER</h5>
                        </div>
                    </a>
                </div>
                <div className ="col-4 mb-4">
                    <a className ="card hoverable">
                        <div className ="card-body my-4">
                            <h1>{cntCust}</h1>
                            <h5 className ="mb-0" style={{"color":"black"}}>REGISTERED CUSTOMERS</h5>
                        </div>
                    </a>
                </div>
            </div>
            <section className ="container bac" >
                <div className="row " >
                    <div className="col-md-7 mb-4 mt-4">

                        <div>
                                <img src="https://clockwise.software/img/blog/how-to-build-an-app-like-uber-for-trucks/header-background.png" className="img-fluid" alt="smaple image" />
                        </div>

                        </div>
                        <div className="col-md-5 d-flex align-items-center">
                            <div>

                                <h3 className="font-weight-bold mb-4"> WELCOME TO FREIGHT-CENTRAL TRANSPORT</h3>

                                <p>Central transport is portal for transport industry, connecting transporters,truck drivers,customers. Simplicity speed and efficiency drive your business and this is our focus. We allow users information for better rates and vehicles.We provide information to registered user about availablity of loads and vehicles</p>

                                <button type="button" className="btn btn-primary btn-rounded mx-0" onClick={e=>Details(e)}>View Details</button>

                            </div>
                        </div>
                        
                    </div>
                    <hr className="w-header"/>
                    <div className="row container">
                        <h3 className="mt-2 pt-1">REGISTER HERE</h3>
                    
                        <button type="button" className="btn btn-warning btn-rounded ml-4 mt-2 mb-2" onClick={e=>{handleGo(e)}}>GO Register</button>
                    </div>
                </section>
                
            </div>
            <div className="container my-5" id="login">

                <section className="dark-grey-text text-center">

                    <h6 className="font-weight-normal  grey-text mb-4">LOGIN</h6>
                    <h3 className="font-weight-bold black-text mb-4 pb-2">TO CENTRAL TRANSPORT</h3>
                    <hr/>
                    <div className ="row">
                    <div className ="col-md-4 mb-4">
                    <div onClick={e=>{handleCustomer(e)}} className ="card hoverable btn-primary">
                        <div className ="card-body my-4">
                            <h5 className ="mb-0" style={{"color":"black"}}>CUSTOMER</h5>
                        </div>
                    </div>
                    </div>
                    <div className ="col-md-4 mb-4">
                    <div onClick={e=>{handleTransporter(e)}} className ="card hoverable btn-primary">
                        <div className ="card-body my-4">
                            <h5 className =" mb-0" style={{"color":"black"}}>TRANSPORTER</h5>
                        </div>
                    </div>
                    </div>
                    <div className ="col-md-4 mb-4">
                    <div onClick={e=>{handleAdmin(e)}} className ="card hoverable btn-primary">
                        <div className ="card-body my-4">
                            <h5 className =" mb-0" style={{"color":"black"}}>ADMIN</h5>
                        </div>
                    </div>
                    </div>
                    {/* <div className ="col-md-3 mb-4">
                    <a href="#!" className ="card hoverable">
                        <div className ="card-body my-4">
                            <p><i className ="fas fa-recycle fa-2x text-muted"></i></p>
                            <h5 className ="black-text mb-0">DRIVER</h5>
                        </div>
                    </a>
                    </div> */}
                    </div>
                </section>

              
            </div>
            <Footer/>
            </div>
          
        
    );
}
export default Homepage;