import React, { Component } from 'react';
import searchModule from './search.module.css';

class Search extends Component {
    constructor({ users, history }) {
        super();
        this.state = {
            users: users,
            history: history,
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }

    handleChange = (event) => {
        const searchValue = event.target.value;
        this.setState({
            loading: true,
            searchQuery: searchValue
        })
        if (searchValue) {
            let data = []
            this.state.users.forEach(user => {
                if ( user.firstName === searchValue || user.lastName === searchValue || user.address.city === searchValue) {
                    data[data.length] = user
                }
            })
            this.setState({
                searchResults: data,
                loading: false
            })
        }
    }

    redirect = (userId) => {
        this.state.history.push(`/user/${userId}`);
        this.setState({
            searchQuery: '',
            searchResults: []
        })
    }

    searchResult = () => {
        const { searchQuery, searchResults, loading } = this.state
        if (!searchQuery) {
            return ''
        }
        console.log("searchResult -> searchResults.length", searchResults.length)
        if (searchResults.length > 0) {
            return (
                <div className={searchModule.Search_result_container}>
                    {
                        searchResults.map(user => {
                            console.log("renderSearchResult -> searchResults", searchResults);

                            return (
                                <div
                                    key={user.id}
                                    onClick={() => { this.redirect(user.id) }}
                                    className={searchModule.Search_result}
                                >
                                    {user.id} {user.firstName} {user.lastName}
                                </div>
                            )
                        })
                    }
                </div>

            )
        }
        if (!loading) {
            return (
                <div className={searchModule.Search_no_result}>
                    No results found -----{">"} {searchQuery}
                </div>
            )
        }
    }
    render() {
        console.log("redirect -> searchQuery", this.state.searchQuery)
        const { searchQuery } = this.state
        return (
            <div className={searchModule.Search} >
                <div className=''>
                    <span
                        className={searchModule.Search_icon}
                    />
                    <input
                        type='text'
                        value={searchQuery}
                        className={searchModule.Search_input}
                        placeholder='User firstName or lastName'
                        onChange={this.handleChange}
                    />
                </div>
                {this.searchResult()}
            </div>
        )
    }
}

export default Search;