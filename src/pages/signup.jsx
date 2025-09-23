import React from 'react'
import '../Mycss/signup.css';
import teachlogo from '../assets/logo.jpg'

const Signup = () => {
  return (
    <>
   
   <section className="signup-section">
    
      <div className="signup-container">
        <a href="/home"><img src={teachlogo} alt="logo" /></a>
        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-description">
          Create an account to get access to all the tech courses!
        </p>
        <form className="signup-form">
          <div className="input-row">
            <input type="text" placeholder="First Name" className="signup-input" />
            <input type="text" placeholder="Last Name" className="signup-input" />
          </div>
          <div className="input-row">
            <input type="email" placeholder="Email Address" className="signup-input" />
            <select className="signup-input">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-row">
            <input type="text" placeholder="+234 Phone Number" className="signup-input" />
            <input type="date" placeholder="DOB" className="signup-input" />
          </div>
          <div className="input-row">
            <input type="password" placeholder="Password" className="signup-input" />
            <input type="password" placeholder="Confirm Password" className="signup-input" />
          </div>
          <div className="terms">
            <input type="checkbox" className="terms-checkbox" />
            <label>
              I’ve read and agree with the <span className="link">Terms of Service</span> and our <span className="link">Privacy Policy</span>
            </label>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <p className="signin-link">
            Already have an account? <span className="link"><a href="/login">Sign In</a></span>
          </p>
    
        </form>
      </div>
      
    </section>
    <div className="social-signup">
            <button className="social-btn">
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_48dp.png" alt="Google Logo" />
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">Sign in with Google</a>
            </button>
            <button className="social-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" />
                <a href="https://appleid.apple.com"  target="_blank" rel="noopener noreferrer">Sign in with Apple ID</a> 
            </button>
    </div>
    </>
  )
}

export default Signup