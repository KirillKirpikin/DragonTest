import React, { useState } from 'react';
import ContentWrapper from '../../contentWrapper';
import Registration from '../../registration';
import styles from './styles.module.scss'
import rocketImg from '../../../resources/img/Rocket.svg'
 
import Login from '../../login';

const RegisterPage = () => {
    const [toggle, setToggle]= useState('Registr');
    const toggleRegistr = ()=>{
        setToggle('Registr')        
    }
    const toggleLogin = ()=>{
        setToggle('LogIn')        
    }    
    return (
        <ContentWrapper className={styles.auth}>
            <div className={styles.title}>
                <img src={rocketImg} alt=""/>
                <h1>Sign in or register</h1>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonLeft} onClick={()=>toggleRegistr()}>Registration</div>
                <div className={styles.buttonRight} onClick={()=>toggleLogin()}>Login</div>
            </div>
           { toggle == 'Registr'? <Registration/> : <Login/>}
        </ContentWrapper>
            
        
    );
};

export default RegisterPage;