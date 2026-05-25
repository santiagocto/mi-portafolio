import React from 'react';
import Navbar from './components/navbar';
import Hero from './sections/hero';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Todo el resto de tus secciones irán aquí abajo */}
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;