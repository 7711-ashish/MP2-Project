import React, { useEffect, useState } from 'react';
const BookingRequest = ({ history }) => {
    const [data, setdata] = useState([]);

    const loadData = async (e) => {
        // console.log(sessionStorage.getItem('transemail'));
        const email = sessionStorage.getItem('transemail');
        e.preventDefault();
        await fetch("/bookingRequests", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                transemail: email
            })
        }
        ).then(res => res.json()).then(data =>{setdata(data)});
        // data.sort((a, b) => (a.date > b.date) ? 1 : -1);

    }
    const handleConfirm = async (e,truck,transconfirm) => {
        e.preventDefault();
        console.log(truck.truckid)
        console.log(truck._id)
        await fetch("/transConfirm", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookingId:truck.bookingId,user:truck.user, pickupcity:truck.pickupcity,dropcity:truck.dropcity,date:truck.date,weight:truck.weight,transemail:truck.transemail,truckNo:truck.truckid,typeofgoods:truck.typeofgoods,price:truck.price,status:true,transconfirm:transconfirm
            })
        }).then(res => res.json()).then(data => {
            window.alert(data.message);
        })
    }
    const handleSignout=(e)=>{
        console.log(sessionStorage.getItem('transemail'));
        e.preventDefault();
        sessionStorage.clear()
        history.push('/')
    }
    const handleDash=(e)=>{
        const tok = sessionStorage.getItem('transauthToken');
        history.push(`/transporter/${tok}/dashboard`)
    }


    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">FREIGHT-CENTRAL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
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
            <button onClick={e=>{loadData(e)}} className="btn btn-lg btn-primary mt-4 my-4">CLICK HERE TO SHOW LIST</button>
        {
         data.err?  
         <div className="alert alert-danger">
         <h1>{data.err}</h1>
         </div>:data.map((truck,idx) => (
            <section className="card mb-2 container" key={idx}>
                <div className="table-responsive">
                    <table className="table product-table table-cart-v-1">
                        <thead>
                            <tr>
                                <th className="font-weight-bold">
                                    <strong>USER EMAIL</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>PICKUP CITY</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>DROP CITY</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>WEIGHT</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>TYPE OF GOOD</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>TRCUK NUMBER</strong>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5 className="mt-3">
                                        <strong>{truck.user}</strong>
                                    </h5>
                                </td>
                                <td>{truck.pickupcity}</td>
                                <td>{truck.dropcity}</td>
                                <td className="font-weight-bold">
                                    <strong>{truck.weight}</strong>
                                </td>
                                <td className="font-weight-bold">
                                    <strong>{truck.typeofgoods}</strong>
                                </td>
                                <td className="font-weight-bold">
                                    <strong>{truck.number}</strong>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW" onClick={e=>{handleConfirm(e,truck,true)}}>CONFIRM
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger mt-2" data-toggle="tooltip" data-placement="top"
                                        title="BOOK NOW"onClick={e=>{handleConfirm(e,truck,false)}}>CANCEL
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

export default BookingRequest;