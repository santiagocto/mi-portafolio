import React from 'react';
import Navbar from './components/navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about'; 
import Footer from './components/Footer';
import Contact from './sections/contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects /> 
        <About />  
        <Contact /> 
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;