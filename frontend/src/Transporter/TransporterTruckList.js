import React, { useState, useEffect } from 'react';
import "./TransporterSignUp.css"

const TransporterTruckList = ({ history }) => {
    const [data, setdata] = useState([]);
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
    // useEffect(() => {
    //     loadData();
    //     return () => { };
    // }, []);
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

    return (
        <div className="container">
            <button onClick={e=>{loadData(e)}} className="btn btn-primary mt-4 my-4">SHOW</button>
        {
        data.map((truck ,idx)=> (
            <section className="card" key={idx}>
                <div className="table-responsive">
                    <table className="table product-table table-cart-v-1">
                        <thead>
                            <tr>
                                <th className="font-weight-bold">
                                    <strong>TRUCK NUMBER</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Company</strong>
                                </th>
                               
                                <th className="font-weight-bold">
                                    <strong>Price</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Capacity</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>Trans Email</strong>
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
                                <td className="font-weight-bold">
                                    <strong>{truck.transemail}</strong>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary mx-2" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW" onClick={e=>handleUpdate(e,truck)}>UPDATE
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW" onClick={e=>handleDelete(e,truck)}>DELETE
                                    </button>
                                    <button type="button" className="btn btn-sm btn-primary mt-2" data-toggle="tooltip" data-placement="top"
                                        title="DETAILS" >DETAILS
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
    );
}

export default TransporterTruckList;