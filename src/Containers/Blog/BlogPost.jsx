// src/Containers/Blog/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
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
        console.error("Xato:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="blogpost-section">Yuklanmoqda...</div>;

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post topilmadi</h2>
        <Link to="/blog" className="blog-btn">← Blogga qaytish</Link>
      </div>
    );
  }

  return (
    <section className="blogpost-section">
      <div className="blogpost-container">
        <h2 className="blogpost-title">{post.title}</h2>
        <p className="blogpost-date">{new Date(post.date).toLocaleDateString()}</p>
        <div className="blogpost-content">
          {post.content?.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Link to="/blog" className="blog-btn">← Blogga qaytish</Link>
      </div>
    </section>
  );
};

export default BlogPost;
