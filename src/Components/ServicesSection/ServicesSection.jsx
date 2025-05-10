import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Разработка веб-сайтов',
    description: 'Создаем современные и функциональные веб-сайты любой сложности.',
    link: '/services/web-development',
  },
  {
    title: 'Разработка мобильных приложений',
    description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android.',
    link: '/services/mobile-app-development',
  },
  {
    title: 'Разработка программного обеспечения',
    description: 'Предлагаем разработку кастомного программного обеспечения для бизнеса.',
    link: '/services/software-development',
  },
  // Вы можете добавить больше услуг по необходимости
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="containerrr">
      <h2 className="section-title">Наши услуги</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link}>Подробнее</a>
            </div>
          ))}
        </div>
        <div className="call-to-action">
          <p>Хотите узнать больше о наших услугах?</p>
          <button className="contact-button">Связаться с нами</button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
