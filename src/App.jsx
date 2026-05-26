import React from 'react';
import Navbar from './components/navbar';
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
      <Footer />
    </>
  );
}

export default App;