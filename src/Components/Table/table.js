import React from 'react';
import tableModule from './table.module.css';
import { AddUser } from '../Buttons/button';
import { withRouter } from 'react-router-dom';
const Table = ({ users, history, downUp, userIdSort }) => {
    return (
        <section>
            <AddUser
                history={history}
            />
            <div className={tableModule.tbl_header}>
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr onClick={() => { userIdSort() }}>
                            <th >Id {`${downUp}`}</th>
                            <th>First Name {`${downUp}`}</th>
                            <th>Last Name {`${downUp}`}</th>
                            <th>Email {`${downUp}`}</th>
                            <th>Phone {`${downUp}`}</th>
                            <th>City {`${downUp}`}</th>
                            <th>Street Address {`${downUp}`}</th>
                            <th>State {`${downUp}`}</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className={tableModule.tbl_content}>
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
                                    <tr key={id} onClick={() => { history.push(`/user/${id}`) }}>
                                        <td>{id}</td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{email}</td>
                                        <td>{phone} </td>
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