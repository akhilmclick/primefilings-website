import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import LeadModal from './components/LeadModal';
import Home from './pages/Home';
import GstRegistration from './pages/GstRegistration';
import FssaiLicense from './pages/FssaiLicense';
import UdyamRegistration from './pages/UdyamRegistration';
import ShopEstablishment from './pages/ShopEstablishment';
import TradeLicense from './pages/TradeLicense';
import ProfessionalTax from './pages/ProfessionalTax';
import IecCode from './pages/IecCode';
import CurrentAccount from './pages/CurrentAccount';
import Trademark from './pages/Trademark';
import Dsc from './pages/Dsc';
import BisIsi from './pages/BisIsi';
import EprRegistration from './pages/EprRegistration';
import GstReturnFiling from './pages/GstReturnFiling';
import ItrFiling from './pages/ItrFiling';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Re-initialize intersection observer for new page elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const initObserver = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    };

    // Small timeout to allow DOM to paint the new route
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gst-registration" element={<GstRegistration />} />
        <Route path="/fssai-license" element={<FssaiLicense />} />
        <Route path="/udyam-registration" element={<UdyamRegistration />} />
        <Route path="/shop-establishment" element={<ShopEstablishment />} />
        <Route path="/trade-license" element={<TradeLicense />} />
        <Route path="/professional-tax" element={<ProfessionalTax />} />
        <Route path="/iec-code" element={<IecCode />} />
        <Route path="/current-account" element={<CurrentAccount />} />
        <Route path="/trademark-registration" element={<Trademark />} />
        <Route path="/dsc" element={<Dsc />} />
        <Route path="/bis-isi" element={<BisIsi />} />
        <Route path="/epr-registration" element={<EprRegistration />} />
        <Route path="/gst-return" element={<GstReturnFiling />} />
        <Route path="/itr-filing" element={<ItrFiling />} />
      </Routes>
      <Footer />
      <WhatsAppCTA />
      <LeadModal />
    </div>
  );
}

export default App;
