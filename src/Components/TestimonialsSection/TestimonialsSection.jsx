import React from 'react';
import './TestimonialsSection.css'; // Если вы используете CSS Modules

const testimonials = [
  {
    name: 'Иван Петров',
    company: 'ООО "Ромашка"',
    quote: 'DevSphere IT проявили себя как надежный и профессиональный партнер. Их решения помогли нам значительно улучшить наши бизнес-процессы.',
  },
  {
    name: 'Елена Смирнова',
    company: 'ИП "Солнышко"',
    quote: 'Мы очень довольны качеством разработанного ими мобильного приложения. Команда DevSphere IT всегда была на связи и оперативно реагировала на все наши запросы.',
  },
  // Добавьте другие отзывы ваших клиентов
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Отзывы наших клиентов</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">- {testimonial.name}, {testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;