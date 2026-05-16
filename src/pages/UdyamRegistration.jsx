import React, { useEffect } from 'react';
import LeadCapture from '../components/LeadCapture';
import { CheckCircle2, TrendingUp, Building2, Landmark } from 'lucide-react';
import './ServicePage.css';

const UdyamRegistration = () => {
  useEffect(() => {
    document.title = "Online UDYAM (MSME) Registration | Filing Pilot";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Get your UDYAM (MSME) Registration online in just 2 days. Unlock government subsidies, priority bank loans, and trademark discounts with Filing Pilot.";
    }
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero bg-navy">
        <div className="container text-center">
          <div className="service-icon-large fade-up">
            <Building2 size={48} />
          </div>
          <h1 className="hero-title fade-up">UDYAM (MSME) Registration</h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
            Unlock priority lending, massive government subsidies, and protection against delayed payments with a lifetime valid MSME certificate.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="section-title text-navy">What is UDYAM Registration?</h2>
              <p className="text-gray-600 mb-4">
                UDYAM Registration (formerly Udyog Aadhar) is a government registration provided to Micro, Small, and Medium Enterprises (MSMEs) in India. It acts as an identity and recognition for the enterprise under the Ministry of MSME.
              </p>
              <p className="text-gray-600">
                Registering your sole proprietorship under UDYAM is highly recommended as it opens the doors to numerous financial schemes, subsidies, and government tenders that are exclusively reserved for MSMEs.
              </p>
            </div>
            
            <div className="glass-card fade-up bg-gray-50">
              <h3 className="text-navy text-xl font-bold mb-4">Unmatched Benefits</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Collateral-free loans from banks under CGTMSE</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>50% discount on Trademark & Patent registration</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Protection against delayed payments from buyers</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Concession on electricity bills and ISO certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title text-navy text-center mb-12 fade-up">Why Let Us Handle Your UDYAM?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat-box fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-saffron mb-4 flex justify-center"><CheckCircle2 size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Lifetime Validity</h4>
              <p className="text-sm text-gray-600">UDYAM certificate does not require renewal. It is valid for a lifetime.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-saffron mb-4 flex justify-center"><Landmark size={32} /></div>
              <h4 className="font-bold text-navy mb-2">NIC Code Selection</h4>
              <p className="text-sm text-gray-600">We help you choose the correct NIC codes for your specific business activity.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-saffron mb-4 flex justify-center"><TrendingUp size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Aadhar Driven</h4>
              <p className="text-sm text-gray-600">Paperless process based entirely on your Aadhar card and mobile OTP.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
    </div>
  );
};

export default UdyamRegistration;
