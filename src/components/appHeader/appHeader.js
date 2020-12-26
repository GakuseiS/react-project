import React from 'react';
import './appHeader.scss'

class AppHeader extends React.Component {
    render() {
        return (
            <div className='header__container'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item nav__item--active'>Информация</li>
                            <li className='nav__item'>Новости</li>
                            <li className='nav__item'>Прайс-лист</li>
                            <li className='nav__item'>Магазин</li>
                            <li className='nav__item'>Контакты</li>
                            <li onClick={this.props.onOpen} className='nav__item nav__item--enter'>Вход</li>
                        </ul>
                    </nav>
                </div>
        )
    }
}

export default AppHeader;