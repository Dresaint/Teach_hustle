import React from 'react';
import Header from "../components/header";
import HeroSection from '../components/herosection';
import StatisticsSection from '../components/statisticsSection';
import AboutSection from '../components/aboutSection';
import ServicesSection from '../components/serviceSection';
import CallToActionSection from '../components/callToActionSection';

import Testimonial from '../components/testimonial';
import ContactSection from '../components/contactSection.jsx';
import Footer from '../components/footer';


const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <StatisticsSection/>
    <AboutSection/>
    <ServicesSection/>
    <CallToActionSection/>
    <Testimonial/>
    <ContactSection/>
    <Footer/>
    </>
    
  )
}

export default Home;