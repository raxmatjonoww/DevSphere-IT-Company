import React from 'react';
import './Portfolio.css'; // Если вы используете CSS Modules

const projects = [
    
  {
    title: 'Веб-сайт для фитнес-клуба',
    description: 'Современный и удобный веб-сайт с онлайн-записью.',
    // image: '/images/project-fitness.jpg', // Добавьте путь к изображению
    link: '/portfolio/fitness-club',
  },
  {
    title: 'Мобильное приложение для доставки еды',
    description: 'Приложение для iOS и Android с интеграцией платежей.',
    // image: '/images/project-food.jpg', // Добавьте путь к изображению
    link: '/portfolio/food-delivery-app',
  },
  {
    title: 'CRM-система для агентства недвижимости',
    description: 'Система управления клиентами и объектами недвижимости.',
    // image: '/images/project-crm.jpg', // Добавьте путь к изображению
    link: '/portfolio/real-estate-crm',
  },
  // Добавьте другие ваши проекты
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="container">
        <h1>Наши проекты</h1>
        <p className="intro-text">Ознакомьтесь с некоторыми из наших последних и наиболее успешных проектов.</p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* <img src={project.image} alt={project.title} /> */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Подробнее</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;