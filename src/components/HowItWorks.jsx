import React from 'react';
import { ClipboardList, UploadCloud, FileCheck, Award } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { icon: <ClipboardList />, title: "Share Your Details", desc: "Fill a simple form with basic info" },
    { icon: <UploadCloud />, title: "Upload Documents", desc: "Securely upload required docs" },
    { icon: <FileCheck />, title: "We File for You", desc: "Our experts handle government portals" },
    { icon: <Award />, title: "Get Your Certificate", desc: "Delivered straight to your WhatsApp" }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title text-navy">From Documents to Certificate — We Handle It All</h2>
          <p className="subtitle text-gray-600">No CA visits. No government portal confusion. Just WhatsApp us.</p>
        </div>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-icon">
                {step.icon}
                <div className="step-number">{index + 1}</div>
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
