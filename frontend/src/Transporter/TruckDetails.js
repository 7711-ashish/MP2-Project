import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../Truck/Addtruck.css'
import Footer from "../Common/Footer"
const TruckDetails=({ history})=> {
    const {number} = useParams();

    const [truck, setTruck] = useState("");
    useEffect(() => {

        async function fetchData() {
            console.log(number)
            fetch(`/truck/${number}`,{ 
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    number: number
                })

    
            }).then(res => res.json()).then(data => {setTruck(data)})
        }
        fetchData();
       
    }, [])
    const handleSignout=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        sessionStorage.clear()
        history.push('/')
    }
    const handleDash=(e)=>{
        e.preventDefault();
        const tok = sessionStorage.getItem('transauthToken');
        history.push(`/transporter/${tok}/dashboard`)
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
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
        <button className="btn btn-primary m-4" onClick={()=>history.goBack()}>Back</button>
        <div className="container mb-4">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h1 className="lead-text mn-txt">
                                        DETAILS
                                    </h1>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form >
                                            <div className="form-group2">
                                                <label htmlFor="name">Truck Name:</label>
                                                <input id="name" type="text" className="form-control sgnUp" value={truck.name} onChangeplaceholder="name" name="name"/>
                                            </div>

                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck Number</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={truck.number} placeholder="number" name="number" />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck comapany</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={truck.company} placeholder="company" name="company"/>
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck capacity</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={truck.capacitty} placeholder="capacitty" name="capacitty"/>
                                            </div>
                                            <div class="form-group2">
                                                {/* <label htmlFor="mob-number">Route Pickup City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.pickupcity} placeholder="pickupcity" name="pickupcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">PICK UP CITY</label>
                                                        <input className="custom-select d-block w-100"value={truck.pickupcity}name="pickupcity"id="state"required>
                                                            
                                                        </input>
                                                {/* <label htmlFor="mob-number">Route Drop City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.dropcity} placeholder="dropcity" name="dropcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">DROP CITY</label>
                                                        <input className="custom-select d-block w-100"value={truck.dropcity}id="state"required>
                                                            
                                                        </input>
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">TRUCK PRICE</label>
                                                <input id="name" type="text" className="form-control sgnUp"value={truck.price}name="price"placeholder="price"/>
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">ALAWAY TRANSPORT SAFELY</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}


export default TruckDetails;