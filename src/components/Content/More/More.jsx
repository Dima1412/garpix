import React from 'react';
import styles from './More.module.css';
import MoreBlock from './MoreBlock/MoreBlock';
import MorePercentBlock from './MoreBlock/MorePercentBlock';




const More = (props) => {
    return (
        <div className={styles.more}>
            <MoreBlock partners={props.partners} number={[0,5]} title={"Скидки за бонусы"}/>
            <MorePercentBlock partners={props.partners} number={[14,17]} title={"Большой % начисления"}/>
            <MoreBlock partners={props.partners} number={[6,9]} title={"Выгодные купоны"}/>
            <MoreBlock partners={props.partners} number={[10,15]} title={"Персональное исходя из трат"}/>
        </div>
    );
}

export default More;
