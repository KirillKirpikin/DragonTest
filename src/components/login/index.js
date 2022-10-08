import React from 'react';
import Form from '../form';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import {setUser} from '../../store/slices/userSlice'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const handleLogin = (email, password)=>{        
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({                    
                    email: user.email,
                    uid: user.uid,
                }))                 
                navigate('/');
            })
            .catch(()=> alert('Invalid user'))
    }
    return (
        <Form title="Login" handleClick={handleLogin}/>
    );
};

export default Login;