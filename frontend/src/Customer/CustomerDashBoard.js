import React, {useEffect} from 'react'
const CustomerDashboard = ({history}) => {
    useEffect(() => {
        async function fetchCustomer() {
          const response = sessionStorage.getItem("authToken");
          if(response)
            window.alert("WELCOME");
          else
            history.push("/Customersignin")
        }
        fetchCustomer();
      }, []);

    const handleBook=(e)=>{
        
        history.push('/customer/truckBook')
    }
    const handleHistory=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        history.push('/customer/history')
    }

    const handleSignout=async(e)=>{
        e.preventDefault();
        const res= await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },  
            credentials : "include"
        });
        console.log(res.status)
        console.log(await res.json())
        console.log(sessionStorage.getItem('authToken'))
        history.push("/Customersignin")
        sessionStorage.clear();
        sessionStorage.removeItem('authToken')
        console.log(sessionStorage.getItem('authToken'))
        
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
                    <h3 class="font-weight-bold black-text mb-4 pb-2">CHOOSE OPTION</h3>
                    <hr class="w-header"/>
                    <div class ="row">
                    <div class ="col-md-4 mb-4">
                    <a onClick={e=>handleBook(e)} class ="card hoverable">
                    <div class ="card-body my-4">
                    <p><i class ="fas fa-tablet-alt fa-2x text-muted"></i></p>
                    <h5 class ="black-text mb-0">TRUCK BOOKING</h5>
                    </div>
                    </a>
                    </div>
                    <div class ="col-md-4 mb-4">
                    <a class ="card hoverable" onClick={e=>handleHistory(e)}>
                        <div class ="card-body my-4">
                            <p><i class ="fas fa-cogs fa-2x text-muted"></i></p>
                            <h5 class ="black-text mb-0">SEE HISTORY</h5>
                        </div>
                    </a>
                    </div>
                    <div class ="col-md-4 mb-4">
                    <a href="#!" class ="card hoverable">
                    <div class ="card-body my-4">
                    <p><i class ="fas fa-pencil-ruler fa-2x text-muted"></i></p>
                    <h5 class ="black-text mb-0">FEEDBACK</h5>
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