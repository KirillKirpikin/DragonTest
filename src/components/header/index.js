import React from 'react';
import {useDispatch} from 'react-redux'
import styles from './style.module.scss';
import logoSvg from '../../resources/img/logo.svg';
import userSvg from '../../resources/img/user.svg';
import {useAuth} from '../../hooks/useAuth.hook';
import {removeUser} from '../../store/slices/userSlice'




import {Link} from 'react-router-dom'
import ContentWrapper from '../contentWrapper';

const Header = () => {      
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();  
    return (
        <div className={styles.header}>
            <ContentWrapper className={styles.content}>
                <Link to={'/'} className={styles.logo}><img src={logoSvg} alt=""/></Link> 
                <div className={styles.user}>
                    <div className={styles.cabinet}>
                        {isAuth ? <p>{email}</p>: <Link to='/auth'>Log In</Link>}
                        <img src={userSvg} alt=""/>                        
                    </div>
                    
                    {isAuth ? <div className={styles.auth} onClick={()=>dispatch(removeUser())}>Log out</div> 
                    :null}
                    
                </div>
            </ContentWrapper>             
        </div>
    );
};

export default Header;