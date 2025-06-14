import React from 'react';
import './Works.css';

// import kiaImg from '../../assets/kia.png';
// import chillProImg from '../../assets/chillpro.png';
// import fastenImg from '../../assets/fasten.png';

const worksData = [
  {
    // image: kiaImg,
    title: 'По Созданию Cайтов',
    // description: 'Корпоративный сайт для автомобильной компании.',
    link: 'https://kia.uz',
  },
  {
    // image: chillProImg,
    title: 'По Созданию Telegram-ботов',
    // description: 'Платформа по ремонту и обслуживанию бытовой техники.',
    link: '#',
  },
  {
    // image: chillProImg,
    title: 'По Созданию UI/UX',
    // description: 'Платформа по ремонту и обслуживанию бытовой техники.',
    link: '#',
  },
  {
    // image: chillProImg,
    title: 'По Мобилографию',
    // description: 'Платформа по ремонту и обслуживанию бытовой техники.',
    link: '#',
  },
  {
    // image: chillProImg,
    title: 'СММ',
    // description: 'Платформа по ремонту и обслуживанию бытовой техники.',
    link: '#',
  },
  {
    // image: fastenImg,
    title: 'По Графическому дизайну',
    // description: 'Сайт доставки еды и товаров на дом.',
    link: '#',
  }
];

const Works = () => {
  return (
    <section className="works-section" id="works">
      <div className="works-container">
        <h2 className="works-title">Наши работы</h2>
        <div className="works-grid">
          {worksData.map((work, index) => (
            <div className="work-card" key={index}>
              {/* <img src={work.image} alt={work.title} className="work-image" /> */}
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              {work.link && (
                <a href={work.link} className="work-button" target="_blank" rel="noreferrer">
                  Портфолио
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
