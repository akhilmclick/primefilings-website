import React from 'react';
import { useModal } from '../context/ModalContext';
import { Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { openModal } = useModal();
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background"></div>
      
      <div className="container hero-content text-center">
        <h1 className="hero-title fade-up">
          Register Your Business. <br/>
          <span className="text-saffron">Run It Legally.</span> <br/>
          Grow It Confidently.
        </h1>
        
        <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
          GST, FSSAI, UDYAM & more — done for you in days, not weeks.
        </p>
        
        <div className="hero-ctas fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary" onClick={() => openModal()}>
            Get Started Free
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('services')}>
            Talk to an Expert
          </button>
        </div>
      </div>

      <div className="trust-strip fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="container trust-strip-inner">
          <div className="trust-item">
            <Star className="trust-icon" fill="currentColor" />
            <span>500+ Businesses Registered</span>
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" />
            <span>100% Secure</span>
          </div>
          <div className="trust-item">
            <Clock className="trust-icon" />
            <span>3-Day TAT</span>
          </div>
          <div className="trust-item">
            <MapPin className="trust-icon" />
            <span>India-Based Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
