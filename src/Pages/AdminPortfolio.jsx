import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminPortfolio.css";

const AdminPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });
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
    const { title, description, image } = form;
    if (!title || !description || !image) {
      alert("Пожалуйста, заполните все обязательные поля.");
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

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link || "",
    });
    setEditingId(project.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот проект?")) {
      await supabase.from("portfolio").delete().eq("id", id);
      fetchProjects();
    }
  };

  return (
    <div className="admin-portfolio">
      <h1>Управление портфолио</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название проекта"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Описание"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ссылка на изображение"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ссылка на сайт (необязательно)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button type="submit">
          {editingId ? "Обновить проект" : "Добавить проект"}
        </button>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Перейти на сайт →
              </a>
            )}
            <div className="btn-group">
              <button onClick={() => handleEdit(project)} className="edit">
                ✏️ Редактировать
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="delete"
              >
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;
