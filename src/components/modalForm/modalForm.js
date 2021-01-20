import React from 'react';
import {Formik, Field, Form} from 'formik';
import './modalForm.scss';

const ModalForm = () => {
    
    return (
        <Formik
            initialValues={{
            login: '',
            password: '',
            remember: false
            }}
            onSubmit={(values, {resetForm}) => {
                const res = JSON.stringify(values);
                alert(res);
                resetForm();
            }}
        >
            <Form className='modal__form'>
                <Field className='modal__form-input modal__form-input--login input' name='login' type='text' placeholder='Логин' />
                <Field className='modal__form-input modal__form-input--pass input' name='password' type='text' placeholder='Пароль'/>
                <Field id='remember' className='modal__form-remember checkbox' name='remember' type='checkbox' />
                <label htmlFor='remember' className='modal__form-label checkbox__label'><span className='modal__custom-checkbox custom-checkbox'></span> Запомните меня </label>
                
                <button className='modal__form-forget'>Я забыл пароль!</button>
                <button className='button button--big modal__form-submit' type='submit'>Войти</button>
            </Form>
        </Formik>
    )
}

export default ModalForm;