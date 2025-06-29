import React from 'react';
import './Works.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 🔹 qo‘shildi

const worksData = [
  {
    title: 'По Созданию Cайтов',
    link: '/portfolio',
    isInternal: true,
  },
  {
    title: 'По Созданию Ботов',
    link: '/portfolio',
    isInternal: true,
  },
  {
    title: 'По Созданию UI/UX',
    link: '/portfolio',
    isInternal: true,
  },
  {
    title: 'По Мобилографию',
    link: 'https://www.instagram.com/faruxovich_media/',
    isInternal: false,
  },
  {
    title: 'СММ',
    link: 'https://www.instagram.com/di_group_agency/',
    isInternal: false,
  },
  {
    title: 'По Графическому дизайну',
    link: 'https://www.instagram.com/di_group_agency/',
    isInternal: false,
  },
];

const Works = () => (
  <section className="works-section" id="works">
    <div className="works-container">
      <h2 className="works-title">Наши работы</h2>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <motion.div
            className="work-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{work.title}</h3>
            <p>Профессионально выполненный проект в данной категории.</p>
            {work.link ? (
              work.isInternal ? (
                <Link to={work.link} className="work-button">Перейти</Link>
              ) : (
                <a href={work.link} className="work-button" target="_blank" rel="noreferrer">Перейти</a>
              )
            ) : (
              <button className="work-button disabled" disabled>В разработке</button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Works;
