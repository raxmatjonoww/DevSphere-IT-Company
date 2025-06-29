// src/Pages/AdminPortfolio.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminPortfolio.css";

const AdminPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "", link: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setProjects(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.image) {
      alert("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    if (editingId) {
      await supabase.from("portfolio").update(form).eq("id", editingId);
      setEditingId(null);
    } else {
      await supabase.from("portfolio").insert([{ ...form }]);
    }
    setForm({ title: "", description: "", image: "", link: "" });
    fetchProjects();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Haqiqatan ham o‘chirilsinmi?")) {
      await supabase.from("portfolio").delete().eq("id", id);
      fetchProjects();
    }
  };

  const handleEdit = (project) => {
    setForm({ title: project.title, description: project.description, image: project.image, link: project.link || "" });
    setEditingId(project.id);
  };

  return (
    <div className="admin-portfolio">
      <h2>Admin Panel — Portfolio boshqaruvi</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sarlavha"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Tavsif"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sayt havolasi (ixtiyoriy)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button type="submit">{editingId ? "Yangilash" : "Qo‘shish"}</button>
      </form>

      <div className="portfolio-list">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                Saytga o‘tish →
              </a>
            )}
            <div className="btn-group">
              <button onClick={() => handleEdit(project)} className="btn edit-btn">
                Tahrirlash
              </button>
              <button onClick={() => handleDelete(project.id)} className="btn delete-btn">
                O‘chirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;
