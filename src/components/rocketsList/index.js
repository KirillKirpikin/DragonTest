import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getRockets } from '../../store/slices/rocketsSlice';
import Spinner from '../spinner'

import styles from './styles.module.scss'

import RocketItem from '../rocketItem';
const RocketsList = () => {
    const dispatch = useDispatch();
    const { rockets, isLoading } = useSelector((state)=> state.rockets)
    
    useEffect(()=>{
        dispatch(getRockets())
    },[dispatch])
 
    if (isLoading){
        return <Spinner/>
    }
    return (
        <div className={styles.list} >            
            {rockets && rockets.map(rocket => <RocketItem key={rocket.id} {...rocket}/>)}
            
        </div>
    );
};

export default RocketsList;