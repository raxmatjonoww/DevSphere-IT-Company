import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="testimonial-text">“{t.feedback}”</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h4 className="testimonial-name">– {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
