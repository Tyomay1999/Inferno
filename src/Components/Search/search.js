import React from 'react';
import './search.css';

export const Search = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Write Users data?" />
            </div>
        </div>
    )
}