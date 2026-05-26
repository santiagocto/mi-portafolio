import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Validar email con regex más robusto
  const validateEmail = (email) => {
    // Exige al menos 2 caracteres después del último punto (ej: .co, .com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validar teléfono (mínimo 7 dígitos)
  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[0-9]{7,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Validar nombre (no vacío)
  const validateName = (name) => {
    return name.trim().length >= 3;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors({});
    setStatusMessage('');

    // Obtener valores del formulario
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;

    // Validaciones
    const errors = {};

    if (!validateName(name)) {
      errors.user_name = 'El nombre debe tener al menos 3 caracteres';
    }

    if (!validateEmail(email)) {
      errors.user_email = 'Por favor ingresa un email válido (ej: usuario@dominio.com)';
    }

    if (!validatePhone(phone)) {
      errors.user_phone = 'El teléfono debe tener al menos 7 dígitos';
    }

    // Si hay errores, mostrarlos
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setStatusMessage('Por favor corrige los errores en el formulario');
      return;
    }

    setIsSubmitting(true);

    const SERVICE_ID = 'service_jl3bvx3';
    const TEMPLATE_ID = 'template_ce76l8f';
    const PUBLIC_KEY = 'e6LQYXu4dXXBWMvSc';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatusMessage('¡Mensaje enviado con éxito! Te contactaré pronto.');
          form.current.reset(); 
          setIsSubmitting(false);
      }, (error) => {
          console.log(error.text);
          setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
          setIsSubmitting(false);
      });
  };

  // Limpiar mensaje de éxito después de 5 segundos
  useEffect(() => {
    if (statusMessage && Object.keys(formErrors).length === 0) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage, formErrors]);

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contáctame</h2>
        <p className="contact-subtitle">¿Tienes un proyecto en mente o una oportunidad laboral? Hablemos.</p>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          {/* El atributo "name" debe coincidir EXACTAMENTE con las variables de tu plantilla de EmailJS */}
          
          <div className="input-group">
            <label htmlFor="user_name">Nombre completo</label>
            <input 
              type="text" 
              id="user_name" 
              name="user_name" 
              placeholder="Ej. Juan Pérez" 
              required 
              className={formErrors.user_name ? 'input-error' : ''}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
              }}
            />
            {formErrors.user_name && <span className="error-message">{formErrors.user_name}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="user_email">Correo electrónico</label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email" 
              placeholder="juan@ejemplo.com" 
              required 
              className={formErrors.user_email ? 'input-error' : ''}
            />
            {formErrors.user_email && <span className="error-message">{formErrors.user_email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="user_phone">Número de teléfono</label>
            <input 
              type="tel" 
              id="user_phone" 
              name="user_phone" 
              placeholder="+57 300 000 0000" 
              required 
              className={formErrors.user_phone ? 'input-error' : ''}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9+]/g, '');
              }}
            />
            {formErrors.user_phone && <span className="error-message">{formErrors.user_phone}</span>}
          </div>

          
          <div className="input-group">
            <label htmlFor="message">Mensaje (Opcional)</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="¿En qué te puedo ayudar?"
              style={{ resize: 'none' }}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          
          {statusMessage && <p className={`status-message ${Object.keys(formErrors).length > 0 ? 'error' : 'success'}`}>{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;