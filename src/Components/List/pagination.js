import React from 'react';
import paginationModule from './pagination.module.css';

const Pagination = (props) => {
    const { paginationClick, page, totalPages } = props
    return (
        <div className={paginationModule.Pagination}>
            <button
                className={paginationModule.Pagination_button}
                onClick={() => paginationClick('prev')}
                disabled={page === 1}
            >
                &larr;
            </button>
            <span
                className={paginationModule.Pagination_info}
            >
                Page <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button
                className={paginationModule.Pagination_button}
                onClick={() => paginationClick('next')}
                disabled={page === totalPages}

            >
                &rarr;
            </button>

        </div>
    )
}
export default Pagination;