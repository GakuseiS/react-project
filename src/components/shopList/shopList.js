import React from 'react';
import './shopList.scss';
import ShopListItem from '../shopListItem';
import item1 from './item1.jpg';
import item2 from './item2.jpg';
import item3 from './item3.jpg';
import item4 from './item4.jpg';
import item5 from './item5.jpg';
import item6 from './item6.jpg';

const ShopList = () => {
    const goods = [
        {type: 'Набор для путешествий', brand: 'BAXTER OF CALIFORNIA', price: '2900 р', img: item1},
        {type: 'Увлажняющий кондиционер', brand: 'BAXTER OF CALIFORNIA', price: '750 р', img: item2},
        {type: 'Гель для волос', brand: 'SUAVECITO', price: '290 р', img: item3},
        {type: 'Глина для укладки волос', brand: 'AMERICAN CREW', price: '500 р', img: item4},
        {type: 'Гель для волос', brand: 'AMERICAN CREW', price: '300 р', img: item5},
        {type: 'Набор для бритья', brand: 'BAXTER OF CALIFORNIA', price: '3 900 р', img: item6}]
    return (
        <div className='shopItems'>
            {goods.map((item, i) => {
                return <ShopListItem key={i} {...item}/>
            })}
        </div>
    )
}

export default ShopList;