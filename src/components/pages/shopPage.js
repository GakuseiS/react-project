import React from 'react';
import Breadcrumbs from '../breadcrumbs';
import Pagination from '../pagination';
import ShopForm from '../shopForm';
import ShopList from '../shopList';
import './shopPage.scss';


const ShopPage = () => {
    return (
        <div className='shopContainer'>
            <div className='shop'>
                <h2 className='shop__title'>Средства для ухода</h2>
                <Breadcrumbs />
                <div className='shop__container'>
                    <ShopForm />
                    <ShopList />
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ShopPage;