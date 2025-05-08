import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importing Link from react-router-dom
import "./Navbar.css";
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
          <li><Link to="/">Главная</Link></li> {/* Replaced <a> with <Link> */}
          <li><Link to="/">О нас</Link></li> {/* Replaced <a> with <Link> */}
          <li><Link to="/">Услуги</Link></li> {/* Replaced <a> with <Link> */}
          <li><Link to="/">Проекты</Link></li> {/* Replaced <a> with <Link> */}
          <li><Link to="/">Контакты</Link></li> {/* Replaced <a> with <Link> */}
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
