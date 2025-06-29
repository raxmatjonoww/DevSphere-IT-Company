import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setPosts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, summary, content } = form;
    if (!title || !summary || !content) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (editingId) {
      await supabase.from("posts").update(form).eq("id", editingId);
      setEditingId(null);
    } else {
      await supabase.from("posts").insert([{ ...form }]);
    }

    setForm({ title: "", summary: "", content: "" });
    fetchPosts();
  };

  const handleEdit = (post) => {
    setForm({
      title: post.title,
      summary: post.summary,
      content: post.content,
    });
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить эту запись?")) {
      await supabase.from("posts").delete().eq("id", id);
      fetchPosts();
    }
  };

  return (
    <div className="admin-panel">
      <h1>Управление блогом</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Краткое описание"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <textarea
          placeholder="Полный текст"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">
          {editingId ? "Обновить запись" : "Добавить запись"}
        </button>
      </form>

      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-item">
            <h3>{post.title}</h3>
            <p className="summary">{post.summary}</p>
            <p>{post.content}</p>
            <div className="btn-group">
              <button onClick={() => handleEdit(post)} className="edit">
                ✏️ Редактировать
              </button>
              <button onClick={() => handleDelete(post.id)} className="delete">
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
