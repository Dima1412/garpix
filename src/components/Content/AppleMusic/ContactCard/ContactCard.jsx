import React from 'react';
import styles from './ContactCard.module.css'
import apple from './../../../../assets/apple@2x.png';
import ellipse from './../../../../assets/Ellipse.png';
import metro from './../../../../assets/metro.svg';
import metro2 from './../../../../assets/metro2.svg';
import { NavLink } from 'react-router-dom';



const ContactCard = () => {
    return (
        <div className={styles.card}>
                <img className={styles.apple} src={apple}/>
                <img className={styles.ellipse} src={ellipse}/>
            <div className={styles.description}>
                <div>Москва, ул. Большая Татарская, 21</div>
                <div className={styles.metro}>
                    <img src={metro2}/>
                    <div>Маяковская</div>
                    <img src={metro}/>
                    <div>Лубянка</div>
                </div>
                <div>+7 495 220-30-44</div>
                <div>Ежедневно с 09:00 до 21:00</div>
                <a href="https://www.apple.com/">apple.com</a>
            </div>
            <div className={styles.way}><NavLink to="#">Проложить маршрут</NavLink></div>
        </div>
    );
}

export default ContactCard;
