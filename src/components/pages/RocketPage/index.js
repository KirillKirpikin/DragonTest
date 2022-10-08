import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ContentWrapper from '../../contentWrapper';
import Slider from '../../slider';
import Spinner from '../../spinner';
import {getOneRocket} from '../../../store/slices/oneRocketSlice'
import styles from './styles.module.scss'


const RocketPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {oneRocket, isLoading} = useSelector(state => state.oneRocket)
    
    useEffect(()=>{
        dispatch(getOneRocket(id))
    },[dispatch, id]);

    if (isLoading){
        return <Spinner/>
    }
    
    return oneRocket && (
        <ContentWrapper className={styles.content}>
            <div className={styles.info}>
                <h1 className={styles.title}>SpaceX {oneRocket.name}</h1>
                <p className={styles.description}>{oneRocket.description}</p>
                <div className={styles.options}>
                    <div className={styles.params}>Height</div>
                    <div className={styles.value}>{oneRocket.height_w_trunk.meters} m/{oneRocket.height_w_trunk.feet} ft</div>
                </div>
                <div className={styles.options}>
                    <div className={styles.params}>Mass</div>
                    <div className={styles.value}>{oneRocket.dry_mass_kg} kg/{oneRocket.dry_mass_lb} lb</div>
                </div>
                <div className={styles.options}>
                    <div className={styles.params}>The first flight</div>
                    <div className={styles.value}>{oneRocket.first_flight}</div>
                </div>
                <a className={styles.wiki} target="_blank" href={oneRocket.wikipedia}>Wikipedia</a>
            </div>
            <div className={styles.slider}>
                <Slider slids={oneRocket.flickr_images}/>
            </div>
            
        </ContentWrapper>
    );
};

export default RocketPage;