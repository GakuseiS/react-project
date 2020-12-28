import React from 'react';
import Slider from 'react-slick';
import "./slick/slick.css"; 
import "./slick/slick-theme.css";
import slider1 from './infoSlider.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import './about.scss';

class About extends React.Component {
    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
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
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div className='slider__box'>
                                <img className='slider__image' src={slider1} alt='slider'/>
                            </div>
                            <div className='slider__box'>
                                <img className='slider__image' src={slider2} alt='slider' />
                            </div>
                            <div className='slider__box'>
                                <img className='slider__image' src={slider3} alt='slider' />
                            </div>
                        </Slider>
                        <div className='slider__buttons'>
                            <button className='slider__prev button' onClick={this.previous}>Назад</button>
                            <button className='slider__next button' onClick={this.next}>Вперед</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;