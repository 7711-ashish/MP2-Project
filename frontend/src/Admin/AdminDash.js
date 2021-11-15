import React, { useState, useEffect } from 'react';
import AdminTranslist from './AdminTranslist';
const AdminDash = () => {
    const [cntTruck, setTruck] = useState("");
    const [cntTrans, setTrans] = useState("");
    const [cntCust, setCust] = useState("");
    const [transporterList, setTransList] = React.useState([]);

    useEffect(() => {
        sessionStorage.clear();
        console.log(sessionStorage.getItem('authtoken'));
        function count() {
            fetch('/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                setTruck(data.countTruck);
                setTrans(data.countTransporter);
                setCust(data.countCustomer);
            });
        };
        function transporterList() {
            fetch('/transporterList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                setTransList(data);
            });
        }
        count();
        transporterList();
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <strong><a className="navbar-brand" to="#">FREIGTHCENTRAL</a></strong>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-2 mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#login">SignOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container my-5">
                <div className="container row">
                    <div class="col-4 mb-4">
                        <a class="card hoverable">
                            <div class="card-body my-4">
                                <h1>{cntTruck}</h1>
                                <h5 class="black-text mb-0">REGISTERED TRUCKS</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-4 mb-4">
                        <a class="card hoverable">
                            <div class="card-body my-4">
                                <h1>{cntTrans}</h1>
                                <h5 class="black-text mb-0">REGISTERED TRANSPORTER</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-4 mb-4">
                        <a class="card hoverable">
                            <div class="card-body my-4">
                                <h1>{cntCust}</h1>
                                <h5 class="black-text mb-0">REGISTERED CUSTOMERS</h5>
                            </div>
                        </a>
                    </div>
                </div>
               <AdminTranslist/>
            </div>
        </>
    )
}

export default AdminDash;
