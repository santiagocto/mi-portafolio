import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import miFoto from '../img/1751136592032.png'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contenedor de la foto de perfil */}
        <motion.div 
          variants={itemVariants} 
          className="avatar-container"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={miFoto} 
            alt="Foto de Santiago" 
            className="avatar-img"
          />
        </motion.div>

        {/* Título y Badge */}
        <motion.div variants={itemVariants} className="title-wrapper">
          <h1 className="hero-title">Hey, soy Santiago</h1>
          <span className="status-badge">Disponible para trabajar</span>
        </motion.div>

        {/* Descripción (Bio) */}
        <motion.p variants={itemVariants} className="hero-bio">
          <span className="highlight-text">+1 año de experiencia</span> trabajando como freelancer y en empresas. 
          Desarrollador Full Stack e Ingeniero de Software con un fuerte enfoque en el desarrollo backend y la arquitectura de sistemas.
          Actualmente enfocando mi carrera para convertirme en <span className="highlight-text-alt">Cloud Engineer</span>.
        </motion.p>

        {/* Botones de contacto / Redes */}
        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="https://github.com/santiagocto" target="_blank" rel="noreferrer" className="btn-social">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jes%C3%BAs-santiago-castillo-moyano-97183033a/?isSelfProfile=false" target="_blank" rel="noreferrer" className="btn-social">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:tu-correo@email.com" className="btn-social">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            santiagocastillo111x@gmail.com
          </a>
          <a href="https://drive.google.com/file/d/1IEOiqdXb4hgqfQLQODy5X3Bp4nfxgvXZ/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-social btn-cv">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            Ver CV
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;