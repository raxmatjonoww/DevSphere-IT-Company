import React from 'react';
import './Home2.css';

const WebsiteServiceCard = ({ title, description, price, features }) => (
  <div className="website-service-card">
    <div className="card-content">
      <h3>{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-features">
        <h4>Основные характеристики:</h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="card-price">
        Цена: <span>{price}</span>
      </div>
      <button className="order-button">Заказать</button>
    </div>
  </div>
);

const Home2 = () => {
  const websiteServices = [
    {
      title: 'Простой Сайт-Визитка',
      description: "Компактный и информативный сайт для малого бизнеса или личного бренда. Основная информация, контакты и местоположение.",
      price: '$199',
      features: ['Главная страница', 'Контактная форма', 'Карта местоположения', 'До 3 страниц']
    },
    {
      title: 'Сайт-Портфолио',
      description: "Современный и визуальный сайт для демонстрации коллекции творческих работ. Изображения, видео и проекты.",
      price: '$299',
      features: ['Раздел галереи', 'Страницы проектов', 'Контактная форма', 'Адаптивный дизайн']
    },
    {
      title: 'Корпоративный Сайт',
      description: "Профессиональный и многофункциональный веб-сайт для вашего бизнеса. Услуги, продукты, информация о компании и блог.",
      price: '$499+',
      features: ['Множество страниц', 'Функция блога', 'Контактная форма', 'SEO оптимизация (начальная)']
    },
    {
      title: 'Интернет-Магазин (Начальный)',
      description: "Онлайн-платформа для продажи небольшого количества товаров. Каталог товаров, корзина и интеграция платежей.",
      price: '$599+',
      features: ['Страницы товаров', 'Функция корзины', 'Интеграция с PayPal', 'До 10 товаров']
    },
  ];

  return (
    <div className="home2-wrapper">
      <h2>Какие Сайты Мы Создаем и Их Цены</h2>
      <div className="website-services-container">
        {websiteServices.map((service, index) => (
          <WebsiteServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Home2;