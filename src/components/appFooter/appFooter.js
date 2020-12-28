import React from 'react';
import './appFooter.scss';

const AppFooter = () => {
    return (
        <div className='footer__container'>
            <div className='footer'>
                <div className='footer__adress'>БАРБЕРШОП «БОРОДИНСКИЙ»<br /> АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. Б. КОНЮШЕННАЯ, Д. 19/8<br /> <span className='footer__map'>КАК НАС НАЙТИ?</span><br />Телофон: +7 (495) 666-02-66</div>
                <div className='footer__social'>
                    Давайте дружить!
                    <ul className='footer__social-list'>
                        <li className='footer__social-item social social--vk'></li>
                        <li className='footer__social-item social social--fb'></li>
                        <li className='footer__social-item social social--insta'></li>
                    </ul>
                </div>
                <div className='footer__prod'>
                    Разработано:
                    <span className='footer__prod-label button'>Мной</span>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;