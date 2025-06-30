// src/Containers/Portfolio/Portfolio.jsx
import React, { useEffect, useState } from "react";
import './Portfolio.css';
import { motion } from 'framer-motion';
import { supabase } from "../../supabaseClient";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Ошибка при получении данных:", error.message);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наши работы
      </motion.h2>

      {loading ? (
        <div className="portfolio-loading">
          <div className="portfolio-spinner" />
        </div>
      ) : (
        <div className="portfolio-container">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-img"
                  />
                </div>
                <h3 className="portfolio-title-text">{project.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
