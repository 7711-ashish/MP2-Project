import React, { useState,useEffect } from 'react';
const CustomerHistory = ({ history }) => {
    const [data, setdata] = useState([""]);
    
    useEffect(() => {
        const loadData = async (e) => {
            const email = sessionStorage.getItem('user_email');
            const role = "customer";
            await fetch("/trans/history", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: email,role
                })
            }
            ).then(res => res.json()).then(data =>{setdata(data)});
            data.reverse()
        }
        loadData();
    },[])
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
    const handleDash=()=>{
        history.push("/CustomerDashboard")
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
                                <a className="nav-link active" aria-current="page" to="/" onClick={e=>{handleDash()}}>Home</a>
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
        data.map((truck,idx) => (
            <section className="card mb-4" key={idx}>
                <div className="table-responsive">
                    <table className="table product-table table-cart-v-1">
                        <thead>
                            <tr>
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
                                    <strong>DATE</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>TRANSPORTER</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>TRCUK NUMBER</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{truck.pickupcity}</td>
                                <td>{truck.dropcity}</td>
                                <td className="font-weight-bold">
                                    {truck.weight}
                                </td>
                                <td className="font-weight-bold">
                                    {truck.typeofgoods}
                                </td>
                                <td className="font-weight-bold">
                                    {truck.date}
                                </td>
                                <td className="font-weight-bold">
                                    {truck.transemail}
                                </td>
                                <td className="font-weight-bold">
                                    {truck.truckNo}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        {truck.transconfirm?<button className="btn btn-success col-lg-4" disabled>CONFIRMED</button>:<button className="btn btn-danger">PENDING</button>}
                        {truck.transconfirm&&truck.status?<button className="btn btn-success col-lg-4" disabled>CONFIRMED</button>:<></>}
                    </div>
                </div>
            </section>
        )
        )
        }
        </div>
    </>  
    );
    
}

export default CustomerHistory;