// src/Containers/Blog/Blog.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Xatolik:", error);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Blog Yangiliklari</h2>
        {loading ? (
          <p>Yuklanmoqda...</p>
        ) : posts.length === 0 ? (
          <p>Postlar topilmadi</p>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post.id} className="blog-card">
                <h3>{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
                <Link to={`/blog/${post.id}`} className="blog-readmore">
                  Batafsil →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
