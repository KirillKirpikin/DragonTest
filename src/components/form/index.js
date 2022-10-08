import React, { useState } from 'react';
import styles from './style.module.scss'
import mail from '../../resources/img/Mail.svg'
import pass from '../../resources/img/pass.svg'

const Form = ({title, handleClick}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    return (
        <div className={styles.form}>
            <div className={styles.mail}>
                <img src={mail} alt=""/>
                <input                
                    type="email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    placeholder="email"
                />
            </div>
            <div className={styles.mail}>
                <img src={pass} alt=""/>
                <input                
                    type="password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    placeholder="password > 6 characters"
                />
            </div>
            <button
                onClick={()=>handleClick(email, password)}    
            >
                {title}
            </button>
            
        </div>
    );
};

export default Form;