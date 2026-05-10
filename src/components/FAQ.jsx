import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        {question}
        <ChevronDown className="faq-icon" />
      </button>
      <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0' }}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need GST registration as a sole proprietor?",
      answer: "If your annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for special category states) or you sell goods interstate, GST is mandatory."
    },
    {
      question: "What documents are needed for FSSAI?",
      answer: "You typically need a photo ID (Aadhar/PAN), a passport-sized photo, and proof of address for the business premises."
    },
    {
      question: "How long does UDYAM registration take?",
      answer: "We usually process and deliver the UDYAM certificate within 2-3 working days after receiving your documents."
    },
    {
      question: "Is UDYAM registration free from the government?",
      answer: "Yes, the government portal does not charge a fee. Our pricing covers the professional service of filing, consulting, and delivering the certificate without hassle."
    },
    {
      question: "Can I get all 3 registrations together?",
      answer: "Absolutely! Contact our team on WhatsApp, and we can provide a customized package for all your registration needs."
    },
    {
      question: "What happens after I register — do you provide support?",
      answer: "Yes, we provide ongoing support for compliance, return filing, and any modifications you may need in the future."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title text-navy">Questions? We've Got Answers.</h2>
        </div>

        <div className="faq-list fade-up">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
