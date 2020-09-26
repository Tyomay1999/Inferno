import React from 'react';
import notFoundModule from './notFound.module.css';

const NotFound = ({ history,message }) => {
    console.log("NotFound -> message", message)
    return (
        <>
            <div id={notFoundModule.background}></div>
            <div className={notFoundModule.top}>
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div className={notFoundModule.container}>
                <div className={notFoundModule.ghost_copy}>
                    <div className={notFoundModule.one}></div>
                    <div className={notFoundModule.two}></div>
                    <div className={notFoundModule.three}></div>
                    <div className={notFoundModule.four}></div>
                </div>
                <div className={notFoundModule.ghost}>
                    <div className={notFoundModule.face}>
                        <div className={notFoundModule.eye}></div>
                        <div className={notFoundModule.eye_right}></div>
                        <div className={notFoundModule.mouth}></div>
                    </div>
                </div>
                <div className={notFoundModule.shadow}></div>
            </div>
            <div className={notFoundModule.bottom}>
                <p>Boo, looks like a ghost stole this page!</p>
                <div className={notFoundModule.buttons}>
                    <button className={notFoundModule.btn} onClick={() => { history.push('/') }}>Home</button>
                </div>
            </div>
        </>
    )
}
export default NotFound;