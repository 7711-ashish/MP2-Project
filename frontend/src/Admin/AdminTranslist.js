import React from 'react';
const AdminTranslist = ({ props }) => {
    const transporterList = props;
    console.log(transporterList);

    return (
        <section >
            <table className="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">COMPANY</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">PHONE</th>
                    </tr>
                </thead>
                {transporterList.map((transporter, index) => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{transporter.company}</td>
                                <td>{transporter.name}</td>
                                <td>{transporter.email}</td>
                                <td>{transporter.phone}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

        </section>
    );
}

export default AdminTranslist