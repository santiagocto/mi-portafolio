import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects /> 
        <About />   
      </main>
      <Footer />
    </>
  );
}

export default App;