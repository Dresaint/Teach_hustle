import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import teachlogo from '../assets/logo.jpg';
import '../Mycss/signup.css'

const SignUp = () => {

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
        dateOfBirth : '',
        password : '',
        confirmPassword : '',
    })

    const [error, serError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) =>{
        const{name, value} = e.target;
        setFormData({...formData, [name] : value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formDataObj = new formData();
        formDataObj.append('firstName', formData.firstName)
        formDataObj.append('lastName', formData.lastName)
        formDataObj.append('email', formData.email)
        formDataObj.append('phoneNumber', formData.phoneNumber)
        formDataObj.append('dateOfBirth', formData.dateOfBirth)
        formDataObj.append('password', formData.password)
        formDataObj.append('confirmPassword', formData.confirmPassword)

        try {
            const response = await axios.post('', formData,{
                headers : {
                   " Content-Type" : "multipart/form-data"
                }
            });
            
            if(response.status === 'success') {
                naviagate('./success')
            }
            
        } catch (error) {
            serError(error.response?.data?.message || "something went wrong")
            
        }
        
    }














  return (
    <>
                <section className="signup-section">
    
                    <div className="signup-container">
                    <a href="/home"><img src={teachlogo} alt="logo" /></a>
                    <h1 className="signup-title">Sign Up</h1>
                    <p className="signup-description">
                        Create an account to get access to all the tech courses!
                    </p>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="input-row">
                        <input type="text"  name='firstName' placeholder="First Name" className="signup-input" required onChange={handleInputChange}/>
                        <input type="text" name='lastName' placeholder="Last Name" className="signup-input" required onChange={handleInputChange}/>
                        </div>
                        <div className="input-row">
                        <input type="email" name='email' placeholder="Email Address" className="signup-input" required onChange={handleInputChange}/>
                        <select className="signup-input">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        </div>
                        <div className="input-row">
                        <input type="text" name='phoneNumber' placeholder="+234 Phone Number" className="signup-input" required onChange={handleInputChange}/>
                        <input type="date" name='dateOfBirth' placeholder="DOB" className="signup-input" required onChange={handleInputChange}/>
                        </div>
                        <div className="input-row">
                        <input type="password" name='password' placeholder="Password" className="signup-input" required onChange={handleInputChange}/>
                        <input type="password" name='confirmPassword' placeholder="Confirm Password" className="signup-input" required onChange={handleInputChange}/>
                        </div>
                        <div className="terms">
                        <input type="checkbox" className="terms-checkbox" onChange={handleInputChange}/>
                        <label>
                            I’ve read and agree with the <span className="link">Terms of Service</span> and our <span className="link">Privacy Policy</span>
                        </label>
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                        <p className="signin-link">
                        Already have an account? <span className="link"><a href="/login">Sign In</a></span>
                        </p>
                
                    </form>

                    { error && <p>{error}</p>}
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

export default SignUp