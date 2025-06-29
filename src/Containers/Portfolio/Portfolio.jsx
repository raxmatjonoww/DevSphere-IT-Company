import React, { useEffect, useState } from "react";
import './Portfolio.css';
import { motion } from 'framer-motion';
import { supabase } from "../../supabaseClient";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setProjects(data);
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

      <div className="portfolio-container">
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                    Перейти →
                  </a>
                </div>
              </div>
              <h3 className="portfolio-title-text">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
