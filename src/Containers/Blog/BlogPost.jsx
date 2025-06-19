// src/Containers/Blog/BlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import { posts } from './data';

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Статья не найдена</h2>
        <Link to="/blog" className="blog-btn">Назад в блог</Link>
      </div>
    );
  }

  return (
    <section className="blogpost-section">
      <div className="blogpost-container">
        <h2 className="blogpost-title">{post.title}</h2>
        <p className="blogpost-date">{post.date}</p>
        <div className="blogpost-content">
          {post.content.trim().split('\n').map((p, idx) => (
            <p key={idx}>{p.trim()}</p>
          ))}
        </div>
        <Link to="/blog" className="blog-btn">← Назад в блог</Link>
      </div>
    </section>
  );
};

export default BlogPost;
