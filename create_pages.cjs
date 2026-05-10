const fs = require('fs');

const pages = [
  { name: 'ShopEstablishment', title: 'Shop & Establishment License', icon: 'Store' },
  { name: 'TradeLicense', title: 'Trade License', icon: 'FileSignature' },
  { name: 'ProfessionalTax', title: 'Professional Tax Registration', icon: 'Landmark' },
  { name: 'IecCode', title: 'IEC Code (Import Export Code)', icon: 'Globe2' },
  { name: 'CurrentAccount', title: 'Current Account Assistance', icon: 'CreditCard' },
  { name: 'Trademark', title: 'Trademark Registration', icon: 'Shield' },
  { name: 'Dsc', title: 'Digital Signature Certificate (DSC)', icon: 'KeySquare' },
  { name: 'BisIsi', title: 'BIS/ISI Mark Registration', icon: 'CheckSquare' },
  { name: 'EprRegistration', title: 'EPR Registration', icon: 'Recycle' },
  { name: 'GstReturnFiling', title: 'GST Return Filing', icon: 'Calculator' },
  { name: 'ItrFiling', title: 'ITR Filing for Proprietors', icon: 'FileSpreadsheet' }
];

const template = (name, title, icon) => `import React, { useEffect } from 'react';
import LeadCapture from '../components/LeadCapture';
import { CheckCircle2, ${icon} } from 'lucide-react';
import './ServicePage.css';

const ${name} = () => {
  useEffect(() => {
    document.title = "${title} | Primefilings";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero bg-navy">
        <div className="container text-center">
          <div className="service-icon-large fade-up">
            <${icon} size={48} />
          </div>
          <h1 className="hero-title fade-up">${title}</h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
            Get your ${title} quickly and hassle-free with expert assistance from Primefilings.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="section-title text-navy">Why do you need ${title}?</h2>
              <p className="text-gray-600 mb-4">
                This is a mandatory compliance requirement for businesses operating in India. Ensuring timely registration protects your business from legal penalties and opens up new avenues for growth.
              </p>
            </div>
            
            <div className="glass-card fade-up bg-gray-50">
              <h3 className="text-navy text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>100% Legal Compliance</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Avoid heavy government penalties</span>
                </li>
                <li className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>Enhance brand trust and credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
    </div>
  );
};

export default ${name};
`;

pages.forEach(p => {
  fs.writeFileSync(`./src/pages/${p.name}.jsx`, template(p.name, p.title, p.icon));
});

console.log('Pages created successfully.');
