import React from 'react';
import './table.css';
import { AddUser } from '../Buttons/button';
import { withRouter } from 'react-router-dom'
let i = 0;
const Table = ({ users, history }) => {
    console.log("Table -> history", history)
    return (
        <section>
            <AddUser />
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Street Address</th>
                            <th>State</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {
                            users.map(({
                                id,
                                firstName,
                                lastName,
                                email,
                                phone,
                                address
                            }) => {

                                return (
                                    <tr key={i++} onClick={() => {history.push(`/user/${id}`)} }>
                                        <td>{id} ---- </td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{email}</td>
                                        <td>{phone} ---- </td>
                                        <td>{address.city}</td>
                                        <td>{address.streetAddress}</td>
                                        <td>{address.state}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default withRouter(Table);