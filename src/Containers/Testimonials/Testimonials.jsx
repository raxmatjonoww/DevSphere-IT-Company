import React from 'react';
import './Testimonials.css';

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
