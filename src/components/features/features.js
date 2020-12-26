import React from 'react';
import './features.scss'

const Features = () => {
    return (
        <ul className='features'>
            <li className='features__item'>
                <span className='features__title'>Быстро</span>
                <p className='features__text'>МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!</p>
            </li>
            <li className='features__item'>
                <span className='features__title'>Круто</span>
                <p className='features__text'>ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ.<br /> МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО!<br /> ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.</p>
            </li>
            <li className='features__item'>
                <span className='features__title'>Дорого</span>
                <p className='features__text'>НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕНЫЙ СТАТУС?</p>
            </li>
        </ul>
    )
}

export default Features;