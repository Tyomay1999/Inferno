import React from 'react';
import buttonModule from'./button.module.css' ;
import {withRouter} from 'react-router-dom';


export const AddUser = ({history}) => {
    return(
        <div className={buttonModule.container}>
            <button className={`${buttonModule.btn} ${buttonModule.btn_4}`} onClick={() => {history.push(`AddUser`)}} >Add User</button> 
        </div>
    )
}