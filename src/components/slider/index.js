import React, { useState } from 'react';
import styles from './styles.module.scss'

const Slider = ({slids}) => {
    const [index, setIndex] = useState(0)
    
    const goToBack =()=>{
        const isFirstSlide = index === 0
        const newIndex = isFirstSlide ? slids.length - 1 : index - 1;
       setIndex(newIndex) 
    }

    const goToNext =()=>{
        const isLastSlide = index === slids.length - 1; 
        const newIndex = isLastSlide ? 0 : index + 1;
       setIndex(newIndex) 
    }

    return (
        <div className={styles.slider}>
            <div className={styles.leftArrow} onClick={goToBack} >❰</div>
            <div className={styles.rightArrow} onClick={goToNext} >❱</div>
            <div
                className={styles.slide}
                style={{backgroundImage: `url(${slids[index]})`}}
            ></div>
        </div>        
    );
};

export default Slider;