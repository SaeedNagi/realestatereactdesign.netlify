import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Properties from './components/Properties';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const aboutRef = useRef(null);
  const propertiesRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
    <Navbar
        refs={{         
          about: aboutRef,
          properties: propertiesRef,
          services: servicesRef,
          testimonials: testimonialsRef,
          contact: contactRef,
        }}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={propertiesRef}>
        <Properties />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
