import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { FileText, Coffee, Building2, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const { openModal } = useModal();

  return (
    <section id="services" className="section section-light bg-dot-pattern">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="tech-badge fade-up">Exclusive IT Services</div>
          <h2 className="section-title text-center fade-up" style={{ animationDelay: '0.1s' }}>
            Excellent IT Services <br/> for Your Success
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          <div className="tech-card fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="popular-badge-tech">Most Popular</div>
            <div className="icon-box">
              <FileText size={28} />
            </div>
            <h3 className="mb-2">GST Registration</h3>
            <p className="text-muted mb-4">Sell legally, claim input tax credit, and build business credibility with rapid GST processing.</p>
            <div className="font-bold mb-6 text-primary">Starting ₹499</div>
            
            <div className="flex items-center justify-between">
              <button className="btn btn-primary" onClick={() => openModal('GST Registration')}>Apply Now</button>
              <Link to="/gst-registration" className="text-muted hover:text-primary flex items-center gap-2">
                Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="tech-card fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="icon-box">
              <Coffee size={28} />
            </div>
            <h3 className="mb-2">FSSAI License</h3>
            <p className="text-muted mb-4">Mandatory for all food businesses. Get licensed fast with end-to-end expert guidance.</p>
            <div className="font-bold mb-6 text-primary">Starting ₹999</div>
            
            <div className="flex items-center justify-between">
              <button className="btn btn-outline" onClick={() => openModal('FSSAI License')}>Apply Now</button>
              <Link to="/fssai-license" className="text-muted hover:text-primary flex items-center gap-2">
                Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="tech-card fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="icon-box">
              <Building2 size={28} />
            </div>
            <h3 className="mb-2">UDYAM Registration</h3>
            <p className="text-muted mb-4">Unlock MSME benefits, government subsidies, and priority lending immediately.</p>
            <div className="font-bold mb-6 text-primary">Starting ₹499</div>
            
            <div className="flex items-center justify-between">
              <button className="btn btn-outline" onClick={() => openModal('UDYAM Registration')}>Apply Now</button>
              <Link to="/udyam-registration" className="text-muted hover:text-primary flex items-center gap-2">
                Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
