import React from 'react';
import './AboutSection.css';
import comanda from '../../assets/comanda.png';

const AboutSection = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img src={comanda} alt="О нас" />
      </div>
      <div className="about-text">
        <h2>О DevSphere IT Company</h2>
        <p>
          Мы — команда IT-экспертов, создающая современные сайты и решения для бизнеса. Мы привносим инновационные подходы, что позволяет нам создавать высококачественные и эффективные решения для наших клиентов.
        </p>
        <p>
          Наши услуги охватывают весь спектр IT-услуг: от разработки веб-сайтов и мобильных приложений до создания программного обеспечения под ключ. Мы также предоставляем IT-консалтинг, помогая нашим клиентам выбрать наилучшие решения для их бизнеса.
        </p>
        <p>
          Мы гордимся нашей командой профессионалов, которые имеют богатый опыт работы в различных областях технологий. Каждый проект для нас — это возможность продемонстрировать наш подход к качеству, инновациям и эффективности.
        </p>
        <button className="learn-more-button">Узнать больше</button>
      </div>
    </div>
  </section>
);

export default AboutSection;
