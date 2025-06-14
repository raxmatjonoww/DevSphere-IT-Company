import React from 'react';
import './Footer.css';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Left: Company Info */}
        <div className="footer-col">
          <h2 className="footer-logo">DevSphere</h2>
          <p className="footer-description">
            Мы создаем сайты, Telegram-ботов, дизайны и цифровые решения.
            DevSphere — ваш надежный партнер в мире IT.
          </p>
        </div>

        {/* Right Side: Services and Contacts */}
        <div className="footer-flex-group">

          <div className="footer-col">
            <h3 className="footer-heading">Услуги</h3>
            <ul className="footer-links">
                <li><a href="#services">Создание сайтов</a></li>
                <li><a href="#services">Telegram-боты</a></li>
                <li><a href="#services">UI/UX дизайн</a></li>
                <li><a href="#services">Мобилография</a></li>
            </ul>

          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Контакты</h3>
            <div className="footer-socials">
              <a href="https://t.me/raxmatjonoww" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane /> devsphere.uz
              </a>
              <a href="https://instagram.com/raxmarjonoww" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> devsphere.uz
              </a>
              <a href="#"><FaYoutube /> devsphere.uz</a>
              <a href="#"><FaFacebookF /> devsphere.uz</a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DevSphere. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
