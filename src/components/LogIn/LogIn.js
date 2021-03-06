import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./LogIn.css";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,
        user,
        loading,
        error,] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Log In</h2>
                <form onSubmit={handleLogInUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Log in" />
                </form>
                <p>New in ema john? <Link className='form-link' to='/signup'>Create An Account</Link></p>
            </div>
        </div>
    );
};

export default LogIn;