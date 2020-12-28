import React from 'react';
import ContactsForm from '../contactsForm';
import './contacts.scss';

const Contacts = ({onOpenMap}) => {
    return (
        <div className='contacts'>
            <div className='contacts__item'>
                <h3 className='contacts__title'>Контактная информация</h3>
                <p className='contacts__dest'>БАРБЕРШОП «БОРОДИНСКИЙ»<br /> АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8<br /> ТЕЛЕФОН: +7 (495) 666-02-66</p>
                <p className='contacts__dest'>ВРЕМЯ РАБОТЫ: ПН—ПТ:<br /> С 10:00 ДО 22:00<br /> СБ—ВС: С 10:00 ДО 19:00</p>            
                <button onClick={onOpenMap} className='button contacts__button-map'>Как проехать</button>
                <button className='button contacts__button-feedback'>Обратная связь</button>
            </div>
            <div className='contacts__item'>
                <h3 className='contacts__title'>Записаться</h3>
                <p className='form__title'>УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ</p>
                <ContactsForm />
            </div>
        </div>
    )
}

export default Contacts;