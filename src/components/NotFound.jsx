import React from 'react';
import { FaSpaceShuttle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-section">
      {/* Elementos decorativos de fondo */}
      <div className="glow-circle top-left"></div>
      <div className="glow-circle bottom-right"></div>

      <div className="notfound-content">
        {/* El texto 404 con efecto Glitch (Falla) */}
        <h1 className="glitch" data-text="404">404</h1>
        
        <h2 className="notfound-title">¡Ups! Te perdiste en la nube.</h2>
        <p className="notfound-description">
          La ruta que intentas buscar no existe, fue movida o hay un error en la Matrix. 
          Vuelve a la base para seguir explorando mi portafolio.
        </p>

        <a href="/" className="btn-home">
          <FaSpaceShuttle className="shuttle-icon" />
          Volver a la base
        </a>
      </div>
    </div>
  );
};

export default NotFound;