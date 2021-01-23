import React from 'react';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
    return (
        <div className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>Главная</li>
                <li className='breadcrumbs__item'>Магазин</li>
                <li className='breadcrumbs__item breadcrumbs__item--active'>Средства для ухода</li>
            </ul>
        </div>
    )
}

export default Breadcrumbs;