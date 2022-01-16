import React from 'react';
const AdminTranslist = ({ props }) => {
    const truckList = props;
    console.log(truckList);
    const onDelete = (id) => {
        fetch(`/deleteTruck/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            window.location.reload();
        });
    }
    return (
        <section >
            <table className="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NUMBER</th>
                        <th scope="col">Pickupcity</th>
                        <th scope="col">Dropcity</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Type of Truck</th>
                        <th scope="col">Price</th>
                        <th scope="col">Transporter</th>
                        <th></th>
                    </tr>
                </thead>
                {truckList.map((truck, index) => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{truck.number}</td>
                                <td>{truck.pickupcity}</td>
                                <td>{truck.dropcity}</td>
                                <td>{truck.capacitty}</td>
                                <td>{truck.typeoftruck}</td>
                                <td>{truck.price}</td>
                                <td>{truck.transemail}</td>
                                <td><button className="btn btn-primary" onClick={e=>onDelete(truck.number)}>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

        </section>
    );
}

export default AdminTranslist