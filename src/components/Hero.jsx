import React from 'react';
import { useModal } from '../context/ModalContext';
import { Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
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
    <section id="hero" className="hero-section section-dark diagonal-bottom">
      <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="tech-badge fade-up">🏆 India's Premier Business Compliance</div>
          
          <h1 className="hero-title fade-up" style={{ animationDelay: '0.1s' }}>
            Excellent IT Services <br/>
            & Compliance <span className="text-secondary">Solutions.</span>
          </h1>
          
          <p className="hero-subtitle text-muted fade-up" style={{ animationDelay: '0.2s' }}>
            We deliver the most advanced and responsive tech-driven compliance solutions. GST, FSSAI, UDYAM & more — done securely and rapidly.
          </p>
          
          <div className="hero-ctas fade-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn btn-primary" onClick={() => openModal()}>
              Get Started Free
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('services')}>
              Explore Services
            </button>
          </div>

          <div className="hero-features fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="hero-feature">
              <CheckCircle size={16} className="text-secondary" /> <span>3-Day Turnaround</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={16} className="text-secondary" /> <span>100% Secure Process</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={16} className="text-secondary" /> <span>Expert Support</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="hero-image-backdrop"></div>
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Compliance Experts" className="hero-image" />
          
          <div className="floating-card floating-card-1">
            <ShieldCheck size={24} className="text-primary" />
            <div>
              <strong>Secure Data</strong>
              <span>End-to-end encryption</span>
            </div>
          </div>
          
          <div className="floating-card floating-card-2">
            <Star size={24} className="text-primary" fill="currentColor" />
            <div>
              <strong>500+ Clients</strong>
              <span>Trusted nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
