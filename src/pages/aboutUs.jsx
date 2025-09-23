import React from 'react';
import '../Mycss/aboutus.css';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactSection from '../components/contactSection.jsx';
import image1 from '../assets/aboutimage1.avif';
import image2 from '../assets/aboutimage-2.avif';
import image3 from '../assets/aboutima.webp';
import image4 from '../assets/aboutima2.webp';
import image5 from '../assets/aboutima3.webp';
import FirstImage from '../assets/firstimg.avif'

const AboutUs = () => {
  return (
    <>
     <Header />
  
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>ABOUT Teach Hustle</h1>
        <p>We provide the best courses and programs to our users <br /> all over the globe.</p>
        <div className="ratings">
          <span>Ratings</span>
          <span className='star'>⭐</span>
          <span>5.0</span>
          <div className="icons">
            {/* Add star icons here */}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className='head'>
            <img src={FirstImage} alt="" />
            <div className='text'>
                <p>OUR VALUES</p>
                <h3>Meet Teach Hustle.</h3>
                <h3>Creative.</h3>
                <h3>Innovative.</h3>
                <h3>Digital.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eum impedit laudantium illo accusamus laboriosam ad porro aliquid excepturi numquam, sequi maiores ex. Quod cupiditate ipsum reprehenderit maiores necessitatibus optio?</p>

            </div>
        </div>
        <div className="mission">
          <div className='text'>
            <p>OUR MISSION</p>
            <h3>
                We empower individuals with the knowledge and skills they need to build a successful career in their niche.
            </h3>
            <p>We have marked our presence globally reaching over a thousand individuals who continuosly learn from courses</p>
          </div>
          <img src={image1} alt="Mission" className='imm'/>
        </div>
        <div className="vision">
          <img src={image2 } alt="Vision" />
          <div className='text'>
            <p>OUR VISION</p>
            <h3>
                Great, high-quality videos and consistent work. Dominating the industry is a top goal.
            </h3>
            <p>We have marked our presence globally reaching over a thousand individuals who continuosly learn from courses</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="team">
        <h1>Meet Our Team</h1>
        <p className='y'>yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy <br />yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
        <p className='z'>yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy <br />yyyyyyyyyyyyyyyy</p>

        <div className="team-members">
          <div className="team-member">
            <img src={image5} alt="Mary Jane" />
            <h3>Mary Jane</h3>
            <p>Financial Manager</p>
          </div>
          <div className="team-member">
            <img src={image4} alt="Peace Sam" />
            <h3>Peace Sam</h3>
            <p>Accountant</p>
          </div>
          <div className="team-member">
            <img src={image3} alt="Mila Lopez" />
            <h3>Mila Lopez</h3>
            <p>General Manager</p>
          </div>
        </div>
        <button className="enroll-now-btn">Enroll Now</button>
      </section>
     
     <ContactSection />
     <Footer />
    </>
  );
};

export default AboutUs;
