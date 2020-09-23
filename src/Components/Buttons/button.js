import React from 'react';
import buttonModule from'./button.module.css' ;


export const AddUser = ({history}) => {
    return(
        <div className={buttonModule.container}>
            <button className={`${buttonModule.btn} ${buttonModule.btn_4}`} onClick={() => {history.push(`AddUser`)}} >Add User</button> 
        </div>
    )
}