import React, { useEffect } from 'react';
import LeadCapture from '../components/LeadCapture';
import { CheckCircle2, Clock, ShieldCheck, Coffee } from 'lucide-react';
import './ServicePage.css';

const FssaiLicense = () => {
  useEffect(() => {
    document.title = "FSSAI Food License Registration | Filing Pilot";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Apply for FSSAI License online with Filing Pilot. Mandatory for food businesses, restaurants, and home bakers. Transparent pricing and expert support.";
    }
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero bg-navy">
        <div className="container text-center">
          <div className="service-icon-large fade-up">
            <Coffee size={48} />
          </div>
          <h1 className="hero-title fade-up">FSSAI Food License</h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
            14-Digit FSSAI License is mandatory for all food-related businesses. Avoid heavy penalties and gain consumer trust instantly.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="section-title text-navy">Why FSSAI Registration?</h2>
              <p className="text-gray-600 mb-4">
                The Food Safety and Standards Authority of India (FSSAI) regulates and monitors the food business in India to ensure the quality and safety of food products. Whether you are a home baker, a food stall owner, a restaurant, or an online food seller on Swiggy/Zomato, having a valid FSSAI license is a legal requirement.
              </p>
              <p className="text-gray-600">
                Operating a food business without an FSSAI license can lead to heavy penalties ranging from ₹25,000 to ₹5 Lakhs, or even imprisonment.
              </p>
            </div>
            
            <div className="glass-card fade-up bg-gray-50">
              <h3 className="text-navy text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Eligible to sell on Swiggy, Zomato, and other aggregators</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Builds high consumer trust and brand credibility</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Avoid legal hassles and heavy government penalties</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Facilitates corporate tie-ups and business expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title text-navy text-center mb-12 fade-up">Basic FSSAI License (Turnover up to ₹12 Lakhs)</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat-box fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-saffron mb-4 flex justify-center"><Clock size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Fast Processing</h4>
              <p className="text-sm text-gray-600">Get your basic FSSAI registration certificate in just 4 to 7 working days.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-saffron mb-4 flex justify-center"><ShieldCheck size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Simple Documents</h4>
              <p className="text-sm text-gray-600">Only requires Photo ID, Passport size photo, and premises address proof.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-saffron mb-4 flex justify-center"><CheckCircle2 size={32} /></div>
              <h4 className="font-bold text-navy mb-2">1 to 5 Year Validity</h4>
              <p className="text-sm text-gray-600">Choose validity from 1 to 5 years. We'll remind you before it expires.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
    </div>
  );
};

export default FssaiLicense;
