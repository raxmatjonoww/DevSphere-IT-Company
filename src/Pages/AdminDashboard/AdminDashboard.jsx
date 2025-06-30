import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // CSS import

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Панель администратора</h1>
      <div className="dashboard-buttons">
        <Link to="/admin/portfolio">Портфолио</Link>
        <Link to="/admin/blogs">Блог-посты</Link>
        <Link to="/">На главную</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
