import React, { useState } from 'react'
import Navbar from '../Common/Navbar'
import './Addtruck.css'
import Options from '../Common/Options'
const RegisterTruck=({ history })=> {
    let transemail = sessionStorage.getItem('transemail');
    const [user, setUser] = useState({
        name: "", number: "", pickupcity: "", dropcity: "", company: "", capacitty: "",status:"",price:""
    });
    let name,value;
    const handleChangeEvent = (e) => {
            name = e.target.name;
            value = e.target.value;
            setUser({ ...user, [name]: value })
        
    }
    
    // submiting data to backend
    const submitData =async(e) => {
        e.preventDefault();
        const { name,number,pickupcity,dropcity,company,capacitty,price} = user;
        const res = await fetch("/addTruck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, number: number,pickupcity:pickupcity,dropcity:dropcity,company:company,capacitty:capacitty,transemail:transemail,price:price
            })
        });

        const data = await res.json();
        console.log(data);
        if (data.error || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("Success");
            history.goback();
        }
        // window.alert("Added success");
        // history.push('/transDash')
    }
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
        <>
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
        <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h1 className="lead-text mn-txt">
                                        ADD TRUCK
                                    </h1>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form onSubmit={e => submitData(e)}>
                                            <div className="form-group2">
                                                <label htmlFor="name">Truck Name:</label>
                                                <input id="name" type="text" className="form-control sgnUp" value={user.name} placeholder="name" name="name" onChange={e => handleChangeEvent(e)} />
                                            </div>

                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck Number</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={user.number} placeholder="number" name="number" onChange={e => handleChangeEvent(e)} />
                                            </div>
                                            {/* <div class="form-group2">
                                                <label htmlFor="mob-number">Driver Name</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                            </div> */}
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck comapany</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={user.company} placeholder="company" name="company" onChange={e => handleChangeEvent(e)} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck capacity</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={user.capacitty} placeholder="capacitty" name="capacitty" onChange={e => handleChangeEvent(e)} />
                                            </div>
                                            <div class="form-group2">
                                                {/* <label htmlFor="mob-number">Route Pickup City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.pickupcity} placeholder="pickupcity" name="pickupcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">PICK UP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.pickupcity}name="pickupcity" onChange={e => handleChangeEvent(e)} id="state"required>
                                                            <option>--Choose State--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                                {/* <label htmlFor="mob-number">Route Drop City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.dropcity} placeholder="dropcity" name="dropcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">DROP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.dropcity}name="dropcity" onChange={e => handleChangeEvent(e)} id="state"required>
                                                            <option>--Choose State--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">TRUCK PRICE</label>
                                                <input id="name" type="text" className="form-control sgnUp"value={user.price}name="price"placeholder="price" onChange={e => handleChangeEvent(e)}  />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">Transporter Email</label>
                                                <input id="name" type="text" className="form-control sgnUp" value={transemail} placeholder="transemail" name="transemail" disabled/>
                                            </div>
                                            <div class="form-group2">
                                                <input required type="submit" value="submit" className="btn-primary btnn form-submit sub-btn sgnUp"/>
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
        </>
    )
}


export default RegisterTruck;