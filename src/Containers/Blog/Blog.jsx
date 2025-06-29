// src/Containers/Blog/Blog.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { posts } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
              <span className="blog-date">{post.date}</span>
              <Link to={`/blog/${post.id}`} className="blog-btn">Читать далее</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
