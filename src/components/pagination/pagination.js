import React from 'react';
import './pagination.scss';

const Pagination = () => {
    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                <li className='pagination__item pagination__item--active'>1</li>
                <li className='pagination__item'>2</li>
                <li className='pagination__item'>3</li>
                <li className='pagination__item'>4</li>
            </ul>
        </div>
    )
}

export default Pagination;