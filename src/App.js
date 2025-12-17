import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      
      <main className="main-content">
        <Hero closeMenu={closeMenu} />
        <Services closeMenu={closeMenu} />
        <About closeMenu={closeMenu} />
        <Testimonials closeMenu={closeMenu} />
        <Contact closeMenu={closeMenu} />
      </main>

      <Footer />
    </div>
  );
}

export default App;