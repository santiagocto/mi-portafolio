import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;