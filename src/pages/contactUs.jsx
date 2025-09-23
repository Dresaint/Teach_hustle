import React from 'react'
import '../Mycss/contactUs.css';
import Header from '../components/header'

const contactUs = () => {
  return (
    <>
     <Header />
     <div className='mine'>  
        <h2>Contact Us</h2>
        <p>Get in touch and let us know how we can help.</p>
     </div>
     <div className="contact-container">
      <div className="contact-form">
        <h3>Submit a Request</h3>
        
        <form>
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Your name..." required />
          </div>
          <div className="form-group">
            <label>Email address*</label>
            <input type="email" placeholder="Your email address..." required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="I want to register for a course, can you help me?" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Share your thoughts..." required></textarea>
          </div>
         
        </form>
      </div>

      <div className="contact-info">
        <h3>Get In Touch</h3>
        <p>
          Have a question? Reach out through the message section and someone from TeachHustle would get back to you promptly.
        </p>
        <h3>Chat With Us</h3>
        <p>Chat with us through our Email. <br /> <strong>teachhustle@gmail.com</strong></p>
        <h3>Call Us</h3>
        <p>Reach us directly through our call number. <br /> <strong>0808 488 6942</strong></p>
      </div>
    </div>
    <div className="form-group-consent">
            <input type="checkbox" required  className='checkbox'/>
            <span><label>
              I consent to the terms and conditions and the <a href="/privacy-policy">privacy policy</a>
            </label></span>
          </div>
          <button type="submit" className='btn'>Share Your Thoughts</button>
    </>
  )
}

export default contactUs