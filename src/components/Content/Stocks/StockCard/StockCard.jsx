import React from 'react';
import styles from './StockCard.module.css';
import { NavLink } from 'react-router-dom';



const StockCard = ({ stock }) => {
    return (
        <div className={styles.cardMain}>
            <NavLink to='/partners/apple'>
                <div style={{
                    background: "url(" + process.env.PUBLIC_URL + stock.print + ") no-repeat",
                    width: "380px",
                    height: "240px",
                    backgroundSize: "100%",
                    borderRadius: "4px"
                }}>
                </div>
                <div className={styles.cardFooter}>
                    <img src={process.env.PUBLIC_URL + stock.logo} />
                    <div className={styles.description}>
                        <div className={styles.title}>{stock.title}</div>
                        <div className={styles.stocktext}>{stock.stocktext}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default StockCard;
