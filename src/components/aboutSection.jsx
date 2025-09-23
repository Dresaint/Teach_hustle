import ReactDom from 'react-dom';
import AboutImage from '../assets/image2.avif';
import '../Mycss/aboutSection.css';

const aboutSection = () => {
  return (
    <>
        <section className='about'>
             <div className='about-image'>
                <img src={AboutImage} alt="" />
            </div>
            <div className='about-text'>
                <h2>We are your coding partner</h2>
                <p>
                    TeachHustle goes beyond conventional teaching; we are dedicated coding partners, committed to guiding and collaborating every step of your tech journey.
                </p>
                <button className='more-btn'><a href="/about">More About Us</a></button>
            </div>
           
        </section>
    </>
  )
}

export default aboutSection