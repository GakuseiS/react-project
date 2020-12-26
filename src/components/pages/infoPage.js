import React from 'react';
import './infoPage.scss';
import image from './index-logo.png';
import Contacts from '../contacts';
import About from '../about';
import Features from '../features';

const InfoPage = () => {
    return (
        <div className='main-container'>
            <div className='info'>
                <img className='info__logo' src={image} alt='logo' />
                <Features />
                <About />
                <Contacts />
            </div>
        </div>
    )
}

export default InfoPage;