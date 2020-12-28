import React from 'react';
import ModalForm from '../modalForm';
import './modalEnter.scss';

const ModalEnter = ({onClose}) => {
        return (
            <div className='modal'>
                <h2 className='modal__title'>Личный кабинет</h2>
                <span className='circle' onClick={onClose}></span>
                <p className='modal__text'>Введите пожалуйста свой логин и пароль</p>
                <ModalForm />
            </div>
        )
}

export default ModalEnter;