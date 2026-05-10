import React from 'react';
import './WhatsAppCTA.css';

const WhatsAppCTA = () => {
  const phoneNumber = "919876543210";
  const message = "Hi, I want to register my business!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-cta"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppCTA;
