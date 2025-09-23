import React, { useState } from 'react';
import '../Mycss/forgetpassword.css';
import LOGO from'../assets/logo.jpg'
import Icon from '../assets/icon.png'

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setMessage('A password reset link has been sent to your email.');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="forgot-password-container">
           
            <div className="main-content">
                <header className="header">
                    <a href="/home"><img src={LOGO} alt="TeachHustle Logo" className="logo" /></a>
                </header>
                <div className="icon-container">
                    <img src={Icon} alt="Fingerprint Icon" />
                </div>
                <h1>Forgot password?</h1>
                <p>No worries, we’ll send you reset instructions.</p>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="reset-btn">Reset Password</button>
                </form>
                <p>{message}</p>
                <a href="/login" className="back-to-login">← Back to log in</a>
            </div>
        </div>
    );
};

export default ForgetPassword;
