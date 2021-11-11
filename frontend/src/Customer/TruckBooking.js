import React, { useState } from 'react';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import Options from '../Common/Options';
import goods from '../Common/goods';
// import CustomerTruckList from '../Truck/CustomerTruckList';
const TruckBooking = ({ history }) => {
    const [trucks, setTruck] = useState([]);

    const [load, setLoad] = useState();

    const handleLoad=(e)=>{
        e.preventDefault();
        setLoad(e.target.value);
        console.log(load);
    }
    
    const [user, setUser] = useState({
        pickupcity: "", dropcity: "", capacitty: "",typeofgoods:""
    });
    let name, value;
    const handleChangeEvent = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const submitData = async (e) => {
        const { pickupcity, dropcity, capacitty } = user;
        // console.log(user.dropcity);
        // console.log(user.pickupcity);
        // console.log(user.weight);
        await fetch("/userTruckList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pickupcity: pickupcity, dropcity: dropcity, capacitty: capacitty
            })
        }).then(res => res.json()).then(data => {setTruck(data)});
        trucks.sort((a, b) => (a.price < b.price) ? 1 : -1);
        // console.log(trucks);
        // history.push('/customerDash');
    }
    const handleBook=(e,id,truck) =>{
        e.preventDefault();
        localStorage.setItem('truck', truck);
        const {ls} =  localStorage.getItem('truck')
        console.log(user.typeofgoods);
        localStorage.setItem('truckId',truck.number);
        localStorage.setItem('pickupcity',truck.pickupcity);
        localStorage.setItem('dropcity',truck.dropcity);
        localStorage.setItem('weight',user.capacitty);
        localStorage.setItem('price',truck.price);
        localStorage.setItem('adminemail',truck.transemail);
        localStorage.setItem('typeofgoods',user.typeofgoods);
        localStorage.setItem('load',load);
        history.push('/customer/payment');
    }


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <section className="dark-grey-text">

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav md-pills nav-justified pills-primary font-weight-bold">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#tabCheckoutBilling123" role="tab">1. Billing</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-4">
                                        <div className="tab-pane fade in show active" id="tabCheckoutBilling123" role="tabpanel">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                    <label htmlFor="state">PICK UP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.pickupcity}name="pickupcity" onChange={e => handleChangeEvent(e)} id="state"required>
                                                            <option>--Choose State--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                                        {/* <input type="text" id="firstName" value={user.pickupcity} placeholder="pickupcity" name="pickupcity" onChange={e => handleChangeEvent(e)} className="form-control" /> */}
                                                    </div>
                                                    <div className="col-md-6 mb-2">
                                                    <label htmlFor="state">DROP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.dropcity}name="dropcity" onChange={e => handleChangeEvent(e)} id="state"required>
                                                            <option>--Choose State--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 mb-4">
                                                        <label htmlFor="good">TYPE OF GOODS</label>
                                                        <select className="custom-select d-block w-100"value={user.typeofgoods}name="typeofgoods" onChange={e => handleChangeEvent(e)} id="good"required>
                                                            <option>--Choose State--</option>
                                                            {goods.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 mb-4">
                                                        <label htmlFor="zip">WEIGHT</label>
                                                        <input type="text" className="form-control" id="zip" value={user.capacitty} name="capacitty" onChange={e => handleChangeEvent(e)} placeholder="X_MT" required />
                                                        <div className="invalid-feedback">
                                                            WEIGHT In METRIC TONS
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="mb-1">
                                                    <input type="checkbox" className="form-check-input filled-in" id="chekboxRules" />
                                                    <label className="form-check-label" htmlFor="chekboxRules" required>I accept the terms and conditions</label>
                                                </div>
                                                <div className="mb-1">
                                                    <input type="checkbox" className="form-check-input filled-in" id="safeTheInfo" />
                                                    <label className="form-check-label" htmlFor="safeTheInfo" required>Save this information for next time</label>
                                                </div>
                                                <hr />
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <section className="dark-grey-text mt-4 mb-4">
                        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={e => submitData(e)}>SUBMIT</button>
                    </section>
                </section>
                <section className="dark-grey-text mt-4 mb-4 card">
                { trucks.err? <h1>OOO NO LIST</h1>:
                trucks.map((truck,idx) => (
                        <section key={idx}>
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
                                            <th></th>
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
                                                <h5 className="mt-3">
                                                    <strong>{truck.number}</strong>
                                                </h5>
                                            </td>
                                            <td>{truck.company}</td>
                                            <td></td>
                                            <td>{truck.price}</td>
                                            <td className="font-weight-bold">
                                                <strong>{truck.capacitty}</strong>
                                            </td>
                                            <td className="font-weight-bold">
                                                <strong>{truck.transemail}</strong>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                                    title="BOOK NOW" onClick={e=>handleBook(e,truck._id,truck)}>BOOK
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
                </section>
            </div>

            <Footer />
        </>
    )
}

export default TruckBooking;