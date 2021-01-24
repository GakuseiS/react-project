import React from 'react';
import './priceList.scss';

const PriceList = () => {
    return (
        <div className='priceContainer'>
            <div className='price'>
                <h2 className='price__title'>Прайс-лист</h2>
                <div className='breadcrumbs'>
                    <ul className='breadcrumbs__list'>
                        <li className='breadcrumbs__item'>Главная</li>
                        <li className='breadcrumbs__item breadcrumbs__item--active'>Прайс-Лист</li>
                    </ul>
                </div>
                <h1 className='price__big-title'>Истинно мужская классика</h1>
                <div className='price__wrapper'>
                    <div className='price__block'>
                        <h3 className='price__block-title'>Мы используем только лучшие средства:</h3>
                        <ul className='price__block-list'>
                            <li className='price__block-item'>Baxter of California</li>
                            <li className='price__block-item'>Mr Natty</li>
                            <li className='price__block-item'>Suavecito</li>
                            <li className='price__block-item'>Malin+Goetz</li>
                        </ul>
                    </div>
                    <div className='price__block'>
                        <h3 className='price__block-title'>Цены на услуги<br /> наших мастеров:</h3>
                        <table className='price__block-table'>
                            <tbody>
                                <tr>
                                    <td className='price__block-cell'>Стрижка</td>
                                    <td className='price__block-cell'>1 500 р</td>
                                </tr>
                                <tr>
                                    <td className='price__block-cell'>Стрижка бороды</td>
                                    <td className='price__block-cell'>500 р</td>
                                </tr>
                                <tr>
                                    <td className='price__block-cell'>Накрутка усов</td>
                                    <td className='price__block-cell'>350 р</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='price__block'>
                        <h3 className='price__block-title'>Несколько слов о нас</h3>
                        <p className='price__block-text'>
                            Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.
                        </p>
                    </div>
                    <div className='price__block'>
                        <p className='price__block-text'>
                            Наша мастерская расположена в центре города, поэтому<br /> сделать стильную стрижку можно в любое время, даже в<br /> обеденный перерыв. Здесь вы можете погрузиться в удобную<br /> для вас атмосферу, чувствовать себя комфортно и свободно!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceList;