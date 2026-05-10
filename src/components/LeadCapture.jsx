import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import './LeadCapture.css';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            service: formData.service,
            source: 'footer'
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
      }
    } catch (err) {
      console.error("Unexpected error during Supabase insert:", err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section lead-capture-section">
      <div className="container">
        <div className="text-center mb-8 fade-up">
          <h2 className="section-title text-white">Start Your Registration Today — It Takes Just 5 Minutes</h2>
        </div>

        <div className="form-container fade-up" style={{ animationDelay: '0.2s' }}>
          {submitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>Our expert will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                required 
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
              <select 
                name="service" 
                required 
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>Select Service</option>
                <option value="GST">GST Registration</option>
                <option value="FSSAI">FSSAI License</option>
                <option value="UDYAM">UDYAM Registration</option>
                <option value="Not Sure">Not Sure / Other</option>
              </select>
              <button type="submit" className="btn btn-primary submit-btn">Get Free Consultation</button>
            </form>
          )}
          
          <div className="privacy-note">
            <Lock className="lock-icon" />
            Your information is safe with us. No spam, ever.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
