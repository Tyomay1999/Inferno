import React from 'react';
import buttonModule from '../Buttons/button.module.css'
import addUserModal from './addUserModal.module.css';

export const AddUserModal = ({history}) => {
    return (
        <div className={addUserModal.container}>
            <div className={addUserModal.buttons}>
                <div className={buttonModule.container}>
                    <button className={`${buttonModule.btn} ${buttonModule.btn_4}`} onClick={() => { history.push(`/`) }} >Add User</button>
                </div>
                <div className={buttonModule.container}>
                    <button className={`${buttonModule.btn} ${buttonModule.btn_4}`} onClick={() => { history.push(`/`) }} >Back</button>
                </div>
            </div>
            <form>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>FirstName</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>LastName</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>Email</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="Number" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>Phone</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>City</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>Street Address</label>
                </div>
                <div className={addUserModal.group}>
                    <input type="text" required />
                    <span className={addUserModal.highlight}></span>
                    <span className={addUserModal.bar}></span>
                    <label>State</label>
                </div>

            </form>
        </div>
    )
}
