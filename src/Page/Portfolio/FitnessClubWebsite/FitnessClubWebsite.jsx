import React from 'react';
import './FitnessClubWebsite.css'; // Если вы используете CSS Modules
// import image1 from '../../../../assets/fitness-project-1.jpg'; // Импортируйте изображения проекта
// import image2 from '../../../../assets/fitness-project-2.jpg';

function FitnessClubWebsite() {
  return (
    <div className="fitness-club-page">
      <div className="container">
        <h1>Веб-сайт для фитнес-клуба "Энергия"</h1>
        <p className="intro">Современный и удобный веб-сайт, разработанный для фитнес-клуба "Энергия", с целью привлечения новых клиентов и улучшения взаимодействия с существующими.</p>

        <div className="project-details">
          <h2>Основные задачи проекта:</h2>
          <ul>
            <li>Создание современного и привлекательного дизайна.</li>
            <li>Разработка удобной системы онлайн-записи на занятия.</li>
            <li>Интеграция с платежными системами для онлайн-оплаты абонементов.</li>
            <li>Создание личных кабинетов для клиентов.</li>
            <li>Адаптивность под мобильные устройства.</li>
            <li>SEO-оптимизация для привлечения трафика из поисковых систем.</li>
          </ul>

          <h2>Использованные технологии:</h2>
          <ul>
            <li>React (Front-end)</li>
            <li>Node.js (Back-end)</li>
            <li>MongoDB (База данных)</li>
            <li>HTML5, CSS3</li>
          </ul>

          {/* <h2>Галерея проекта:</h2>
          <div className="gallery">
            <img src={image1} alt="Главная страница" />
            <img src={image2} alt="Страница расписания" />
            {/* Добавьте другие изображения проекта */}
          {/* </div> */}

          <p className="conclusion">Результатом стал современный, функциональный и удобный веб-сайт, который помог фитнес-клубу "Энергия" увеличить количество клиентов и улучшить качество обслуживания.</p>
          <a href="https://example-fitness-club.com" target="_blank" rel="noopener noreferrer">Перейти на сайт</a> {/* Замените на реальную ссылку */}
        </div>
      </div>
    </div>
  );
}

export default FitnessClubWebsite;