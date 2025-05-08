import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">DevSphere</a>
        </div>
        <ul className="footer-links">
          <li><a href="/">Главная</a></li>
          <li><a href="/services">Услуги</a></li>
          <li><a href="/portfolio">Портфолио</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DevSphere. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
