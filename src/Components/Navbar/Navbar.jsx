import React, { useState } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">DevSphere</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
