import React from 'react';
// import './modal.css'
import addUserModal from './addUserModal.module.css';

export const Modal = () => {
    return (
        <div>
            Modal
        </div>
    )
}

export const AddUserModal = () => {
    return (
        <div className={addUserModal.wrapper}>
            <div className={addUserModal.group}>
                <input type="text"   placeholder="Name" />
            </div>
            <div className={addUserModal.group}>
                <input type="text"  placeholder="FirstName" />
            </div>
            
        </div>
    )
}