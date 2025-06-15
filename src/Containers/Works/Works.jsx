import React from 'react';
import './Works.css';
import { Link } from 'react-router-dom';

const worksData = [
  {
    title: 'По Созданию Cайтов',
    link: '/portfolio',
  },
  {
    title: 'По Созданию Ботов',
    link: '#',
  },
  {
    title: 'По Созданию UI/UX',
    link: '#',
  },
  {
    title: 'По Мобилографию',
    link: 'https://www.instagram.com/faruxovich_media/',
  },
  {
    title: 'СММ',
    link: 'https://www.instagram.com/di_group_agency/',
  },
  {
    title: 'По Графическому дизайну',
    link: '',
  },
];

const Works = () => (
  <section className="works-section" id="works">
    <div className="works-container">
      <h2 className="works-title">Наши работы</h2>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <div className="work-card" key={index}>
            <h3>{work.title}</h3>
            <p>Профессионально выполненный проект в данной категории.</p>
            <a href={work.link} className="work-button" target="_blank" rel="noreferrer">
              Перейти
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Works;
