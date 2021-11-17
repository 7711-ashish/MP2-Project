import React, { useState, useEffect } from 'react';
import "./TransporterSignUp.css"
import Footer from '../Common/Footer';

const TransporterTruckList = ({ history }) => {
    const [data, setdata] = useState([""]);
    
    useEffect(() => {
        const loadData = async (e) => {
            console.log(sessionStorage.getItem('transemail'));
            // e.preventDefault();
            const res = await fetch("/trucklist", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    transemail: sessionStorage.getItem("transemail")
                })
            }
            ).then(res => res.json()).then(data =>{setdata(data)});
    
        }
        loadData();
    },[])
  
    // useEffect(() => {
    //     loadData();
    //     return () => { };
    // }, []);
    const handleDetails = async (e,truck) => {
        e.preventDefault();
        history.push(`/truckDetails/${truck.number}`);
    }

    const handleUpdate=(e,truck)=>{
        e.preventDefault();
        console.log(truck)
        localStorage.setItem("truckid",truck._id);
        localStorage.setItem("truckname",truck.name);
        localStorage.setItem("trucknumber",truck.number);
        localStorage.setItem("truckcompany",truck.company);
        localStorage.setItem("truckcapacity",truck.capacitty);
        localStorage.setItem("truckstatus",truck.status);
        localStorage.setItem("truckemail",truck.transemail);
        localStorage.setItem("truckpickup",truck.pickupcity);
        localStorage.setItem("truckdrop",truck.dropcity);

        history.push(`/transporter/updateTruck/${truck._id}`);
    }
    const handleDelete=async(e,truck)=>{
        e.preventDefault();
        const res = await fetch(`/transporter/deleteTruck/${truck._id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: truck.number
            })
        }).then(res => res.json()).then(data =>{window.alert(data)});
    }
    const handleSignout=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        sessionStorage.clear()
        history.push('/')
    }

    return (
        <div>
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
            <div className="container">
        {
        data.message=== "No Truck Found"?
        <div className="alert alert-danger">
        <h1>NO TRUCK REGISTERED</h1>:
        </div>:
        data.map((truck ,idx)=> (
            <section className="card" key={idx}>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th >
                                    <strong>TRUCK NUMBER</strong>
                                </th>
                                <th>
                                    <strong>Company</strong>
                                </th>
                               
                                <th>
                                    <strong>Price</strong>
                                </th>
                                <th >
                                    <strong>Capacity</strong>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* <h5 className="mt-3"> */}
                                        <strong>{truck.number}</strong>
                                    {/* </h5> */}
                                </td>
                                <td>{truck.company}</td>
                                
                                <td>{truck.price}</td>
                                <td className="font-weight-bold">
                                    <strong>{truck.capacitty}</strong>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary mx-2" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW" onClick={e=>handleUpdate(e,truck)}>UPDATE
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW" onClick={e=>handleDelete(e,truck)}>DELETE
                                    </button>
                                    <button type="button" className="btn btn-sm btn-primary mt-2 ml-2" data-toggle="tooltip" data-placement="top"
                                        title="DETAILS" onClick={e=>handleDetails(e,truck)}>DETAILS
                                    </button>
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </section>
        )
        )
        }
        </div>
        </div>
    );
}

export default TransporterTruckList;