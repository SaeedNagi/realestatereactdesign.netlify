import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Properties from './components/Properties';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Home } from 'lucide-react';
function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    properties: useRef(null),
    services: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };
  return (
    <>
      <Navbar refs={refs} />
      <div ref={refs.home}>
        <Home />
      </div>
      <div ref={refs.about}>
        <About />
      </div>
      <div ref={refs.properties}>
        <Properties />
      </div>
      <div ref={refs.services}>
        <Services />
      </div>
      <div ref={refs.testimonials}>
        <Testimonials />
      </div>
      <div ref={refs.contact}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
