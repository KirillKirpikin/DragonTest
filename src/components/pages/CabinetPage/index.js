import React, { useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../../firebase';
import { useAuth } from '../../../hooks/useAuth.hook';

import ContentWrapper from '../../contentWrapper';
import styles from './styles.module.scss'

const CabinetPage = () => {
    const {isAuth, uid} = useAuth()
    useEffect(()=>{
        if(isAuth){
            const rocketRef = doc(db, 'favorites', uid);
            let unSubscribe = onSnapshot(rocketRef, (rocket)=>{
                console.log(rocket.data());
            });
            return()=>{
                unSubscribe()
            }
        }
    },[])
    return (
        <ContentWrapper className={styles.cabinet}>
            <h1>Favorite dragons</h1>

        </ContentWrapper>
    );
};

export default CabinetPage;