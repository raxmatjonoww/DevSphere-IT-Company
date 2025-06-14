import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">DevSphere</div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home">Главная</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#works">Наши работы</a></li>
          <li><a href="#team">О нас</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
