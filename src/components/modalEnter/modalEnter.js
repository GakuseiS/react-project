import React from 'react';
import './modalEnter.scss';

const ModalEnter = ({onClose}) => {
        return (
            <div className='modal'>
                <h2 className='modal__title'>Личный кабинет</h2>
                <span className='modal__circle' onClick={onClose}></span>
                <p className='modal__text'>Введите пожалуйста свой логин и пароль</p>
                <form className='modal__form' action='#'>
                    <input className='modal__form-input modal__form-input--login' type='text' placeholder='Логин' />
                    <input className='modal__form-input modal__form-input--pass' type='text' placeholder='Пароль'/>
                    <input id='remember' className='modal__form-remember' type='checkbox' />
                    <label htmlFor='remember' className='modal__form-label'><span className='modal__custom-checkbox'></span> Запомните меня </label>
                    
                    <button className='modal__form-forget'>Я забыл пароль!</button>
                    <button className='button button--big modal__form-submit' type='submit'>Войти</button>
                </form>
            </div>
        )
}

export default ModalEnter;