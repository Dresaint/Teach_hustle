import React from 'react';
import HeroImage from '../assets/image1.avif';
import '../Mycss/herosection.css';

const HeroSection = () => {
  return (
     <>
        <section className='hero'>
            <div className='hero-text'>
                <h1>Your one-stop shop for online tech courses</h1>
                <p>
                Learn and understand the way you want, with expertly crafted courses that blend theory with hands-on experience.
                </p>
                <button className='cta-btn'>Enroll Now</button>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt="Hero" />

            </div>
        </section>
    </>
  )
}

export default HeroSection;