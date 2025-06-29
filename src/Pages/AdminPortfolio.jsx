import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { v4 as uuidv4 } from "uuid";
import "./AdminPortfolio.css";

const AdminPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [imageFile, setImageFile] = useState(null);
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

  const handleImageUpload = async (file) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("portfolio-images")
      .upload(fileName, file);

    if (uploadError) {
      console.error("Rasm yuklashda xatolik:", uploadError.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    return publicUrlData?.publicUrl || null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, link } = form;

    if (!title || !description || (!editingId && !imageFile)) {
      return alert("Barcha maydonlarni to‘ldiring.");
    }

    let imageUrl = null;
    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
      if (!imageUrl) return;
    }

    const projectData = {
      title,
      description,
      link,
      ...(imageUrl && { image: imageUrl }),
    };

    const table = supabase.from("portfolio");

    if (editingId) {
      const { error } = await table.update(projectData).eq("id", editingId);
      if (error) return alert("Xatolik: " + error.message);
      setEditingId(null);
    } else {
      const { error } = await table.insert([projectData]);
      if (error) return alert("Xatolik: " + error.message);
    }

    setForm({ title: "", description: "", link: "" });
    setImageFile(null);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      link: project.link || "",
    });
    setEditingId(project.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Haqiqatan o‘chirmoqchimisiz?")) {
      await supabase.from("portfolio").delete().eq("id", id);
      fetchProjects();
    }
  };

  return (
    <div className="admin-portfolio">
      <h1>Portfolio boshqaruvi</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nomi"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Tavsif"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Sayt havolasi (ixtiyoriy)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button type="submit">
          {editingId ? "Yangilash" : "Qo‘shish"}
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
                rel="noreferrer"
                className="visit-link"
              >
                Saytga o‘tish →
              </a>
            )}
            <div className="btn-group">
              <button
                className="edit"
                onClick={() => handleEdit(project)}
              >
                ✏️
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(project.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;
