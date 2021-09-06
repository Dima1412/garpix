import React, { useState } from 'react';
import StockCard from './StockCard/StockCard';
import styles from './Stocks.module.css';




const Stocks = ({ stocks }) => {

    const [numOfCards, setnumOfCards] = useState(3);
    const more = stocks.length - numOfCards;

    return (
        <div className={styles.stocks}>
            <div className={styles.stocksField}>
                {stocks.slice(0, numOfCards).map(item => <StockCard stock={item} key={item.id} />)}
            </div>
            <div className={styles.moreBtn}>
                {numOfCards < 5 ? <button onClick={() => setnumOfCards(stocks.length)}>Еще {more} предложения</button>
                    : <button onClick={() => setnumOfCards(3)}>Свернуть</button>
                }
            </div>
        </div>
    );
}

export default Stocks;
