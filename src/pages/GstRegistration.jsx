import React, { useEffect } from 'react';
import LeadCapture from '../components/LeadCapture';
import { CheckCircle2, Clock, ShieldCheck, FileText } from 'lucide-react';
import './ServicePage.css';

const GstRegistration = () => {
  useEffect(() => {
    document.title = "Online GST Registration in India | Primefilings";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Get your GST Registration online quickly and hassle-free. Expert CA assistance, transparent pricing starting at ₹499. Apply now to sell legally across India.";
    }
  }, []);

  return (
    <div className="service-page">
      {/* Service Hero */}
      <section className="service-hero bg-navy">
        <div className="container text-center">
          <div className="service-icon-large fade-up">
            <FileText size={48} />
          </div>
          <h1 className="hero-title fade-up">Online GST Registration</h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
            Get your GSTIN quickly with expert guidance. Claim Input Tax Credit, sell on Amazon/Flipkart, and build trust with your customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="section-title text-navy">What is GST Registration?</h2>
              <p className="text-gray-600 mb-4">
                Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. It is a comprehensive, multi-stage, destination-based tax. Every business or corporation that is involved in the buying and selling and good of services have to register for GST.
              </p>
              <p className="text-gray-600">
                It is mandatory for businesses whose turnover exceeds ₹40 Lakhs (₹20 Lakhs for North Eastern and hill states) for goods, or ₹20 Lakhs (₹10 Lakhs for NE states) for services. Moreover, any business wishing to sell online via e-commerce platforms must have a valid GSTIN.
              </p>
            </div>
            
            <div className="glass-card fade-up bg-gray-50">
              <h3 className="text-navy text-xl font-bold mb-4">Why Do You Need It?</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Legally recognized as a supplier of goods or services</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Legally authorized to collect taxes from purchasers</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Claim Input Tax Credit (ITC) for taxes paid on purchases</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Eligible to sell on e-commerce sites (Amazon, Flipkart, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Documents */}
      <section className="section bg-gray-100">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title text-navy text-center mb-12 fade-up">Documents Required for Sole Proprietors</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat-box fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-saffron mb-4 flex justify-center"><FileText size={32} /></div>
              <h4 className="font-bold text-navy mb-2">PAN & Aadhar</h4>
              <p className="text-sm text-gray-600">Owner's PAN card and Aadhar card linked with active mobile number.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-saffron mb-4 flex justify-center"><ShieldCheck size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Address Proof</h4>
              <p className="text-sm text-gray-600">Electricity bill, Rent Agreement, or NOC from the owner of the premises.</p>
            </div>
            <div className="stat-box fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-saffron mb-4 flex justify-center"><Clock size={32} /></div>
              <h4 className="font-bold text-navy mb-2">Bank Details</h4>
              <p className="text-sm text-gray-600">Cancelled cheque or latest bank statement showing the account details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <LeadCapture />
    </div>
  );
};

export default GstRegistration;
