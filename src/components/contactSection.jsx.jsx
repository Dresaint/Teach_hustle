import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Mycss/contactSection.css';

const contactSection = () => {
    return (
        <section className="contact">
            <div className="contact-content">
                <div className="contact-left">
                    <h2>Do you have any inquiries about our services?</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Contact Us</h3>
                    <p>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon" /> 
                        <span>  +234 808 488 6942</span>
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
                        <span>  teachhustleng_</span>
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contactSection;
