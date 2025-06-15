import React from "react";
import "./Portfolio.css";

// import project1 from "../../assets/kia.png";
// import project2 from "../../assets/chillpro.png";
// import project3 from "../../assets/fasten.png";

const projects = [
  {
    title: "KIA Uzbekistan",
    // image: project1,
    description: "Корпоративный сайт для автомобильной компании.",
    link: "https://kia.uz",
  },
  {
    title: "ChillPro Service",
    // image: project2,
    description: "Сайт услуг по ремонту и установке кондиционеров.",
    link: "#",
  },
  {
    title: "Fasten Marketing",
    // image: project3,
    description: "Landing page для маркетингового агентства.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Наши работы</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio-btn" target="_blank" rel="noopener noreferrer">
                Перейти на сайт
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
