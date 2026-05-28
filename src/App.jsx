import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navbar';
import WhatsAppButton from './components/WhatsAppButton';
import NotFound from './components/NotFound';
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about'; 
import Footer from './components/Footer';
import Contact from './sections/contact';
import './App.css';

function App() {
  
  const currentPath = window.location.pathname;

  
  if (currentPath !== "/" && currentPath !== "") {
    return <NotFound />;
  }

  
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
      <Analytics />
    </>
  );
}

export default App;