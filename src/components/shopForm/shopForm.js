import React from 'react';
import './shopForm.scss';

const ShopForm = () => {
    return (
        <form className='shopForm'>
                <fieldset className='shopForm__sets'>
                    <legend className='shopForm__title'>Производители:</legend>
                    <ul className='shopForm__list'>
                        <li className='shopForm__item'>
                            <input className='shopForm__checkbox' id='baxter' name='baxter' type='checkbox' value='true' defaultChecked/>
                            <label className='shopForm__label' htmlFor='baxter'><span className='custom-checkbox shopForm__custom-checkbox'></span>Baxter of California</label>
                        </li>
                        <li className='shopForm__item'>
                            <input className='shopForm__checkbox' id='natty' name='natty' type='checkbox' value='false'/>
                            <label className='shopForm__label' htmlFor='natty'><span className='custom-checkbox shopForm__custom-checkbox'></span>Mr Natty</label>
                        </li>
                        <li className='shopForm__item'>
                            <input className='shopForm__checkbox' id='suavecito' name='suavecito' type='checkbox' value='true' defaultChecked/>
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
                            <input className='shopForm__checkbox' id='crew' name='crew' type='checkbox' value='true' defaultChecked/>
                            <label className='shopForm__label' htmlFor='crew'><span className='custom-checkbox shopForm__custom-checkbox'></span>American Crew</label>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='shopForm__sets'>
                    <legend className='shopForm__title'>Группы товаров:</legend>
                    <ul className='shopForm__list'>
                        <li className='shopForm__item'>
                            <input className='shopForm__checkbox' id='shaver' name='group' type='radio' value='shaver'/>
                            <label className='shopForm__label' htmlFor='shaver'><span className='custom-checkbox custom-checkbox--radio shopForm__custom-checkbox'></span>Бритвенные &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;принадлежности</label>
                        </li>
                        <li className='shopForm__item'>
                            <input className='shopForm__checkbox' id='care' name='group' type='radio' value='care' defaultChecked/>
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
    )
}

export default ShopForm;