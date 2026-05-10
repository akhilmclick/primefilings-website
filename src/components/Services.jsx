import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { FileText, Coffee, Building2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  return (
    <section id="services" className="section bg-navy">
      <div className="container">
        <h2 className="section-title text-center text-white fade-up">
          Everything a Sole Proprietor Needs — Under One Roof
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 services-grid mt-12">
          
          <div className="glass-card service-card fade-up relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="popular-badge">Most Popular</div>
            <div className="service-icon-wrapper">
              <FileText className="service-icon" />
            </div>
            <h3 className="service-title">GST Registration</h3>
            <p className="service-desc">Sell legally, claim input tax credit, and build business credibility.</p>
            <div className="service-price">Starting ₹499</div>
            <div className="flex items-center justify-between mt-4">
              <button className="btn btn-primary flex-grow" onClick={() => openModal('GST Registration')}>Apply Now</button>
              <Link to="/gst-registration" className="learn-more-link ml-4" style={{marginLeft: '1rem'}}>Learn More &rarr;</Link>
            </div>
          </div>

          <div className="glass-card service-card fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon-wrapper">
              <Coffee className="service-icon" />
            </div>
            <h3 className="service-title">FSSAI License</h3>
            <p className="service-desc">Mandatory for all food businesses. Get licensed fast.</p>
            <div className="service-price">Starting ₹999</div>
            <div className="flex items-center justify-between mt-4">
              <button className="btn btn-outline-navy flex-grow" onClick={() => openModal('FSSAI License')}>Apply Now</button>
              <Link to="/fssai-license" className="learn-more-link ml-4" style={{marginLeft: '1rem'}}>Learn More &rarr;</Link>
            </div>
          </div>

          <div className="glass-card service-card fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="service-icon-wrapper">
              <Building2 className="service-icon" />
            </div>
            <h3 className="service-title">UDYAM Registration</h3>
            <p className="service-desc">Unlock MSME benefits, subsidies, and priority lending.</p>
            <div className="service-price">Starting ₹499</div>
            <div className="flex items-center justify-between mt-4">
              <button className="btn btn-outline-navy flex-grow" onClick={() => openModal('UDYAM Registration')}>Apply Now</button>
              <Link to="/udyam-registration" className="learn-more-link ml-4" style={{marginLeft: '1rem'}}>Learn More &rarr;</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
