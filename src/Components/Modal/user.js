import React, { Component } from 'react';
import { API_URL } from '../../config';
import Loading from '../Loading/loading';
import userModule from './user.module.css';

class User extends Component {
    constructor(prop) {
        super();
        this.state = {
            history: prop.history,
            id: prop.match.params.id,
            user: [],
            loading: false
        }
    }
    feachUserData() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL(0,this.state.id)}`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                this.setState({
                    user: data,
                    loading: false
                })
            })
        }
    componentDidMount() {
        this.feachUserData()
    }
    render() {
        const { user, history, id, loading } = this.state;
       
        if (loading) {
            return <Loading />
        }

        return (
            <>
                <ul className={userModule.cards}>
                    <li className={userModule.user_card_item}>
                        <div className={userModule.user_card}>
                            <div className={`${userModule.user_card_pb} ${userModule.card__image__fence}`}></div>
                            <div className={userModule.user_card_img}></div>
                            <div className={userModule.user_card_cont}>
                                <br />
                                {
                                    user.map((item) => {
                                        return(
                                                <div key={id}>
                                                    <p className={userModule.user_id}>FirstName : {item.firstName}</p>
                                                    <p className={userModule.user_id}>LastName : {item.lastName}</p>
                                                    <p className={userModule.user_id}>Id : {item.id}</p>
                                                    <p className={userModule.user_card_text}>Email : {item.email}</p>
                                                    <p className={userModule.user_id}>Phone : {item.phone}</p>
                                                    <p className={userModule.user_id}>City : {item.address.city}</p>
                                                    <p className={userModule.user_id}>Street Address : {item.address.streetAddress}</p>
                                                    <p className={userModule.user_id}>State : {item.address.state}</p>
                                                </div>
                                            )
                                    })
                                }
                            </div>
                            <div className={userModule.btn_row}><button onClick={() => {history.push('/')}}>Back</button><button onClick={() => {history.push('/')}} >Delete</button></div>
                        </div>
                    </li>
                </ul>
            </>
        )


    }

}

export default User;