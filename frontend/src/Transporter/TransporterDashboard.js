import React,{useEffect} from 'react'
import './trans.css'
const CustomerDashboard = ({history}) => {

    useEffect(() => {
        async function fetchTransporter() {
            const response = sessionStorage.getItem("transauthToken");
            if(response)
              window.alert("WELCOME");
            else
              history.push("/transsignin")
          }
          fetchTransporter();
    }, [])



    const handleTruckReg=(e)=>{
        const tok = sessionStorage.getItem('transauthToken') 
        console.log(tok);
        history.push('/registerTruck')
    }
    const handleTruckList=(e)=>{
        const tok = sessionStorage.getItem('transauthToken') 
        console.log(tok);
        history.push('/transporteTruckList')
    }
    const handleBooking=(e)=>{
        e.preventDefault();
        const tok = sessionStorage.getItem('transauthToken') 
        console.log(tok);
        history.push('/bookingRequests')
    }
    const handleSignout=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        sessionStorage.clear()
        history.push('/')
    }
    const handleHistory=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        history.push('/trans/history')
    }
    const handleDash=(e)=>{
        const tok = sessionStorage.getItem('transauthToken');
        history.push(`/transporter/${tok}/dashboard`)
    }
    const mystyle = {
        color: "black",
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div className="z-index-10" >
            <nav className="navbar navbar-expand-lg navbar-light bg-col bg-unique hm-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">FREIGHT-CENTRAL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-4 mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" onClick={e=>{handleDash(e)}}>DashBoard</a>
                            </li>
                            <li className="nav-item">   
                                <a className="nav-link" onClick={e=>{handleSignout(e)}}>SignOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={mystyle}>
                
                <section className="container">
                    <h3 class="mb-4 pb-2">CHOOSE OPTION</h3>
                    <hr class="w-header"/>
                    <div class ="row">
                    <div class ="col-md-3 mb-4">
                    <a onClick={e=>handleTruckReg(e)} class ="card hoverable" style={{"color":"black"}}>
                        <div class ="card-body my-4">
                            <p><i class ="fas fa-tablet-alt fa-2x text-muted"></i></p>
                            <h5 class ="black-text mb-0">Register new Truck</h5>
                        </div>
                    </a>
                    </div>
                    <div class ="col-md-3 mb-4">
                    <a onClick={e=>handleTruckList(e)}class ="card hoverable">
                        <div class ="card-body my-4">
                            <p><i class ="fas fa-cogs fa-2x text-muted"></i></p>
                            <h5 class ="black-text mb-0">Truck list</h5>
                        </div>
                    </a>
                    </div>
                    <div class ="col-md-3 mb-4">
                    <a href="#!"onClick={e=>handleBooking(e)} class ="card hoverable">
                        <div class ="card-body my-4">
                            <p><i class ="fas fa-pencil-ruler fa-2x text-muted"></i></p>
                            <h5 class ="black-text mb-0">Boooking Request</h5>
                        </div>
                    </a>
                    </div>
                    <div class ="col-md-3 mb-4">
                    <a class ="card hoverable" onClick={e=>handleHistory(e)}>
                        <div class ="card-body my-4">
                            <p><i class ="fas fa-cogs fa-2x text-muted"></i></p>
                            <h5 class ="black-text mb-0">History of Orders</h5>
                        </div>
                    </a>
                    </div>
                    </div>
                </section>

                <div className="" style={mystyle}>
                <img src="https://clockwise.software/img/blog/how-to-build-an-app-like-uber-for-trucks/header-background.png" class="img-fluid" alt="smaple image" />
            </div>
            </div>
        </div>

    );
}

export default CustomerDashboard;