import React from 'react';
import styles from './Content.module.css';
import { connect } from 'react-redux';
import Partners from './Partners/Partners';
import Stocks from './Stocks/Stocks';
import More from './More/More';




const Content = (props) => {



    return (
        <div className={styles.contentMain}>
            <div className={styles.contentTitle}><h1>Партнеры и предложения</h1></div>
            <Partners partners={props.partners} sections={props.sections}/>
            <div className={styles.stocksTitle}><h2>3 предложения в категории "Электроника и бытовая техника"</h2></div>
            <Stocks stocks={props.stocks}/>
            <More partners={props.partners}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    partners: state.partners,
    stocks: state.stocks,
    sections: state.sections
});

export default connect(mapStateToProps)(Content);
