import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    date: "", // sana maydoni
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      console.error("Ошибка при загрузке постов:", error.message);
    } else {
      setPosts(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, summary, content, date } = form;

    if (!title || !summary || !content) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const payload = {
      ...form,
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
    };

    if (editingId) {
      const { error } = await supabase
        .from("posts")
        .update(payload)
        .eq("id", editingId);
      if (error) console.error("Ошибка при обновлении:", error.message);
      setEditingId(null);
    } else {
      const { error } = await supabase.from("posts").insert([payload]);
      if (error) console.error("Ошибка при добавлении:", error.message);
    }

    setForm({ title: "", summary: "", content: "", date: "" });
    fetchPosts();
  };

  const handleEdit = (post) => {
    setForm({
      title: post.title,
      summary: post.summary,
      content: post.content,
      date: post.date ? post.date.split("T")[0] : "",
    });
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить эту запись?")) {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) console.error("Ошибка при удалении:", error.message);
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
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
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
            <p className="post-date">
              {post.date &&
                new Date(post.date).toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>
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
