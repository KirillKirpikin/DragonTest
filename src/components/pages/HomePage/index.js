import React from 'react';
import ContentWrapper from '../../contentWrapper';
import RocketsList from '../../rocketsList';
import dragon from '../../../resources/img/dragon.png'
import styles from './styles.module.scss'

const HomePage = () => {
    return (
        <ContentWrapper className={styles.home}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <h1>Space X</h1>
                    <p>Learn about Space Dragons in one click</p>                    
                </div>
                <div className={styles.img}>
                    <img src={dragon} alt=""/>
                </div>
                
            </div>
           
            <RocketsList/>
        </ContentWrapper>
    );
};

export default HomePage;