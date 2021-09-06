import React from 'react';
import PartnerCard from './PartnerCard/PartnerCard';
import styles from './Partners.module.css';
import { useState } from 'react';


const Partners = ({ partners, sections }) => {

    const [buttons, setbuttons] = useState([true, false, false, false, false, false,
    false, false, false, false, false, false]);

    const setButtonState = (i) => {
        const buttonsCopy = [...buttons];
        buttonsCopy[i] = !buttonsCopy[i];
        setbuttons(buttonsCopy)
    }
    
    const [seeAll, setSeeAll] = useState(8);

    const [toggle, setToggle] = useState(true);

    const [numOfCards, setnumOfCards] = useState(5);
    const more = partners.length - numOfCards;





    return (
        <div className={styles.partnersMain}>
            <div className={styles.sections}>
                {buttons.slice(0, seeAll).map((item, i) => item ?
                    <button className={styles.activeSectionBtn}
                        key={i}
                        onClick={() => setButtonState(i)}
                    >{sections[i]}</button>
                    : <button className={styles.sectionBtn}
                        key={i}
                        onClick={() => setButtonState(i)}
                    >{sections[i]}</button>
                )}
                {seeAll == 8 && <button className={styles.sectionBtn} onClick={() => { setSeeAll(12) }}> . . . </button>}
            </div>
            <div className={styles.toggleBlock}>
                    <div className={toggle ? styles.selectedOption : styles.unselectedOption}>Начисляют спасибо</div>
                    <button className={toggle ? styles.toggle : styles.toggleOff} onClick={() => {setToggle(!toggle)}}></button>
                    <div className={toggle ? styles.unselectedOption : styles.selectedOption}>Принимают спасибо</div>
            </div>
            <div className={styles.partners}>
                {partners.slice(0, numOfCards).map(item => <PartnerCard percent={item.percent}
                    title={item.title}
                    key={item.id}
                    logo={item.logo} />)}
            </div>
            <div className={styles.moreBtn}>
                {numOfCards < 10 ? <button onClick={() => setnumOfCards(partners.length)}>Еще {more} партнеров</button>
                    : <button onClick={() => setnumOfCards(5)}>Свернуть</button>
                }
            </div>
        </div>
    );
}

export default Partners;
