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


    return (
        <div className="container">
            <button onClick={e=>{loadData(e)}} className="btn btn-lg btn-primary mt-4 my-4">CLICK HERE TO SHOW LIST</button>
        {
        data.map((truck,idx) => (
            <section className="card mb-2" key={idx}>
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