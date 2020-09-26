import React, { Component } from 'react';
import Loading from '../Loading/loading';
import searchModule from './search.module.css';

class Search extends Component {
    constructor({users,history}) {
        super();
        this.state = {
            users: users,
            history:history,
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }
    
    handleChange = (event) => {
        const searchValue = event.target.value;
        this.setState({
            loading:true,
            searchQuery: searchValue
        })
        if(searchValue){
            this.state.users.map(user => {
                if( user.firstName === searchValue ){
                    console.log("handleChange -> user.firstName", user.firstName)
                    this.setState({
                        searchResults: user,
                        loading:false
                    })
                }
            })
        }
    }
    
    redirect = (userId) => {
        this.state.history.push(`/user/${userId}`);
        this.setState({
            searchQuery:'',
            searchResults: []
        })
    }
   
    searchResult = () => {
        const {searchQuery , searchResults , loading} = this.state
        if(!searchQuery){
            return ''
        }
        if(searchResults.length > 0){
            return (
                <div className={searchModule.Search_result_container}>
                    {
                        searchResults.map(user => {
                            console.log("renderSearchResult -> searchResults", searchResults);

                            return(
                                <div    
                                    key={user.id}
                                    onClick={() => { this.redirect(user.id) }}
                                    className={searchModule.Search_result}
                                >
                                    FirstName---:{user.firstName}
                                </div>
                            )
                        })
                    }
                </div>

            )
        }
        if(!loading){
            return(
                <div className={searchModule.Search_no_result}>
                    No results found ----- {searchQuery}
                </div>
            )
        }
    }
    render() {
        const {searchQuery , loading} = this.state
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
                    {
                        loading && searchQuery && (
                            <div className='Search-loading'>
                                <Loading
                                    width={"15px"}
                                    height={"15px"}
                                />
                            </div>
                        )
                    }
                </div>
                {this.searchResult()}
            </div>
        )
    }
}

export default Search;