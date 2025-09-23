import React from 'react'
import '../Mycss/callToActionSection.css';

const callToActionSection = () => {
  return (
    <>
         <section className="cta-section">
            <div className="cta-container">
                <h2>Connect with the best teachers to get clarity on topics you find difficult</h2>
                <button className="cta-button"><a href="/Teachers">Connect Now</a></button>
            </div>
        </section>
    </>
  )
}

export default callToActionSection