// src/Pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Pages/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>👋 Xush kelibsiz, Admin!</h2>
      <div className="admin-links">
        <Link to="/admin/portfolio">📁 Portfolio'ni boshqarish</Link>
        <Link to="/admin/blogs">📝 Blog postlar</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
