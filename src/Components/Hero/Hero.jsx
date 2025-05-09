import React from 'react';
import './Hero.css';
import dev from '../../assets/dev.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Добро пожаловать в DevSphere IT Company!</h1>
          <p>
            Мы — команда профессионалов, предлагающая инновационные IT-решения для вашего бизнеса.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Узнать больше</button>
            <button className="secondary-button">Наши услуги</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={dev} alt="IT Solutions" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
