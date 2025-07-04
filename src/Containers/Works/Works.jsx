import React, { useEffect } from 'react';
import './Works.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="works-section" id="works">
      <div className="works-container">
        <h2 className="works-title" data-aos="fade-up">Наши работы</h2>
        <div className="works-grid">
          {worksData.map((work, index) => (
            <div
              className="work-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{work.title}</h3>
              <p>Профессионально выполненный проект в данной категории.</p>
              {work.link ? (
                work.isInternal ? (
                  <Link to={work.link} className="work-button">Перейти</Link>
                ) : (
                  <a
                    href={work.link}
                    className="work-button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Перейти
                  </a>
                )
              ) : (
                <button className="work-button disabled" disabled>В разработке</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
