import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { X, Lock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import './LeadModal.css';

const LeadModal = () => {
  const { isModalOpen, closeModal, selectedService } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setFormData(prev => ({
        ...prev,
        service: selectedService || ''
      }));
      setSuccess(false);
      setError('');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setError('Please fill in all fields.');
      return;
    }
    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            source: 'modal'
          }
        ]);

      if (supabaseError) {
        console.error("Error inserting into Supabase:", supabaseError);
        // Fallback to local storage if Supabase fails
        const leads = JSON.parse(localStorage.getItem('primefilings_leads') || '[]');
        leads.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('primefilings_leads', JSON.stringify(leads));
      }
    } catch (err) {
      console.error("Unexpected error during Supabase insert:", err);
    }

    setSuccess(true);

    const businessNumber = "919876543210";
    const text = `Hi, I'm ${formData.name} and I'm interested in ${formData.service}. My email is ${formData.email}. Please help me get started.`;
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      closeModal();
    }, 1500);
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}><X size={24} /></button>
        
        {success ? (
          <div className="modal-success">
            <h3>🎉 Opening WhatsApp...</h3>
            <p>We'll see you there!</p>
          </div>
        ) : (
          <div className="modal-content">
            <h2 className="modal-title">Let's Get You Registered 🚀</h2>
            <p className="modal-subtitle">Fill in your details — our expert will reach out in minutes.</p>
            
            {error && <div className="modal-error">{error}</div>}
            
            <form onSubmit={handleSubmit} className="modal-form">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="modal-input"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                className="modal-input"
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="WhatsApp Number" 
                maxLength="10"
                value={formData.phone} 
                onChange={handleChange} 
                className="modal-input"
              />
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className="modal-select"
              >
                <option value="" disabled>Select Service</option>
                <option value="GST Registration">GST Registration</option>
                <option value="FSSAI License">FSSAI License</option>
                <option value="UDYAM Registration">UDYAM Registration</option>
                <option value="Shop & Establishment">Shop & Establishment License</option>
                <option value="Trade License">Trade License</option>
                <option value="Professional Tax">Professional Tax Registration</option>
                <option value="MSME Certificate">MSME Certificate</option>
                <option value="IEC Code">IEC Code</option>
                <option value="Current Account">Current Account Assistance</option>
                <option value="Trademark">Trademark Registration</option>
                <option value="DSC">Digital Signature Certificate (DSC)</option>
                <option value="BIS/ISI Mark">BIS/ISI Mark Registration</option>
                <option value="EPR Registration">EPR Registration</option>
                <option value="GST Return Filing">GST Return Filing</option>
                <option value="ITR Filing">ITR Filing for Proprietors</option>
                <option value="Not Sure">Not Sure — Help Me Decide</option>
              </select>
              
              <button type="submit" className="btn btn-primary modal-submit">Proceed to WhatsApp →</button>
            </form>
            <div className="modal-footer-note">
              <Lock size={14} className="lock-icon" />
              <span>We never share your data. WhatsApp chat is encrypted.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
