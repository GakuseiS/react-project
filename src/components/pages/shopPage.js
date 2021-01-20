import React from 'react';
import './shopPage.scss';
import item1 from './item1.jpg';

const ShopPage = () => {
    return (
        <div className='shopContainer'>
            <div className='shop'>
                <h2 className='shop__title'>Средства для ухода</h2>
                <div className='breadcrumbs'>
                    <ul className='breadcrumbs__list'>
                        <li className='breadcrumbs__item'>Главная</li>
                        <li className='breadcrumbs__item'>Магазин</li>
                        <li className='breadcrumbs__item breadcrumbs__item--active'>Средства для ухода</li>
                    </ul>
                </div>
                <div className='shop__container'>
                    <form className='shopForm'>
                        <fieldset className='shopForm__sets'>
                            <legend className='shopForm__title'>Производители:</legend>
                            <ul className='shopForm__list'>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='baxter' name='baxter' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='baxter'><span className='custom-checkbox shopForm__custom-checkbox'></span>Baxter of California</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='natty' name='natty' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='natty'><span className='custom-checkbox shopForm__custom-checkbox'></span>Mr Natty</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='suavecito' name='suavecito' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='suavecito'><span className='custom-checkbox shopForm__custom-checkbox'></span>Suavecito</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='malin' name='malin' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='malin'><span className='custom-checkbox shopForm__custom-checkbox'></span>Malin+Goetz</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='murray' name='murray' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='murray'><span className='custom-checkbox shopForm__custom-checkbox'></span>Murray's</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='crew' name='crew' type='checkbox' value='false'/>
                                    <label className='shopForm__label' htmlFor='crew'><span className='custom-checkbox shopForm__custom-checkbox'></span>American Crew</label>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset className='shopForm__sets'>
                            <legend className='shopForm__title'>Группы товаров:</legend>
                            <ul className='shopForm__list'>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='shaver' name='group' type='radio' value='shaver'/>
                                    <label className='shopForm__label' htmlFor='shaver'><span className='custom-checkbox custom-checkbox--radio shopForm__custom-checkbox'></span>Бритвенные принадлежности</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='care' name='group' type='radio' value='care' checked/>
                                    <label className='shopForm__label' htmlFor='care'><span className='custom-checkbox custom-checkbox--radio shopForm__custom-checkbox'></span>Средства для ухода</label>
                                </li>
                                <li className='shopForm__item'>
                                    <input className='shopForm__checkbox' id='accessory' name='group' type='radio' value='accessory'/>
                                    <label className='shopForm__label' htmlFor='accessory'><span className='custom-checkbox custom-checkbox--radio shopForm__custom-checkbox'></span>Аксессуары</label>
                                </li>
                            </ul>
                        </fieldset>
                        <button className='button' type='submit'>Показать</button>
                    </form>
                    <div className='shopItems'>
                        <div className='shopItem'>
                            <img className='shopItem__img' src={item1} alt='product'/>
                            <p className='shopItem__title'>Набор для путешесвий<br /> "BAXTER OF CALIFORNIA"</p>
                            <span className='shopItem__price'>2 900 р</span>
                            <button className='button shopItem__button'>Купить</button>
                        </div>
                    </div>
                </div>
                <div className='pagination'>
                    <ul className='pagination__list'>
                        <li className='pagination__item pagination__item--active'>1</li>
                        <li className='pagination__item'>2</li>
                        <li className='pagination__item'>3</li>
                        <li className='pagination__item'>4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;