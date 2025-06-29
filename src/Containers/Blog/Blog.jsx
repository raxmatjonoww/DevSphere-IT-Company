import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supabase } from '../../supabaseClient';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setPosts(data);
  };

  return (
    <section className="blog-section">
      <h2 className="blog-title">Наш Блог</h2>
      <div className="blog-container">
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <span className="blog-date">{post.date || ''}</span>
              <Link to={`/blog/${post.id}`} className="blog-btn">Читать далее</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
