import React, { Component } from 'react';
import { API_URL } from '../../config';
import { Search } from '../Search/search';
import Table from '../Table/table';
import Loading from '../Loading/loading';

class List extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
        }
    }
    fatchCurensis() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL}`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                this.setState({
                    loading: false,
                    users: data
                })
            })

    }
    componentDidMount() {
        this.fatchCurensis()
    }
    render() {
        const { loading, users } = this.state
        if (loading) {
            return (
                <Loading />
            )
        }
        return (
            <div>
                <Search/>
                <Table
                    users={users}
                />
            </div>
        )
    }
}

export default List;