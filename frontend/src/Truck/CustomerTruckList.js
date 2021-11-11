import React from 'react';
const CustomerTruckList = (props) => {

    const handleSubmit = (value) => {
        localStorage.setItem('truckId', value);
        console.log(value);
    }
    const renderFun = props.truck.map((truc,idx) => {
        return(
        <section key={idx}className="card mt-5">
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
                                    <strong>{truc.number}</strong>
                                </h5>
                            </td>
                            <td>{truc.company}</td>
                            <td></td>
                            <td>{truc.price}</td>
                            <td className="font-weight-bold">
                                <strong>{truc.capacitty}</strong>
                            </td>
                            <td className="font-weight-bold">
                                <strong>{truc.transemail}</strong>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                    title="BOOK NOW" onClick={handleSubmit({value:truc._id})}>BOOK
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>)
    });
    return (
        <div className="container z-depth-1 p-5 my-5">
              {renderFun()}
        </div>
    );
}

export default CustomerTruckList;