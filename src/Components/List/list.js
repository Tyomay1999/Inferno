import React, { Component } from 'react';
import { API_URL } from '../../config';
import { Search } from '../Search/search';
import Table from '../Table/table';
import Loading from '../Loading/loading';

class List extends Component {
    constructor(prop) {
        super();
        this.state = {
            paginationData: [],
            users: [],
            loading: false,
            downUp: '↑',
            history: prop.history,
            totalPages: 1,
            page: 1,
        };
        this.userIdSort = this.userIdSort.bind(this);
    }
    fatchCurensis() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL()}`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let i = 1;
                data = data.map(item => {
                    item.id = i;
                    i++;
                    return item
                })
                this.setState({
                    loading: false,
                    users: data
                })
            })
        }
        componentDidMount() {
            this.fatchCurensis()
        }
        dataPagination(){
        const { users } = this.state.users
        let index = 0;
        let b = 0;
        let i = 0;
        let falseArray = [];
        let arrayReturner = [];
        users.map(item => {
            if(i < 50 + b){
                falseArray.push(item);
                i++;
            }else if (i == 50 + b ){
                falseArray.push(item)
                arrayReturner[index] = falseArray;
                falseArray = [];
                index++;
                i--;
                b+=50
            }
        })
        if(falseArray){
            arrayReturner[index] = falseArray
        }
        let total = arrayReturner.length;
        this.setState({
            paginationData : arrayReturner,
            totalPages: total
        })
    }
    userIdSort(){
        this.setState({
            loading:true
        })
        if(this.state.downUp === '↑'){
            this.setState({
                users: this.state.users.reverse(),
                downUp: '↓',
                loading:false
            })
        }else{
            this.setState({
                users: this.state.users.reverse(),
                downUp: '↑',
                loading:false
            })
        }
    }

    paginationClick(){
        
    }

    render() {
        const { loading, users,downUp,history } = this.state
        if (loading) {
            return (
                <Loading />
            )
        }
        return (
            <div>
                <Search
                    users={users}
                    history={history}
                />
                <Table
                    users={users}
                    downUp={downUp}
                    userIdSort={this.userIdSort}
                />
            </div>
        )
    }
}

export default List;