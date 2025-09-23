import React from 'react';
import '../Mycss/scholarship.css'
import Header from '../components/header';
import Footer from '../components/footer';
import ContactSection from '../components/contactSection.jsx';
import Img1 from '../assets/schola.png';
import Img2 from '../assets/library.avif';
import Img3 from '../assets/s01.png';
import Img4 from '../assets/s02.png'


const Scholarship = () => {
  return (
  <>
    <Header/>
    <div className="app">
      <div className="hero-section">
        <div className="hero-content">
          <h1>You Deserve A Scholarship!</h1>
          <p>Join our classes to win this scholarship opportunity and stand a chance to gain full access to all the courses.</p>
          <button>Get Scholarship</button>
        </div>
        <div className="hero-images">
          <img src={Img1} alt="Scholarship" />
        </div>
      </div>

      <div className="scholarship-update">
        <img src={Img2} alt="Library" />
        <div className="update-content">
          <h2>Scholarship Update</h2>
          <p>Opportunities to win free courses and develop <br />your skills and knowledge.</p>
          <div className="stats">
              <div className='stats-item'>
                  <h2>100+</h2>
                  <p>Scholarship granted</p>
              </div>  
              <div className='stats-item'>
                  <h2>50+</h2>
                  <p>People sponsored</p>
              </div>
              <div className='stats-item'>
                  <h2>1000+</h2>
                  <p>People registered</p>
              </div>

          </div>
          <div className="buttons">
            <button>Start Now</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How it Works?</h2>
        <p>Get access to all materials, courses, and peers to ask questions on <br /> different areas.</p>
        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Start by going through all the <br /> available courses</h3>
            <button>Learn more</button>
          </div>
          <div className="step-image" >
            <img src={Img3} alt="image1" style={{width:'300px',  backgroundColor:'transparent'}}/>
          </div>
        </div>
        <div className='steps'>
          <div className='step-image'>
            <img src={Img4} alt="image2"  style={{width:'300px', backgroundColor:'transparent'}}/>
          </div>
          <div className='step'>
            <span style={{color: 'red'}}>02</span>
            <h3>Register for the scholarship <br />opportunity!</h3>
            <button>Learn more</button>
          </div>
         
           
        </div>
      </div>
      
      <div className='wait'>
        <h2>Can't Wait?</h2>
        <p>We made it easier to get started easily with our friendly prices!</p>
        <h3>Billed Monthly <span className='tick'> &#10003;</span>  Billed Annually</h3>
        

      </div>
      <div className="pricing-plans">
        <div className="pricing-card yellow-card">
          <h3>Basic plan monthly</h3>
          <h2>N5000 / Monthly</h2>
          <ul>
            <li>Access to all courses</li>
            <li>Connect with peers</li>
            <li>Join live sessions</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-card purple-card">
          <h3>Basic plan monthly</h3>
          <h2>N5000 / Monthly</h2>
          <ul>
            <li>Access to all courses</li>
            <li>Connect with peers</li>
            <li>Join live sessions</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
    <ContactSection />
    <Footer/>
  </>
  );
};

export default Scholarship;
