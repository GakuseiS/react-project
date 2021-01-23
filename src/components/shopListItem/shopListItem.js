import React from 'react';
import './shopListItem.scss';

const ShopListItem = ({type, brand, price, img}) => {
    return (
        
        <div className='shopItem'>
            <img className='shopItem__img' src={img} alt='product'/>
            <p className='shopItem__title'>{type}<br /> "{brand}"</p>
            <span className='shopItem__price'>{price}</span>
            <button className='button shopItem__button'>Купить</button>
        </div>
    )
}

export default ShopListItem;