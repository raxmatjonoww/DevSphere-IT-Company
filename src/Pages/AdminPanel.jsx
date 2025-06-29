import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import '../Pages/AdminPanel.css';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { fetchBlogs(); }, []);

  const fetchBlogs = async () => {
    const { data } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    if (data) setBlogs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.summary) return alert("Iltimos, barcha maydonlarni to‘ldiring");

    if (editingId) {
      await supabase.from("blogs").update(form).eq("id", editingId);
      setEditingId(null);
    } else {
      await supabase.from("blogs").insert([{ ...form }]);
    }
    setForm({ title: "", summary: "" });
    fetchBlogs();
  };

  const handleDelete = async (id) => {
    if (confirm("O‘chirmoqchimisiz?")) {
      await supabase.from("blogs").delete().eq("id", id);
      fetchBlogs();
    }
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, summary: post.summary });
    setEditingId(post.id);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel — Bloglar</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Sarlavha" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Qisqacha tavsif" value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} />
        <button type="submit">{editingId ? "Yangilash" : "Qo‘shish"}</button>
      </form>

      <div className="blog-list">
        {blogs.map((b) => (
          <div key={b.id} className="blog-item">
            <h4>{b.title}</h4>
            <p>{b.summary}</p>
            <button onClick={() => handleEdit(b)}>Tahrirlash</button>
            <button onClick={() => handleDelete(b.id)}>O‘chirish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;