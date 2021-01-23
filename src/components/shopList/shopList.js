import React from 'react';
import './shopList.scss';
import item1 from './item1.jpg';

const ShopList = () => {
    return (
        <div className='shopItems'>
            <div className='shopItem'>
                <img className='shopItem__img' src={item1} alt='product'/>
                <p className='shopItem__title'>Набор для путешесвий<br /> "BAXTER OF CALIFORNIA"</p>
                <span className='shopItem__price'>2 900 р</span>
                <button className='button shopItem__button'>Купить</button>
            </div>
        </div>
    )
}

export default ShopList;