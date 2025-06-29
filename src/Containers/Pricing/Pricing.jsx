// src/Containers/Pricing/Pricing.jsx
import React from 'react';
import './Pricing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import webIcon from '../../assets/Coding Folder.png';
import botIcon from '../../assets/bot.png';
import designIcon from '../../assets/5234318 1.png';
import photoIcon from '../../assets/Слой 3 phone 1.png';
import logoIcon from '../../assets/Targeted advertising and social media marketing.png';
import imageIcon from '../../assets/Web design with image and toolbar elements.png';

const pricingData = [
  {
    icon: webIcon,
    title: 'Создание сайтов',
    description: 'Современные, адаптивные и быстро загружаемые сайты для любых задач.',
    price: 'от 1 500 000 UZS',
  },
  {
    icon: botIcon,
    title: 'Telegram-боты',
    description: 'Автоматизация, рассылки и взаимодействие с клиентами через умные боты.',
    price: 'от 1 000 000 UZS',
  },
  {
    icon: designIcon,
    title: 'UI/UX Дизайн',
    description: 'Прототипы, интерфейсы и дизайн-системы, ориентированные на пользователя.',
    price: 'от 700 000 UZS',
  },
  {
    icon: photoIcon,
    title: 'Мобилография',
    description: 'Съёмка, монтаж и эффектная подача контента для соцсетей и рекламы.',
    price: 'от 500 000 UZS',
  },
  {
    icon: logoIcon,
    title: 'СММ',
    description: 'Создание визуальной идентичности для сильного и узнаваемого бренда.',
    price: 'от 900 000 UZS',
  },
  {
    icon: imageIcon,
    title: 'Графический дизайн',
    description: 'Профессиональная обработка фото: ретушь, цветокоррекция, коллажи.',
    price: 'от 600 000 UZS',
  },
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Тарифы на услуги</h2>
      <div className="pricing-grid">
        {pricingData.map((item, i) => (
          <div className="pricing-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <img src={item.icon} alt={item.title} className="pricing-icon" />
            <h3>{item.title}</h3>
            <p className="desc">{item.description}</p>
            <p className="price">{item.price}</p>
            <a href="#contact"><button className="order-btn">Заказать</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
