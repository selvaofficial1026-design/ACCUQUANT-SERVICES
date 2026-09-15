import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/contentData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="center-header">
          <div className="section-kicker">CLIENT SATISFACTION</div>
          <h2 className="section-title text-white">
            Testimonials<span className="dot">.</span>
          </h2>
          <p className="section-subtitle text-light">
            Read what general contractors, structural engineers, and steel fabricators say about our accuracy and adherence to deadlines.
          </p>
        </div>

        {/* Testimonials Display Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="quote-icon-box">
                <Quote size={32} className="quote-icon" />
              </div>

              <div className="star-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f5a623" color="#f5a623" />
                ))}
              </div>

              <p className="quote-text">
                “{item.quote}”
              </p>

              <div className="client-info-row">
                <div className="client-avatar">
                  {item.author.charAt(0)}
                </div>
                <div className="client-details">
                  <h4 className="client-name">{item.author}</h4>
                  <p className="client-role">{item.role} &bull; {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="trust-metrics-strip">
          <div className="trust-item">
            <span className="trust-number">99.8%</span>
            <span className="trust-text">Client Retention Rate</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">24 Hours</span>
            <span className="trust-text">Rapid RFQ Response</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">100%</span>
            <span className="trust-text">Schedule Adherence</span>
          </div>
        </div>

      </div>
    </section>
  );
}
