import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya S.",
      location: "Pune",
      business: "Home Baker",
      quote: "Got my FSSAI license in just 4 days! The team handled everything on WhatsApp.",
      delay: "0.1s"
    },
    {
      name: "Rahul M.",
      location: "Mumbai",
      business: "Freelance Designer",
      quote: "GST registration was a headache until I found Primefilings. Super fast and transparent.",
      delay: "0.2s"
    },
    {
      name: "Amit K.",
      location: "Delhi",
      business: "Kirana Store Owner",
      quote: "They helped me with UDYAM registration without any hidden fees. Highly recommended.",
      delay: "0.3s"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title text-navy">Real Business Owners. Real Results.</h2>
        </div>

        <div className="testimonials-carousel">
          {reviews.map((review, idx) => (
            <div key={idx} className="testimonial-card fade-up" style={{ animationDelay: review.delay }}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-quote">"{review.quote}"</p>
              <div className="testimonial-author">
                <div className="author-name">{review.name}</div>
                <div className="author-details">{review.business}, {review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
