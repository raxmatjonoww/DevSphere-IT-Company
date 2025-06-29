// src/Containers/Blog/Blog.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { motion } from "framer-motion";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Ошибка:", error.message);
        setError("Ошибка при загрузке данных.");
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (date) => {
    const postDate = new Date(date);
    const today = new Date();

    if (postDate.toDateString() === today.toDateString()) {
      return "Сегодня";
    }

    return postDate.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="blog-container">
        <motion.h2
          className="blog-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Новости блога
        </motion.h2>

        {loading ? (
          <div className="blog-loading">
            <div className="blog-spinner" />
          </div>
        ) : error ? (
          <p className="blog-error">{error}</p>
        ) : posts.length === 0 ? (
          <p className="blog-empty">Пока нет записей в блоге.</p>
        ) : (
          <motion.div
            className="blog-list"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3>{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <p className="blog-date">{formatDate(post.date)}</p>
                <Link to={`/blog/${post.id}`} className="blog-readmore">
                  Читать далее →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Blog;
