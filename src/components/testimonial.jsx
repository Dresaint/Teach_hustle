import React from 'react';
import '../Mycss/testimonial.css';
import Blackgirl from '../assets/blackgirl.jpg';
import Whitegirl from '../assets/whiteimage.jpg';
import Man from '../assets/man.jpg'


const Testimonial = () => {
  return (
    <>
         <section className="testimonials">
            <h2>From Teach Hustle Community</h2>
            <p>100+ people have joined Teach Hustle</p>
            <div className="testimonial-grid">
                <div className="testimonial-item">
                    <img src={Blackgirl} alt="Kelly" />
                    <h3>Kelly</h3>
                    <p>Nigeria</p>
                    <p className="testimonial-text">I really enjoyed all the courses I took and i'm excited to take more.</p>
                </div>
                <div className="testimonial-item">
                    <img src={Whitegirl}alt="Kern" />
                    <h3>Kern</h3>
                    <p>Ghana</p>
                    <p className="testimonial-text">Teach Hustle gave me a solid foundation in tech.</p>
                </div>
                <div className="testimonial-item">
                    <img src={Man} alt="George" />
                    <h3>George</h3>
                    <p>South Africa</p>
                    <p className="testimonial-text">The workshops have been great for hands-on learning.</p>
                </div>
            </div>
        </section>


    </>
  )
};

export default Testimonial;