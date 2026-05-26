import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css'; 

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar-container"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }}
    >
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;