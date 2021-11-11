import React, { useState } from 'react';
const CustomerHistory = ({ history }) => {
    const [data, setdata] = useState([]);
    const loadData = async (e) => {
        // console.log(sessionStorage.getItem('transemail'));
        const email = sessionStorage.getItem('user_email');
        const role = "customer";
        e.preventDefault();
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
    }
    return (
        <div className="container">
            <button onClick={e=>{loadData(e)}} className="btn btn-lg btn-primary mt-4 my-4">CLICK HERE TO SHOW HISTORY</button>
        {
        data.map(truck => (
            <section className="card mb-4">
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
                    </div>
                </div>
            </section>
        )
        )
        }
        </div>
    );
}

export default CustomerHistory;