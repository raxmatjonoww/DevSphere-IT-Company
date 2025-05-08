import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Для React Router

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">DevSphere</a>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link">Главная</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">О нас</Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">Услуги</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Контакты</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
