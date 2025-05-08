import React from 'react';
import './Portfolio.css'; // Agar uslub fayli bo'lsa

function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="page-header">
        <h2>Наши работы</h2>
      </section>

      <section className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/images/project1.jpg" alt="Проект 1" />
          <h3>Название проекта 1</h3>
          <p>Краткое описание проекта 1.</p>
          <a href="/project/1">Подробнее</a>
        </div>
        <div className="portfolio-item">
          <img src="/images/project2.jpg" alt="Проект 2" />
          <h3>Название проекта 2</h3>
          <p>Краткое описание проекта 2.</p>
          <a href="/project/2">Подробнее</a>
        </div>
        {/* Boshqa loyihalar */}
      </section>
    </div>
  );
}

export default Portfolio;