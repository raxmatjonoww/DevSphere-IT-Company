import React from 'react';
import './Home.css';
import devImage from '../../../assets/dev.png'; // Tasvir manzilini tekshiring

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        {/* Hero section */}
        <div className="hero">
          <div className="hero-text">
            <h1>Инновационные IT-решения</h1>
            <p className="subtitle">Цифровые решения для вашего бизнеса</p>
            <p className="description">
              Мы создаем высококлассные цифровые продукты, которые помогают компаниям улучшать свои бизнес-процессы и достигать новых высот.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Наши услуги</button>
              <button className="secondary-button">Связаться с нами</button>
            </div>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">Angular</span>
              <span className="tech-item">Vue</span>
              <span className="tech-item">Next.js</span>
              <span className="tech-item">Flutter</span>
              <span className="tech-item">Node.js</span>
            </div>
          </div>
          <div className="hero-image">
            <img src={devImage} alt="Инновационные IT Решения" />
          </div>
        </div>

        {/* Stats section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>200+</h3>
              <p>Завершенных проектов</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Экспертов в команде</p>
            </div>
            <div className="stat-card">
              <h3>8+</h3>
              <p>Лет опыта</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
