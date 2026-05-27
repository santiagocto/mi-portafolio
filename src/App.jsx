import React from 'react';
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
  // Obtenemos la ruta actual (ej. "/", "/about", "/asdfgh")
  const currentPath = window.location.pathname;

  // Si la ruta NO es la raíz ("/") y NO está vacía, mostramos el Error 404
  if (currentPath !== "/" && currentPath !== "") {
    return <NotFound />;
  }

  // Si la ruta es correcta ("/"), mostramos todo el portafolio normalmente
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