import React from 'react';
import './ServicesSection.css'; // Если вы используете CSS Modules

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
  // Добавьте другие ваши услуги
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Наши услуги</h2>
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