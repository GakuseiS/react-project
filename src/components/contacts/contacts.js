import React from 'react';
import './contacts.scss';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts__item'>
                <h3 className='contacts__title'>Контактная информация</h3>
                <p className='contacts__dest'>БАРБЕРШОП «БОРОДИНСКИЙ»<br /> АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8<br /> ТЕЛЕФОН: +7 (495) 666-02-66</p>
                <p className='contacts__dest'>ВРЕМЯ РАБОТЫ: ПН—ПТ:<br /> С 10:00 ДО 22:00<br /> СБ—ВС: С 10:00 ДО 19:00</p>            
                <button className='button contacts__button-map'>Как проехать</button>
                <button className='button contacts__button-feedback'>Обратная связь</button>
            </div>
            <div className='contacts__item'>
                <h3 className='contacts__title'>Записаться</h3>
                <p className='form__title'>УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ</p>
                <form className='contacts__form form' action='#'>
                    <label className='form__label'> Дата <br />
                        <input className='form__input' type='text' name='date' placeholder='25.12.2020'/>
                    </label>
                    <label className='form__label'> Время <br />
                        <input className='form__input' type='text' name='time' placeholder='10:00'/>
                    </label>
                    <label className='form__label'> Ваше имя <br />
                        <input className='form__input' type='text' name='name' placeholder='Борода'/>
                    </label>
                    <label className='form__label'> Телефон <br />
                        <input className='form__input' type='text' name='phone' placeholder='+ 7 123 456-78-90'/>
                    </label>
                    <button className='button button--big form__button' type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;