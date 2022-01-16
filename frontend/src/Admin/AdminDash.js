import React, { useState, useEffect } from 'react';
import AdminTranslist from './AdminTranslist';
import AdminTrucks from './AdminTrucks';
import AdminCustomerList from './AdminCustomerList';
const AdminDash = ({ history}) => {
    const [cntTruck, setTruck] = useState("");
    const [cntTrans, setTrans] = useState("");
    const [cntCust, setCust] = useState("");
    const [transporterList, setTransList] = React.useState([]);
    const [customerList, setCustomerList] = React.useState([]);
    const [truckList, setTruckList] = React.useState([]);
    const [Flg, setFlg] = useState("");
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
        function customerList() {
            fetch('/customerList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                setCustomerList(data);
            });
        }
        function truckList() {
            fetch('/truckList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                setTruckList(data);
            });
        }
        count();
        transporterList();
        customerList();
        truckList();
    }, [])

    const handleFlag = (e,role) => {
        // e.preventDefault();
        if(role === 'trans'){
            setFlg("");
        }
        else if(role === 'customer'){
            setFlg("1");
        }
        else{
            setFlg("2");
        }
    }
    const handleSignout=(e)=>{
        e.preventDefault();
        history.push('/');
    }
    const mystyle={
        height:"50"
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <strong><a className="navbar-brand" to="#">FREIGTHCENTRAL</a></strong>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ml-lg-2 mb-2 mb-lg-0">
                            <a className="nav-item">
                                <button className="nav-link"onClick={e=>handleSignout(e)}>SignOut</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <section className=" container">
            <div class="container" >
                <div className="row">
                    <div class="col-4 mb-4">
                        <a class="card hoverable" style={{"color":"black"}}>
                            <div class="card-body my-4">
                                <h1>{cntTruck}</h1>
                                <h5 class="black-text mb-0">REGISTERED TRUCKS</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-4 mb-4">
                        <a class="card hoverable" style={{"color":"black"}}>
                            <div class="card-body my-4">
                                <h1>{cntTrans}</h1>
                                <h5 class="black-text mb-0">REGISTERED TRANSPORTER</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-4 mb-4">
                        <a class="card hoverable" style={{"color":"black"}}>
                            <div class="card-body my-4">
                                <h1>{cntCust}</h1>
                                <h5 class="black-text mb-0">REGISTERED CUSTOMERS</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div class="col-4 mb-4">
                        <a className="card hoverable" onClick={e=>handleFlag(e,"trans")} style={{"color":"black"}} name="trans">
                        <div class="card-body my-4">
                            <h4 ><strong>TRANSPORTER LIST</strong> </h4>
                        </div>
                        </a>
                    </div>
                    <div class="col-4 mb-4">
                        <a className="card hoverable" onClick={e=>handleFlag(e,"customer")} style={{"color":"black"}}  name="trans">
                        <div class="card-body my-4">
                            <h4><strong>CUSTOMER LIST</strong> </h4>
                        </div>
                        </a>
                    </div><div class="col-4 mb-4">
                        <a className="card hoverable" onClick={e=>handleFlag(e,"truck")} style={{"color":"black"}}  name="trans">
                        <div class="card-body my-4">
                            <h4><strong>Truck LIST</strong> </h4>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            </section>
            <section className="container">
                <div className="row">  
                    <div className="col-md-12">
                        {Flg ===""? <h1>Transporter List</h1>:Flg ==="1"? <h1>Customer List</h1>:<h1>Truck List</h1>}
                    </div>
                </div>
            </section>
            <section className="container">
            {
                Flg === "" ?<AdminTranslist props={transporterList}/>:Flg === "1" ? <AdminCustomerList props={customerList}/>:<AdminTrucks props={truckList}/>
            }
            </section>
        </>
    )
}

export default AdminDash;
