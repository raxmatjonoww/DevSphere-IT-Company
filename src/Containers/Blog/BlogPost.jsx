import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { motion } from "framer-motion";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Ошибка:", error.message);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="blogpost-section">
        <div className="blog-spinner" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Пост не найден</h2>
        <Link to="/blog" className="blog-btn">← Назад к блогу</Link>
      </div>
    );
  }

  return (
    <motion.section
      className="blogpost-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="blogpost-container"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="blogpost-title">{post.title}</h2>
        <p className="blogpost-date">
          {post.date &&
            new Date(post.date).toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
        <div className="blogpost-content">
          {post.content?.split("\n").map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <Link to="/blog" className="blog-btn">← Назад к блогу</Link>
      </motion.div>
    </motion.section>
  );
};

export default BlogPost;
