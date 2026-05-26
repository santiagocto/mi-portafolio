import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-text">© {new Date().getFullYear()} Santiago Castillo</span>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#inicio" className="footer-link">Inicio</a>
            <a href="#sobre-mi" className="footer-link">Sobre mí</a>
            <a href="#proyectos" className="footer-link">Proyectos</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
