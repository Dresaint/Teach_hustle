import React, { useState } from 'react';
import teachlogo from "../assets/logo.jpg";
import '../Mycss/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
     <>
        <header className='header'>
            <div className='logo'>
              <img src={teachlogo}alt="TeachHustle"/>
            </div>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} >
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/scholarship">Scholarship</a></li>
                <li><a href="/contact">Contact</a></li>
                <li className='logs'><a href="/login">Login</a></li>
                <li className='logs'><a href="signUp">Sign Up</a></li>
              </ul>
            </nav>
            <div className='auth-buttons'>
              <button className='login-btn'><a href='/login'>Log In</a></button>
              <button className='signup-btn'><a href='/signup'>Sign Up</a></button>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </div>
        </header>
    </>
  )
}

export default Header;