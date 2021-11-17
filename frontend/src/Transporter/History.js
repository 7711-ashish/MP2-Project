import React, { useState,useEffect } from 'react';
const History = ({ history }) => {
    const [data, setdata] = useState([""]);
    useEffect(() => {
        const loadData = async (e) => {
            const email = sessionStorage.getItem('transemail');
            const role = "transporter";
            await fetch("/trans/history", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    transemail: email,role
                })
            }
            ).then(res => res.json()).then(data =>{setdata(data)});
            data.reverse()
        }
        loadData();
    },[])

//     const handleDiliverd=(e,truck)=>{
//         e.preventDefault();
//         fetch("/trans/delivery", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 _id : truck._id,truckNo:truck.truckNo
//             })

//     })
// }
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
                            <li className="nav-item active">   
                                <a className="nav-link" onClick={e=>{handleSignout(e)}}>SignOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <button onClick={e=>{loadData(e)}} className="btn btn-primary mt-4 my-4">SHOW</button> */}
        {
        data.map(truck => (
            <section className="card mb-4 container">
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
                                    <strong>DATE</strong>
                                </th>
                                <th className="font-weight-bold">
                                    <strong>TRCUK NUMBER</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5 className="mt-3">
                                        {truck.user}
                                    </h5>
                                </td>
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
                                    {truck.truckNo}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        {truck.transconfirm?<button className="ml-4 btn btn-success col-lg-4" disabled>CONFIRMED</button>:<button className="btn btn-danger">CANCELED</button>}
                        {truck.transconfirm&&truck.status?<button className="btn btn-success col-lg-4 ml-4" >DELIVERED</button>:<></>}
                    
                </div>
            </section>
        )
        )
        }
        </div>
    );
}

export default History;