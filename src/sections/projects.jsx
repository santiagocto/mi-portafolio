import React, { useState } from 'react';
import './projects.css'; // Asegúrate de que el archivo se llame projects.css
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import ProjectA1 from '../img/ProjectA1.png';
import ProjectA2 from '../img/ProjectA2.png';
import ProjectA3 from '../img/ProjectA3.png';
import ProjectA4 from '../img/ProjectA4.png';
import ProjectA5 from '../img/ProjectA5.png';

// Mapeo de tecnologías con sus iconos
const techIcons = {
  'React': <FaReact />,
  'TailwindCSS': <SiTailwindcss />,
  'TypeScript': <SiTypescript />
};

// Centralizamos los datos para que sea fácil agregar o modificar proyectos en el futuro
const projectsData = [
  {
    id: 1,
    title: 'Constructora AMCO',
    description: 'Desarrollo integral de una Landing Page desde cero. Diseño minimalista, completamente responsivo y optimizado para una excelente experiencia de usuario y conversión de clientes.',
    technologies: ['React', 'TailwindCSS', 'TypeScript'],
    previewLink: 'https://constructoraamco.com',
    imagePlaceholder: '/amco-preview.png', // Cambia esto por la ruta de tu imagen
    carouselImages: [
      ProjectA1,
      ProjectA2,
      ProjectA3,
      ProjectA4,
      ProjectA5
    ]
  },

];

// Componente para el carrusel
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-main">
        <img 
          src={images[currentIndex]} 
          alt={`Imagen del proyecto ${currentIndex + 1}`}
          className="carousel-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/1f1f1f/404040?text=Imagen+del+Proyecto' }}
        />
      </div>

      {/* Botones de navegación */}
      <button className="carousel-button carousel-button-prev" onClick={goToPrevious} aria-label="Imagen anterior">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="carousel-button carousel-button-next" onClick={goToNext} aria-label="Siguiente imagen">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicadores de puntos */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              
              {/* Cabecera: Título y Botón Preview */}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.previewLink !== '#' && (
                  <a href={project.previewLink} target="_blank" rel="noreferrer" className="btn-preview">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Preview
                  </a>
                )}
              </div>

              {/* Descripción */}
              <p className="project-description">{project.description}</p>

              {/* Tecnologías */}
              <div className="project-tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    <span className="tech-icon">{techIcons[tech]}</span>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Contenedor de Imagen o Carrusel */}
              <div className="project-image-wrapper">
                {project.carouselImages && project.carouselImages.length > 0 ? (
                  <ImageCarousel images={project.carouselImages} />
                ) : (
                  <img 
                    src={project.imagePlaceholder} 
                    alt={`Vista previa de ${project.title}`} 
                    className="project-image"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/1f1f1f/404040?text=Imagen+del+Proyecto' }}
                  />
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;