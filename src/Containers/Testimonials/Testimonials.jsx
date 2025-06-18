import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ali",
    feedback: "DevSphere menga ajoyib sayt yaratib berdi!",
  },
  {
    name: "Malika",
    feedback: "Ular bilan ishlash juda qulay va professional!",
  },
  {
    name: "John",
    feedback: "Yuqori sifatli dizayn va tezkor xizmat.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Отзывы клиентов</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>“{t.feedback}”</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
