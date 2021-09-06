import React from 'react';
import styles from './HeaderContainer.module.css';
import logo from '../../assets/logo/logo_x21.svg';
import logo2 from '../../assets/logo/Triangle-2.svg';
import { NavLink } from 'react-router-dom';
import search from './../../assets/search.svg';
import { useState } from 'react';
import Search from './Search/Search';
import CityChoose from './CityChoose/CityChoose';



const HeaderContainer = () => {

    const [searchActive, setSearchActive] = useState(false);

    const [cityChooseActive, setCityChooseActive] = useState(false);


    return (
        <div className={styles.headerMain}>
            <div className={styles.headerContainer}>
                <div>
                    <img className={styles.img} src={logo} />
                </div>
                <div className={styles.navbar}>
                    <div className={styles.nbItem}>
                        <NavLink to='/coupons' activeClassName={styles.active}>Купоны и сертификаты</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/impressions' activeClassName={styles.active}>Впечатления</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/aviatickets' activeClassName={styles.active}>Авиабилеты</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/traintickets' activeClassName={styles.active}>Ж/д билеты</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/hotels' activeClassName={styles.active}>Отели</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/carsharing' activeClassName={styles.active}>Каршеринг</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/theaters' activeClassName={styles.active}>Театры</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/insurance' activeClassName={styles.active}>Страхование</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/connect' activeClassName={styles.active}>Как подключиться</NavLink>
                    </div>
                    <div className={styles.nbItem}>
                        <NavLink to='/partners' activeClassName={styles.active}>Партнеры</NavLink>
                    </div>
                </div>
                <div>
                    <div className={styles.location} onClick={() => setCityChooseActive(!cityChooseActive)}>
                        <img src={logo2} />
                        <div className={styles.city}>Санкт-Петербург</div>
                    </div>
                    {cityChooseActive && <CityChoose cityChooseOff={() => setCityChooseActive(false)}/>}
                    <div className={styles.searchLogin}>
                        <div className={styles.search} onClick={() => setSearchActive(true)} >
                            <img src={search} />
                        </div>
                        <div className={styles.loginBlock}>
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
                <Search searchActive={searchActive} searchOff={() => setSearchActive(false)}/>
            </div>
        </div>
    );
}

export default HeaderContainer;
