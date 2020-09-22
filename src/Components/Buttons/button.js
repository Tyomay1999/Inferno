import React from 'react';
import './button.css' ;
import Modal from '../Modal/modal'

export const AddUser = () => {
    return(
        <div className="container">
            <button className="btn btn-4" onClick={() => {return ( <Modal/>)}}>Add User</button> 
        </div>
    )
}