import React from 'react';
import './table.css';
import { AddUser } from '../Buttons/button';
const Table = ({ users }) => {
    console.log("Table -> users", users)
    return (
        <section>
            <AddUser />
            <div className="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
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
                <table cellpadding="0" cellspacing="0" border="0">
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
                                console.log("Table -> id", id)
                                return (
                                    <tr key={id} >
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

export default Table;