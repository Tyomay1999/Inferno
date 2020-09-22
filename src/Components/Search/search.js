import React from 'react';
import searchModule from'./search.module.css';

export const Search = () => {
    return (
        <div className={searchModule.wrap}>
            <div className={searchModule.search}>
                <input type="text" className={searchModule.searchTerm} placeholder="Write Users data?" />
            </div>
        </div>
    )
}