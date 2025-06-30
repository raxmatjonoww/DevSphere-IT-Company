// src/Containers/Blog/Blog.jsx
import React, { useEffect, useState } from "react";
import "./Blog.css";
import { supabase } from "../../supabaseClient";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      setError(true);
      console.error("Ошибка при получении постов:", error.message);
    } else {
      setPosts(data || []);
    }

    setLoading(false);
  };

  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">Блог</h2>

      {loading ? (
        <div className="blog-loading">
          <div className="blog-spinner" />
        </div>
      ) : error ? (
        <p className="blog-error">Произошла ошибка при загрузке постов.</p>
      ) : posts.length === 0 ? (
        <p className="blog-empty">Записей пока нет.</p>
      ) : (
        <div className="blog-container">
          <div className="blog-list">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <p className="blog-date">
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <a href={`/blog/${post.id}`} className="blog-readmore">
                  Читать далее →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
