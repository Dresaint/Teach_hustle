import React from 'react'
import '../Mycss/login.css';
import Logo from '../assets/logo.jpg'

const Login = () => {
  return (
    <>
    
    <div className="login-container">
      <div className="login-content">
        <div className="logo">
          <a href="/home"><img src={Logo} alt="TeachHustle Logo" /></a>
        </div>
        <h2>Welcome Back</h2>
        <p>Enter your E-mail to receive a one-time passcode.</p>
        
        <form className="login-form">
        
          <input type="email" placeholder="abcde@gmail.com" required />
          
          <div className="remember-me">
            <input type="checkbox" id="keep-signed-in" />
            <label htmlFor="keep-signed-in">Keep me signed in for 30 days</label>
          </div>
          
          <button type="submit" className="send-code-btn">Send Code</button>
          
          <a href="/forgetpassword" className="forgot-password">Forgot password?</a>
        </form>
        
        <div className="or-divider">
          <span>or</span>
        </div>

        <div className="social-login">
          <button className="google-btn">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_48dp.png" alt="Google Logo" />
            <a href="https://google.com"  target="_blank" rel="noopener noreferrer">Sign in with Google</a>
          </button>

          <button className="apple-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" />
            <a href="https://appleid.apple.com"  target="_blank" rel="noopener noreferrer">Sign in with Apple ID</a> 
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login