import React, { useState } from 'react';
import '../Mycss/otp.css'; // Import external CSS
import LOGO from '../assets/logo.jpg'

const OTPPage = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [email, setEmail] = useState('emily@gmail.com');
    const [isResending, setIsResending] = useState(false);

    const handleChange = (element, index) => {
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to the next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = () => {
        alert(`OTP entered: ${otp.join('')}`);
    };

    const handleResendCode = () => {
        setIsResending(true);
        setTimeout(() => {
            setIsResending(false);
            alert('OTP resent to your email!');
        }, 2000);
    };

    return (

        <div className="otp-container">
            <a href="/home"><img src={LOGO} alt="LOGO" /></a>
            <h2>Welcome Back, Emily</h2>
            <p>We sent a code to {email}</p>
            <div className="otp-input-container">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        className="otp-input"
                    />
                ))}
            </div>
            <button onClick={handleSubmit} className="sign-in-btn">
                Sign In
            </button>
            <div className="keep-signed-in">
                <label>
                    <input type="checkbox" /> Keep me signed in for 30 days
                </label>
            </div>
            <button
                onClick={handleResendCode}
                className="resend-btn"
                disabled={isResending}
            >
                {isResending ? 'Resending...' : 'Resend Code'}
            </button>
        </div>
    );
};

export default OTPPage;
