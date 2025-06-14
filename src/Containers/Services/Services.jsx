import React from 'react';
import './Servics.css';

import webIcon from '../../assets/Coding Folder.png';
import botIcon from '../../assets/bot.png';
import designIcon from '../../assets/5234318 1.png';
import photoIcon from '../../assets/Слой 3 phone 1.png';
import logoIcon from '../../assets/Targeted advertising and social media marketing.png';
import imageIcon from '../../assets/Web design with image and toolbar elements.png';

const servicesData = [
  {
    icon: webIcon,
    title: 'Создание сайтов',
    description: 'Современные, адаптивные и быстро загружаемые сайты для любых задач.',
  },
  {
    icon: botIcon,
    title: 'Telegram-боты',
    description: 'Автоматизация, рассылки и взаимодействие с клиентами через умные боты.',
  },
  {
    icon: designIcon,
    title: 'UI/UX Дизайн',
    description: 'Прототипы, интерфейсы и дизайн-системы, ориентированные на пользователя.',
  },
  {
    icon: photoIcon,
    title: 'Мобилография',
    description: 'Съёмка, монтаж и эффектная подача контента для соцсетей и рекламы.',
  },
  {
    icon: logoIcon,
    title: 'СММ',
    description: 'Создание визуальной идентичности для сильного и узнаваемого бренда.',
  },
  {
    icon: imageIcon,
    title: 'Графический дизайн',
    description: 'Профессиональная обработка фото: ретушь, цветокоррекция, коллажи.',
  }
];

const Services = () => (
  <section className="services-section" id="services">
    <div className="services-container">
      <h2 className="services-title">Наши Услуги</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
