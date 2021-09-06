import React from 'react';
import styles from './CityChoose.module.css';



const CityChoose = ({cityChooseOff}) => {
    return (
        <div className={styles.chooseBlock} /* onClick={e => e.stopPropagation()} */>
            <div className={styles.text}>Ваш город - <b>Санкт-Петербург</b> ?</div>
            <div className={styles.buttons}>
                <button className={styles.acceptBtn} onClick={cityChooseOff}>Да</button>
                <button className={styles.changeBtn}>Сменить город</button>
            </div>
        </div>
    );
}

export default CityChoose;
