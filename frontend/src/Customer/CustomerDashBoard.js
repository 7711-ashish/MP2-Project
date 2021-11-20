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
    const handleDash=(e)=>{
        e.preventDefault();
        const tok = sessionStorage.getItem('authToken');
        history.push(`/customer/${tok}/dashboard`)
    }
    const mystyle = {
        color: "black",
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-col  bg-unique hm-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">CENTRAL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-4 mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" onClick={e=>handleDash(e)}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>{handleSignout(e)}}>SignOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div  style={mystyle} >

                <section className="container">
                    <h3 className=" mb-4 pb-2">CHOOSE OPTION</h3>
                    <hr/>
                    <div className ="row">
                    <div className ="col-md-6 mb-4">
                    <a onClick={e=>handleBook(e)} className ="card hoverable">
                    <div className ="card-body my-4">
                    <p><i className ="fas fa-tablet-alt fa-2x text-muted"></i></p>
                    <h5 className ="black-text mb-0">TRUCK BOOKING</h5>
                    </div>
                    </a>
                    </div>
                    <div className ="col-md-6 mb-4">
                    <a className ="card hoverable" onClick={e=>handleHistory(e)} style={{"color":"black"}}>
                        <div className ="card-body my-4">
                            <p><i className ="fas fa-cogs fa-2x text-muted"></i></p>
                            <h5 className ="black-text mb-0">SEE HISTORY</h5>
                        </div>
                    </a>
                    </div>
                    {/* <div className ="col-md-4 mb-4">
                    <a href="#!" className ="card hoverable">
                    <div className ="card-body my-4">
                    <p><i className ="fas fa-pencil-ruler fa-2x text-muted"></i></p>
                    <h5 className ="black-text mb-0">FEEDBACK</h5>
                    </div>
                    </a>
                    </div> */}
                    </div>
                </section>
            </div>
            <div style={mystyle}>
                <img src="https://clockwise.software/img/blog/how-to-build-an-app-like-uber-for-trucks/header-background.png" className="img-fluid" alt="smaple image" />
            </div>
            </div>


    );
}

export default CustomerDashboard;