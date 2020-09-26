import React, { Component } from 'react';
import { API_URL } from '../../config';
import Search from '../Search/search';
import Table from '../Table/table';
import Pagination from './pagination'
import Loading from '../Loading/loading';
import NotFound from '../NotFound/notFound';

class List extends Component {
    constructor(prop) {
        super();
        this.state = {
            paginationData: [],
            allUsers: [],
            users: [],
            loading: false,
            downUp: '↑',
            history: prop.history,
            totalPages: 1,
            page: 1,
            error: false
        };
        this.userIdSort = this.userIdSort.bind(this);
        this.paginationClick = this.paginationClick.bind(this);
    }
    fatchCurensis() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL()}`)
            .then(resp => {
                return resp.json().then(data => {
                    if(resp.ok){
                        return data
                    }
                    return Promise.reject(data)
                })
            })
            .then(data => {
                let i = 1;
                data = data.map(item => {
                    item.id = i;
                    i++;
                    return item
                })
                this.dataPagination(data)
                this.setState({
                    loading: false,
                    allUsers: data,
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }
    componentDidMount() {
        this.fatchCurensis();
    }
    dataPagination(data) {
        let index = 0;
        let b = 0;
        let i = 0;
        let falseArray = [];
        let arrayReturner = [];
        data.map(item => {
            if (i < 50 + b) {
                falseArray.push(item);
                i++;
            } else if (i === 50 + b) {
                falseArray.push(item)
                arrayReturner[index] = falseArray;
                falseArray = [];
                index++;
                i--;
                b += 50
            }
        })
        if (falseArray) {
            arrayReturner[index] = falseArray
        }
        let total = arrayReturner.length;
        this.setState({
            users: arrayReturner[0],
            paginationData: arrayReturner,
            totalPages: total
        })
    }
    userIdSort() {
        this.setState({
            loading: true
        })
        if (this.state.downUp === '↑') {
            this.dataPagination(this.state.allUsers.reverse())
            this.setState({
                downUp: '↓',
                loading: false
            })
        } else {
            this.dataPagination(this.state.allUsers.reverse())
            this.setState({
                downUp: '↑',
                loading: false
            })
        }
    }

    paginationClick(prop) {
        let nextPage = this.state.page;
        nextPage = prop === 'next' ? nextPage + 1 : nextPage - 1;
        let b = nextPage - 1;
        let usersPage = this.state.paginationData[b];
        this.setState({
            users: usersPage,
            page: nextPage
        })
    }

    render() {
        const { loading, users, downUp, history, page, totalPages, allUsers,error } = this.state;
        if(error){
            return(
                <NotFound/>
            )
        }
        if (loading) {
            return (
                <Loading />
            )
        }
        return (
            <div>
                <Search
                    users={allUsers}
                    history={history}
                />
                <Table
                    users={users}
                    downUp={downUp}
                    userIdSort={this.userIdSort}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    paginationClick={this.paginationClick}
                />
            </div>
        )
    }
}

export default List;