import React, { useState, useEffect } from 'react';
import './Footer.css';
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-about">
          <h2 className="footer-logo">DevSphere</h2>
          <p className="footer-description">
            DevSphere — современная IT-компания, предоставляющая услуги по созданию сайтов, Telegram-ботов, графическому дизайну и мобильной видеосъёмке.
          </p>
        </div>

        {/* Navigation Links */}
        {/* <div className="footer-links">
          <h3>Навигация</h3>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#">Портфолио</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div> */}

        {/* Contact & Social */}
        <div className="footer-contact">
          <h3>Связаться с нами</h3>
          <ul className="contact-list">
            <li>
              <a href="tel:+998901234567" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt className="icon" />
                <span className="contact-text">+998 (99) 990-95-69</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/devsphere" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="icon" />
                <span className="contact-text">@devsphere.uz</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/devsphere.uz" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
                <span className="contact-text">@devsphere.uz</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DevSphere. Все права защищены.</p>
      </div>

      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
