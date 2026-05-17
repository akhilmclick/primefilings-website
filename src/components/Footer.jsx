import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo mb-4">
              <img src="/logo-new.png" alt="Filing Pilot Logo" className="logo-img" />
              <span className="logo-text">Filing Pilot</span>
            </div>
            <p className="footer-tagline">Making business compliance simple, fast, and secure for Indian entrepreneurs.</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul>
              <li>
                <Phone className="contact-icon" />
                <span>+91 86524 06639</span>
              </li>
              <li>
                <Mail className="contact-icon" />
                <span>info@filingpilot.in</span>
              </li>
              <li>
                <MapPin className="contact-icon" />
                <span>Navi Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; 2025 Filing Pilot. All Rights Reserved. | MSME & Startup-Friendly Services
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
