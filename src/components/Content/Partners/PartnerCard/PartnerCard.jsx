import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PartnerCard.module.css';




const PartnerCard = (props) => {
    return (
        <div className={styles.card}>
            <NavLink to='/partners/apple'>
                <h4>{props.percent}</h4>
                <div className={styles.thanksText}>Спасибо от суммы покупки</div>
                <div><img src={process.env.PUBLIC_URL + props.logo} /></div>
                <div className={styles.cardTitle}>{props.title}</div>
            </NavLink>

        </div>
    );
}

export default PartnerCard;
