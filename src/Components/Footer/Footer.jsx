import React from 'react';
import './Footer.css'; // Если вы используете CSS Modules

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} DevSphere IT. Все права защищены.
        </div>
        <div className="social-links">
          {/* Добавьте ссылки на свои социальные сети */}
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-info">
          {/* Добавьте контактную информацию */}
          <p>Email: info@devsphere.uz</p>
          <p>Телефон: +998 XX XXX XX XX</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;