import React from 'react';
import './AboutSection.css';
import comanda from '../../assets/comanda.png';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={comanda} alt="О нас" />
        </div>
        <div className="about-text">
          <h2>О DevSphere IT Company</h2>
          <p>
            DevSphere IT Company — это команда опытных и увлеченных профессионалов в области информационных технологий. Мы стремимся создавать инновационные и эффективные решения, которые помогают нашим клиентам достигать своих бизнес-целей.
          </p>
          <p>
            Мы специализируемся на разработке веб-сайтов, мобильных приложений, программного обеспечения, а также предлагаем услуги в области цифрового маркетинга и IT-консалтинга.
          </p>
          <button className="learn-more-button">Узнать больше о компании</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
