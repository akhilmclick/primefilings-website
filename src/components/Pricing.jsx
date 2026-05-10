import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { Check } from 'lucide-react';
import './Pricing.css';

const PricingCard = ({ title, price, inclusions, isPopular, delay, route }) => {
  const { openModal } = useModal();
  return (
    <div className={`pricing-card fade-up ${isPopular ? 'popular' : ''}`} style={{ animationDelay: delay }}>
      {isPopular && <div className="pricing-badge">Best Value</div>}
      <h3 className="pricing-title">{title}</h3>
      <div className="pricing-price">
        <span className="currency">₹</span>{price}
      </div>
      <ul className="pricing-inclusions">
        {inclusions.map((item, idx) => (
          <li key={idx}><Check className="check-icon" /> {item}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <button 
          className={`btn flex-grow ${isPopular ? 'btn-primary' : 'btn-outline-navy'}`}
          onClick={() => openModal(title)}
        >
          Choose Plan
        </button>
        <Link to={route} className="learn-more-link ml-4" style={{marginLeft: '1rem'}}>Learn More &rarr;</Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "GST Registration",
      price: "499",
      inclusions: [
        "ARN Generation",
        "GSTIN Allotment",
        "Dedicated Expert",
        "3 Days Processing"
      ],
      isPopular: false,
      delay: "0.1s",
      route: "/gst-registration"
    },
    {
      title: "UDYAM Registration",
      price: "499",
      inclusions: [
        "MSME Certificate",
        "NIC Code Selection",
        "Priority Support",
        "2 Days Processing",
        "Lifetime Validity"
      ],
      isPopular: true,
      delay: "0.2s",
      route: "/udyam-registration"
    },
    {
      title: "FSSAI License",
      price: "999",
      inclusions: [
        "Basic Registration",
        "1 Year Validity",
        "Document Review",
        "4-7 Days Processing"
      ],
      isPopular: false,
      delay: "0.3s",
      route: "/fssai-license"
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title text-navy">Transparent Pricing. Zero Hidden Charges.</h2>
          <p className="subtitle text-gray-600">Simple, upfront pricing for your business compliance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pricing-grid">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 fade-up text-sm">
          * Government fees (if any) charged separately. All prices inclusive of our professional service fee.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
