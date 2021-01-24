import React from 'react';
import './appHeader.scss';
import {NavLink, withRouter} from 'react-router-dom';
import logo from './logo.png';

const styles = {
    img: {
        marginTop: '22px',
        marginRight: '25px'
    }
}

class AppHeader extends React.Component {
    render() {
        const logoH = (this.props.location.pathname !== '/') ? <img style={styles.img} height='24' src={logo} alt='logo' /> : null;
        return (
            <div className='header__container'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            {logoH}
                            <li className='nav__item'><NavLink className='nav__link' to='/' exact activeClassName='nav__item--active'>Информация</NavLink></li>
                            <li className='nav__item'>Новости</li>
                            <li className='nav__item'>Прайс-лист</li>
                            <li className='nav__item'><NavLink className='nav__link' to='/shop' activeClassName='nav__item--active'>Магазин</NavLink></li>
                            <li className='nav__item'>Контакты</li>
                            <li onClick={this.props.onOpen} className='nav__item nav__item--enter'>Вход</li>
                        </ul>
                    </nav>
                </div>
        )
    }
}

export default withRouter(AppHeader);