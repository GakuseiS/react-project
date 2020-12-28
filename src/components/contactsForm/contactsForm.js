import React from 'react';
import {Formik, Form, Field} from 'formik';
import './contactsForm.scss';

const ContactsForm = () => {
    return (
        <Formik
            initialValues={{
            date: '',
            time: '',
            name: '',
            phone: ''
            }}
            onSubmit={(values, {resetForm}) => {
                // await new Promise((r) => setTimeout(r, 500));
                const res = JSON.stringify(values);
                alert(res);
                resetForm();
            }}
        >
            <Form className='contacts__form form'>
                <label className='form__label'> Дата <br />
                    <Field className='form__input input' type='text' name='date' placeholder='25.12.2020'/>
                </label>
                <label className='form__label'> Время <br />
                    <Field className='form__input input' type='text' name='time' placeholder='10:00'/>
                </label>
                <label className='form__label'> Ваше имя <br />
                    <Field className='form__input input' type='text' name='name' placeholder='Борода'/>
                </label>
                <label className='form__label'> Телефон <br />
                    <Field className='form__input input' type='text' name='phone' placeholder='+ 7 123 456-78-90'/>
                </label>
                <button className='button button--big form__button' type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}

export default ContactsForm;