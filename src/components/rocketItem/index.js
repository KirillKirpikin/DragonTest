import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'
const RocketItem = ({...rocket}) => {
    return (
      <Link to={`/rocket/${rocket.id}`} className={styles.rocketItem}>
        {rocket.flickr_images && <img className={styles.img} src={rocket.flickr_images[0]} alt="" />}
        <h2 className={styles.tytle}>{rocket.name}</h2>
        <p className={styles.description}>{`${rocket.description.slice(0, 195)}...`}</p>        
      </Link>
      
    );
};

export default RocketItem;