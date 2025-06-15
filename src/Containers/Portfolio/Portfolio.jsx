import React from "react";
import "./Portfolio.css";

import kia from '../../assets/kia.jpg';
import chillpro from '../../assets/chillpro.jpg';
import fasten from '../../assets/fasten.jpg';
import sky from '../../assets/sky.jpg';
import weestep from '../../assets/weestep.jpg';
import tomato from '../../assets/tomato.jpg';
import surfing from '../../assets/surfing.jpg'
import ers from '../../assets/ers.jpg'

const projects = [
  {
    title: "KIA Uzbekistan",
    image: kia,
    // description: "Корпоративный сайт для автомобильной компании.",
    link: "https://kia.uz",
  },
  {
    title: "ChillPro Service",
    image: chillpro,
    // description: "Сайт услуг по ремонту и установке кондиционеров.",
    link: "https://www.chillpro.uz/",
  },
  {
    title: "Fasten Marketing",
    image: fasten,
    // description: "Landing page для маркетингового агентства.",
    link: "https://fasten.com/ru_uz",
  },
  {
    title: "Skywings",
    image: sky,
    // description: "Landing page для Авиа Компании.",
    link: "https://skywings-studio.vercel.app/",
  },
  {
    title: "Weestep be bigger",
    image: weestep,
    // description: "Landing page для маркетингового агентства.",
    link: "https://weestep-app.vercel.app/",
  },
  {
    title: "Cafe Tomato",
    image: tomato,
    // description: "Landing page для маркетингового агентства.",
    link: "https://tomato-cafe.vercel.app/",
  },
  {
    title: "Surfing School",
    image: surfing,
    // description: "Landing page для маркетингового агентства.",
    link: "https://surfing-school.vercel.app/",
  },
  {
    title: "Ерсұлтан Бекет",
    image: ers,
    // description: "Landing page для маркетингового агентства.",
    link: "https://ersultan-beket.vercel.app/",
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
