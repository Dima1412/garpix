import React from 'react';
import styles from './MoreBlock.module.css';
import { NavLink } from 'react-router-dom';




const MorePercentBlock = ({ partners, number, title }) => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.imgBlock}>
                    {partners.slice(number[0], number[1]).map(item => (
                        <NavLink className={styles.nav} to='/partners/apple'>
                            <div className={styles.imgContainer}>
                                <img className={styles.image} src={process.env.PUBLIC_URL + item.logo} />
                                <div className={styles.percent}>{item.percent}</div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className={styles.titleBlock2}>
                <div className={styles.titleBlock}>{title}</div>
            </div>
        </div>
    );
}

export default MorePercentBlock;
