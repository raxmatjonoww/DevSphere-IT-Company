// src/Containers/Portfolio/Portfolio.jsx
import React, { useEffect, useState } from "react";
import './Portfolio.css';
import { supabase } from "../../supabaseClient";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
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
      <h2 className="portfolio-title" data-aos="fade-down">
        Наши работы
      </h2>

      {loading ? (
        <div className="portfolio-loading">
          <div className="portfolio-spinner" />
        </div>
      ) : (
        <div className="portfolio-container" data-aos="fade-up">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-img"
                  />
                </div>
                <h3 className="portfolio-title-text">{project.title}</h3>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
