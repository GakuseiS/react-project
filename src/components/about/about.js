import React from 'react';
import infoSlider from './infoSlider.jpg';
import './about.scss';

const About = () => {
    return (
        <div className='about'>
            <div className='about__item'>
                <h3 className='about__title'>Новости</h3>
                <div className='about__news'>
                    <p className='about__news-item'>НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМАЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ <span className='about__date'>11 января</span></p>
                    <p className='about__news-item'>В НАШЕЙ КОМАНДЕ ПОПОЛНЕНИЕ, БОРИС «БРИТВА» СТРИГУНЕЦ, ОБЛАДAТЕЛЬ МНОЖЕСТВА ТИТУЛОВ И НАГРАД ПОПОЛНИЛ НАШИ СТРОЙНЫЕ РЯДЫ <span className='about__date'>18 января</span></p>            
                </div>
                <button className='button about__button-news'>Все новости</button>
            </div>
            <div className='about__item'>
                <h3 className='about__title'>Фотогалерея</h3>
                <div className='about__slider slider'>
                    <div className='slider__box'>
                        <img className='slider__image' src={infoSlider} alt='slider'/>
                    </div>
                    <div className='slider__buttons'>
                        <button className='slider__prev button'>Назад</button>
                        <button className='slider__next button'>Вперед</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;