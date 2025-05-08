import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Для React Router

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">DevSphere</a>
      </div>
    </nav>
  );
};

export default Navbar;
