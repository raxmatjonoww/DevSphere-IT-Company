import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <HashLink smooth to="/#home" className="logo" onClick={handleClose}>
          DevSphere
        </HashLink>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <HashLink smooth to="/#home" className="nav-link" onClick={handleClose}>
              Главная
            </HashLink>
          </li>

          <li className="divider">|</li>

          {isHomePage ? (
            <>
              <li><a href="#services" className="nav-link" onClick={handleClose}>Услуги</a></li>
              <li className="divider">|</li>
              <li><a href="#works" className="nav-link" onClick={handleClose}>Работы</a></li>
              <li className="divider">|</li>
              <li><a href="#testimonials" className="nav-link" onClick={handleClose}>Отзывы</a></li>
              <li className="divider">|</li>
              <li><a href="#team" className="nav-link" onClick={handleClose}>О нас</a></li>
              <li className="divider">|</li>
              <li><a href="#faq" className="nav-link" onClick={handleClose}>FAQ</a></li>
              <li className="divider">|</li>
              <li><a href="#contact" className="nav-link" onClick={handleClose}>Контакты</a></li>
            </>
          ) : (
            <>
              <li><HashLink smooth to="/#services" className="nav-link" onClick={handleClose}>Услуги</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#works" className="nav-link" onClick={handleClose}>Работы</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#testimonials" className="nav-link" onClick={handleClose}>Отзывы</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#team" className="nav-link" onClick={handleClose}>О нас</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#faq" className="nav-link" onClick={handleClose}>FAQ</HashLink></li>
              <li style={{ color: "white" }} className="divider">|</li>
              <li><HashLink smooth to="/#contact" className="nav-link" onClick={handleClose}>Контакты</HashLink></li>
            </>
          )}

          <li className="divider">|</li>

          <li>
            <Link to="/portfolio" className="nav-link" onClick={handleClose}>
              Портфолио
            </Link>
          </li>
          <li className="divider">|</li>

          <li>
            <a href="tel:+998999909569" className="call-icon" aria-label="Позвонить">
              <FaPhoneAlt />
            </a>
          </li>
          
        </ul>

        <div className="burger" onClick={handleToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
