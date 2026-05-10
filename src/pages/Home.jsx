import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ExpandedServices from '../components/ExpandedServices';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LeadCapture from '../components/LeadCapture';

const Home = () => {
  useEffect(() => {
    document.title = "GST | FSSAI | UDYAM Registration for Sole Proprietors | Primefilings";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Register your business online with expert help. GST, FSSAI & UDYAM registration starting at ₹499. Fast, secure, and 100% online. Talk to us on WhatsApp.";
    }
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <ExpandedServices />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadCapture />
    </main>
  );
};

export default Home;
