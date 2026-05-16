import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const StatCounter = ({ end, suffix = "", title }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-box" ref={countRef}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-title">{title}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    "Dedicated Expert Assigned to Your Case",
    "Real-time Status Updates via WhatsApp",
    "Government Portal Filed By Us Directly",
    "Post-Registration Support & Compliance Guidance"
  ];

  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="stats-grid fade-up">
            <StatCounter end={500} suffix="+" title="Registrations Done" />
            <StatCounter end={98} suffix="%" title="Success Rate" />
            <StatCounter end={3} suffix=" Days" title="Avg. Completion" />
            <StatCounter end={499} suffix=" ₹" title="Starting Price" />
          </div>

          <div className="benefits-content fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title text-navy">Why Thousands Trust Filing Pilot</h2>
            <p className="subtitle text-gray-600 mb-8">We take the complexity out of compliance so you can focus on growing your business.</p>
            
            <ul className="benefits-list">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="benefit-item">
                  <CheckCircle2 className="benefit-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
