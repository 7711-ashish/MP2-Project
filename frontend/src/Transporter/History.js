import React, { useState } from 'react';
const History = ({ history }) => {
    const [data, setdata] = useState([]);
    const loadData = async (e) => {
        // console.log(sessionStorage.getItem('transemail'));
        const email = sessionStorage.getItem('transemail');
        e.preventDefault();
        await fetch("/trans/history", {
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
        data.sort((a, b) => (a.date > b.date) ? 1 : -1);

    }

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
    return (

        <div className="container">
            <button onClick={e=>{loadData(e)}} className="btn btn-primary mt-4 my-4">SHOW</button>
        {
        data.map(truck => (
            <section className="card mb-4">
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
                    <div>
                        {truck.transconfirm?<button className="btn btn-success col-lg-4" disabled>CONFIRMED</button>:<button className="btn btn-danger">CANCELED</button>}
                        {truck.transconfirm&&truck.status?<button className="btn btn-success col-lg-4 ml-2" >DELIVERED</button>:<></>}
                    </div>
                </div>
            </section>
        )
        )
        }
        </div>
    );
}

export default History;