import React from 'react';
import '../Mycss/footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <h4>Scholarship</h4>
                        <p>Courses</p>
                        <p>Careers</p>
                        <p>About Us</p>
                    </div>
                    <div className="footer-right">
                        <p>&copy; 2024 TeachHustle. All rights reserved.</p>
                        <div className="footer-social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
