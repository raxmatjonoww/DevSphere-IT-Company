import React from 'react';
import './Servics.css';
import { motion } from 'framer-motion'; // 🔹 qo‘shildi

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
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-content">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <div className="card-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact"><button className="order-button">Заказать</button></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
