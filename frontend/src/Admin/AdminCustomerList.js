import React from 'react';
const AdminTranslist = ({ props }) => {
    const customerList = props;
    console.log(customerList);

    return (
        <section >
            <table className="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Work</th>
                        <th scope="col">PHONE</th>
                    </tr>
                </thead>
                {customerList.map((transporter, index) => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{transporter.name}</td>
                                <td>{transporter.email}</td>
                                <td>{transporter.work}</td>
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