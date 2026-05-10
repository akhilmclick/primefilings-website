import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { Menu, X, ChevronDown, ChevronRight, PhoneCall } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mainAccordionOpen, setMainAccordionOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (route) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    navigate(route);
    window.scrollTo(0, 0);
  };

  const toggleAccordion = (index) => {
    if (mobileAccordion === index) {
      setMobileAccordion(null);
    } else {
      setMobileAccordion(index);
    }
  };

  const megaMenuData = [
    {
      title: "Proprietorship & Business Setup",
      items: [
        { name: "GST Registration", route: "/gst-registration" },
        { name: "UDYAM / MSME Registration", route: "/udyam-registration" },
        { name: "Shop & Establishment License", route: "/shop-establishment" },
        { name: "Trade License", route: "/trade-license" },
        { name: "Professional Tax Registration", route: "/professional-tax" },
        { name: "Current Account Assistance", route: "/current-account" }
      ]
    },
    {
      title: "Food & Product Compliance",
      items: [
        { name: "FSSAI Basic License", route: "/fssai-license" },
        { name: "FSSAI State License", route: "/fssai-license" },
        { name: "FSSAI Central License", route: "/fssai-license" },
        { name: "BIS/ISI Mark Registration", route: "/bis-isi" },
        { name: "EPR Registration", route: "/epr-registration" }
      ]
    },
    {
      title: "Import, Export & Digital",
      items: [
        { name: "IEC Code Registration", route: "/iec-code" },
        { name: "Digital Signature Certificate (DSC)", route: "/dsc" },
        { name: "Trademark Registration", route: "/trademark-registration" }
      ]
    },
    {
      title: "Annual Filings & Returns",
      items: [
        { name: "GST Return Filing (Monthly)", route: "/gst-return" },
        { name: "GST Return Filing (Quarterly)", route: "/gst-return" },
        { name: "ITR Filing for Proprietors", route: "/itr-filing" }
      ]
    }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo" onClick={goHome}>
          <img src="/logo.png" alt="Primefilings Logo" className="logo-img" />
          <span className="logo-text">Primefilings</span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          
          {/* Desktop Mega Menu Trigger */}
          <div 
            className="mega-menu-wrapper hidden md-block"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Services <ChevronDown size={16} />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className={`mega-menu ${isMegaMenuOpen ? 'visible' : ''}`}>
              <div className="container mega-menu-container">
                <div className="mega-menu-grid">
                  {megaMenuData.map((col, idx) => (
                    <div key={idx} className="mega-menu-col" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <h4 className="mega-menu-col-title">{col.title}</h4>
                      <ul className="mega-menu-links">
                        {col.items.map((item, i) => (
                          <li key={i}>
                            <button onClick={() => handleServiceClick(item.route)} className="mega-menu-link">
                              {item.name} <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mega-menu-footer">
                <a href="https://wa.me/918693048667?text=Hi,%20I%20need%20help%20choosing%20a%20service." target="_blank" rel="noopener noreferrer" className="mega-menu-cta">
                  <PhoneCall size={18} /> Need help choosing? Chat with us &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Accordion Menu */}
          <div className="md-hidden w-full">
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-main-btn"
                onClick={() => setMainAccordionOpen(!mainAccordionOpen)}
              >
                Services <ChevronDown size={16} className={`transition-transform ${mainAccordionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`mobile-accordion-main-content ${mainAccordionOpen ? 'open' : ''}`}>
                {megaMenuData.map((col, idx) => (
                  <div key={idx} className="mobile-accordion-item">
                    <button 
                      className="mobile-accordion-header" 
                      onClick={() => toggleAccordion(idx)}
                    >
                      {col.title} <ChevronDown size={16} className={`transition-transform ${mobileAccordion === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`mobile-accordion-content ${mobileAccordion === idx ? 'open' : ''}`}>
                      <ul>
                        {col.items.map((item, i) => (
                          <li key={i}>
                            <button onClick={() => handleServiceClick(item.route)} className="mobile-accordion-link">
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="nav-link" onClick={() => scrollTo('how-it-works')}>How It Works</button>
          <button className="nav-link" onClick={() => scrollTo('pricing')}>Pricing</button>
          <button className="nav-link" onClick={() => scrollTo('faq')}>FAQ</button>
          <button className="btn btn-primary md-ml" onClick={() => scrollTo('contact')}>Get Started</button>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
