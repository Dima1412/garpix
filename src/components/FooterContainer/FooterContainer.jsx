import React from 'react';
import styles from './FooterContainer.module.css';
import sberlogo from './../../../src/assets/logo/sberlogo.svg';
import googlePlay from './../../../src/assets/logo/google-play.svg';
import appStore from './../../../src/assets/logo/app-store.svg';
import inst from './../../../src/assets/logo/inst.svg';
import vk from './../../../src/assets/logo/vk.svg';
import ok from './../../../src/assets/logo/ok.svg';
import fb from './../../../src/assets/logo/fb.svg';
import { NavLink } from 'react-router-dom';



const FooterContainer = () => {
    return (
        <div className={styles.footerMain}>
            <div className={styles.footerContainer}>
                <div>
                    <div><h2>900</h2></div>
                    <div className={styles.comment}>По России бесплатно</div>
                    <div className={styles.sberLogo}><img src={sberlogo} /></div>
                    <div className={styles.comment2}>© 1997-2019 ПАО Сбербанк.</div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerNav}>
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
                    <div className={styles.links}>
                        <div className={styles.stores}>
                            <div><img src={googlePlay} /></div>
                            <div><img src={appStore} /></div>
                        </div >
                        <div className={styles.social}>
                            <div><img src={ok} /></div>
                            <div><img src={fb} /></div>
                            <div><img src={vk} /></div>
                            <div><img src={inst} /></div>
                        </div>
                    </div>
                    <div className={styles.text}>Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</div>
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;
