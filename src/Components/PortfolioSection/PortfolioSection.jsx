import React from 'react';
import './PortfolioSection.css';
// import project1Image from '../../assets/project1.jpg';
// import project2Image from '../../assets/project2.jpg';
// import project3Image from '../../assets/project3.jpg';

const projects = [
  {
    title: 'Веб-сайт для фитнес-клуба',
    description: 'Разработка современного и удобного веб-сайта с онлайн-записью.',
    // image: project1Image,
    link: '/portfolio/fitness-club',
  },
  {
    title: 'Мобильное приложение для доставки еды',
    description: 'Создание мобильного приложения для iOS и Android с интеграцией платежей.',
    // image: project2Image,
    link: '/portfolio/food-delivery-app',
  },
  {
    title: 'CRM-система для агентства недвижимости',
    description: 'Разработка CRM-системы для управления клиентами и объектами недвижимости.',
    // image: project3Image,
    link: '/portfolio/real-estate-crm',
  },
  // Добавьте другие ваши проекты
];

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Последние проекты</h2>
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
        <div className="view-all-button">
          <a href="/portfolio">Смотреть все проекты</a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;