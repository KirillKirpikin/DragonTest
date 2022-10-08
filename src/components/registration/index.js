import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import Form from '../form';
import {setUser} from '../../store/slices/userSlice'

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const handleRegistration = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(setUser({
                email: user.email,
                uid: user.uid,
            }))
            navigate('/');
        })
        .catch(()=> alert('Invalid email'));
            
    }
    return (
        <Form title="Registration" handleClick={handleRegistration}/>
    )
};

export default Registration;

