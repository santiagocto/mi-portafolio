import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div 
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        
        {/* --- SECCIÓN SOBRE MÍ --- */}
        <div className="about-content">
          <motion.div 
            className="about-text-area"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="section-title">
              <FaUser className="title-icon" /> Sobre mí
            </h2>
            <p className="about-description">
              Me llamo <span className="highlight-name">Santiago</span>, soy un Ingeniero de Software y Desarrollador Full Stack <strong>colombiano</strong>. Me apasiona crear aplicaciones con múltiples funcionalidades y arquitecturas sólidas. 
              <br /><br />
              Actualmente estoy enfocando mi carrera profesional hacia el <strong>Cloud Engineering</strong>, por lo que disfruto aprendiendo constantemente sobre nuevas tecnologías, frameworks y servicios en la nube para construir soluciones escalables.
            </p>
          </motion.div>

          <motion.div 
            className="about-image-area"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="image-wrapper">
              {/* Recuerda cambiar esta URL por tu foto real */}
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" 
                alt="Santiago Castillo" 
                className="profile-pic"
              />
            </div>
          </motion.div>
        </div>

        {/* --- SECCIÓN TECNOLOGÍAS --- */}
        <motion.div 
          className="tech-content"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
          }}
        >
          <h2 className="section-title">
            <FaCode className="title-icon" /> Tecnologías
          </h2>
          
          <div className="tech-grid">
            {[
              { icon: <FaHtml5 />, color: '#E34F26', name: 'HTML5' },
              { icon: <FaCss3Alt />, color: '#1572B6', name: 'CSS3' },
              { icon: <FaJs />, color: '#F7DF1E', name: 'JavaScript' },
              { icon: <SiTypescript />, color: '#3178C6', name: 'TypeScript' },
              { icon: <FaReact />, color: '#61DAFB', name: 'React' },
              { icon: <SiTailwindcss />, color: '#06B6D4', name: 'Tailwind CSS' },
              { icon: <FaNodeJs />, color: '#339933', name: 'Node.js' },
              { icon: <FaPython />, color: '#3776AB', name: 'Python' },
              { icon: <FaDocker />, color: '#2496ED', name: 'Docker' },
              { icon: <FaAws />, color: '#FF9900', name: 'AWS' },
              { icon: <SiPostgresql />, color: '#336791', name: 'PostgreSQL' },
              { icon: <SiMysql />, color: '#00758F', name: 'MySQL' },
            ].map((tech, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                className="tech-item" 
                style={{ color: tech.color }} 
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;