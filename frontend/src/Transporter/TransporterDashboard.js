import React,{useEffect} from 'react'
import './trans.css'
const CustomerDashboard = ({history}) => {

    useEffect(() => {
        async function fetchCustomer() {
            const response = sessionStorage.getItem("transauthToken");
            if(response)
              window.alert("WELCOME");
            else
              history.push("/transsignin")
          }
          fetchCustomer();
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
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">CENTRAL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-4 mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" to="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>{handleSignout(e)}}>SignOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container my-5" id="login">

                <section class="dark-grey-text text-center">
                    <h3 class="font-weight-bold black-text card-back mb-4 pb-2">CHOOSE OPTION</h3>
                    <hr class="w-header"/>
                    <div class ="row">
                    <div class ="col-md-3 mb-4">
                    <a onClick={e=>handleTruckReg(e)} class ="card hoverable">
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

              
            </div>
        </>

    );
}

export default CustomerDashboard;