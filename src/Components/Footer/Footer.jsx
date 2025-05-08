import { FaTelegramPlane, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo">
          <a href="/">DevSphere</a>
          <p>Создаем современные IT-решения <br /> для вашего бизнеса</p>
        </div>

        <div className="footer-section footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/">Гsлавная</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/projects">Наши работы</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h4>Связь с нами</h4>
          <ul>
            <li>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane /> Telegram
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:raxmatjonoww@gmail.com">
                <FaEnvelope /> raxmatjonovjahongir5@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+998908257503">
                <FaPhone /> +998 90 825 75 03
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DevSphere IT Company. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
