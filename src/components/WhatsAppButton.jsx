import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Formateamos tu número (sin el signo + ni espacios)
  const phoneNumber = "573114672067";
  
  // Mensaje prellenado profesional (codificado para URL)
  const message = "Hola Santiago, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="¡Escríbeme por WhatsApp!"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;