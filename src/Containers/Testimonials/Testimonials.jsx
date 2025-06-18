import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Али Ибрагимов",
    feedback: "DevSphere разработали для меня сайт, который превзошёл все мои ожидания. Команда продемонстрировала высокий уровень профессионализма и учла каждую мою просьбу.",
  },
  {
    name: "Малика Абдуллаева",
    feedback: "Работать с DevSphere было очень комфортно. Все этапы проекта проходили чётко и слаженно. Я очень довольна качеством и подходом команды.",
  },
  {
    name: "Рустам Хасанов",
    feedback: "Отличный сервис и качественный дизайн. Сайт загрузился быстро, адаптирован под все устройства. Рекомендую DevSphere всем, кто ищет надёжного партнёра в сфере IT.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">Отзывы клиентов</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <p className="testimonial-text">“{t.feedback}”</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h4 className="testimonial-name">– {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
