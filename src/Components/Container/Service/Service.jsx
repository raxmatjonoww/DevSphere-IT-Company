import React from 'react';
import './Service.css'; // Agar uslub fayli bo'lsa

function Service() {
  return (
    <div className="services-page">
      <section className="page-header">
        <h2>Наши услуги</h2>
        <p>DevSphere предоставляет широкий спектр IT-услуг для вашего бизнеса. Мы поможем вам создать инновационные решения, которые помогут вам достичь успеха!</p>
      </section>

      <section className="services-list">
        <div className="service-item">
          <h3>Разработка веб-приложений</h3>
          <p>Создаем современные и масштабируемые веб-приложения любой сложности с использованием передовых технологий.</p>
          <button className="more-info">Подробнее</button>
        </div>
        <div className="service-item">
          <h3>Разработка мобильных приложений</h3>
          <p>Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android с максимальной производительностью.</p>
          <button className="more-info">Подробнее</button>
        </div>
        <div className="service-item">
          <h3>UI/UX Дизайн</h3>
          <p>Создаем привлекательные и удобные пользовательские интерфейсы, ориентированные на пользователя и его потребности.</p>
          <button className="more-info">Подробнее</button>
        </div>
        <div className="service-item">
          <h3>Тестирование и QA</h3>
          <p>Обеспечиваем высокое качество вашего программного обеспечения с помощью комплексного тестирования и контроля качества.</p>
          <button className="more-info">Подробнее</button>
        </div>
        <div className="service-item">
          <h3>IT Консалтинг</h3>
          <p>Предоставляем экспертные консультации по вопросам информационных технологий для оптимизации ваших бизнес-процессов.</p>
          <button className="more-info">Подробнее</button>
        </div>
      </section>
    </div>
  );
}

export default Service;
