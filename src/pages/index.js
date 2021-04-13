import React from 'react';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
