import React from 'react';
import styles from './Search.module.css';
import search from './../../../assets/search.svg';




const Search = ({searchActive, searchOff}) => {
    return (
        <div className={styles.searchWrapper+" "+(searchActive ? styles.active : undefined)} onClick={searchOff}>
            <div className={styles.searchBlock+" "+(searchActive ? styles.active : undefined)} onClick={e => e.stopPropagation()}>
                <input type="text" placeholder="Поиск..." className={styles.input}/>
                <div className={styles.searchBtn} >
                            <img src={search} />
                </div>
            </div>
        </div>
    );
}

export default Search;
