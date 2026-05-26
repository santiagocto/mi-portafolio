import React from 'react';
import './about.css';
// Importamos íconos de FontAwesome (muy estables)
import { 
  FaUser, FaCode, FaHtml5, FaCss3Alt, 
  FaJs, FaReact, FaNodeJs, FaPython, 
  FaDocker, FaAws 
} from 'react-icons/fa';
// Importamos solo los que faltan de SimpleIcons
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMysql } from 'react-icons/si';

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        
        {/* --- SECCIÓN SOBRE MÍ --- */}
        <div className="about-content">
          <div className="about-text-area">
            <h2 className="section-title">
              <FaUser className="title-icon" /> Sobre mí
            </h2>
            <p className="about-description">
              Me llamo <span className="highlight-name">Santiago</span>, soy un Ingeniero de Software y Desarrollador Full Stack <strong>colombiano</strong>. Me apasiona crear aplicaciones con múltiples funcionalidades y arquitecturas sólidas. 
              <br /><br />
              Actualmente estoy enfocando mi carrera profesional hacia el <strong>Cloud Engineering</strong>, por lo que disfruto aprendiendo constantemente sobre nuevas tecnologías, frameworks y servicios en la nube para construir soluciones escalables.
            </p>
          </div>

          <div className="about-image-area">
            <div className="image-wrapper">
              {/* Recuerda cambiar esta URL por tu foto real */}
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" 
                alt="Santiago Castillo" 
                className="profile-pic"
              />
            </div>
          </div>
        </div>

        {/* --- SECCIÓN TECNOLOGÍAS --- */}
        <div className="tech-content">
          <h2 className="section-title">
            <FaCode className="title-icon" /> Tecnologías
          </h2>
          
          <div className="tech-grid">
            <div className="tech-item" style={{ color: '#E34F26' }} title="HTML5"><FaHtml5 /></div>
            <div className="tech-item" style={{ color: '#1572B6' }} title="CSS3"><FaCss3Alt /></div>
            <div className="tech-item" style={{ color: '#F7DF1E' }} title="JavaScript"><FaJs /></div>
            <div className="tech-item" style={{ color: '#3178C6' }} title="TypeScript"><SiTypescript /></div>
            <div className="tech-item" style={{ color: '#61DAFB' }} title="React"><FaReact /></div>
            <div className="tech-item" style={{ color: '#06B6D4' }} title="Tailwind CSS"><SiTailwindcss /></div>
            <div className="tech-item" style={{ color: '#339933' }} title="Node.js"><FaNodeJs /></div>
            <div className="tech-item" style={{ color: '#3776AB' }} title="Python"><FaPython /></div>
            <div className="tech-item" style={{ color: '#2496ED' }} title="Docker"><FaDocker /></div>
            <div className="tech-item" style={{ color: '#FF9900' }} title="AWS"><FaAws /></div>
            <div className="tech-item" style={{ color: '#336791' }} title="PostgreSQL"><SiPostgresql /></div>
            <div className="tech-item" style={{ color: '#00758F' }} title="MySQL"><SiMysql /></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;