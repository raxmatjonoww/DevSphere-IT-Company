import React, { useEffect } from 'react';
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ibrohim from '../../assets/ibo.JPG';
import ibroxim2 from '../../assets/ibo2.JPG';
import inobat from '../../assets/inobat.JPG';
import jahongir from '../../assets/jahongir.JPG';

const teamMembers = [
  {
    name: 'Джахонгир Рахматжонов',
    role: 'Founder & CEO',
    desc: 'Full-Stack Developer',
    image: jahongir,
    link: 'https://www.instagram.com/raxmatjonoww/',
  },
  {
    name: 'Ибрагим Махмудов',
    role: 'Web Designer',
    image: ibrohim,
    link: 'https://www.instagram.com/kep.xn/',
  },
  {
    name: 'Ибрагим Мухиддинов',
    role: 'Frontend Developer / Мобилограф',
    desc: '',
    image: ibroxim2,
    link: 'https://www.instagram.com/faruxovich_media/',
  },
  {
    name: 'Инобат Шарапова',
    role: 'SMM-Специалист / Мобилограф',
    desc: '',
    image: inobat,
    link: 'https://www.instagram.com/inobat_hikmatullayevna/',
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="team-section" id="team">
      <h2 className="team-title" data-aos="fade-up">Наша команда</h2>
      <p className="team-subtitle" data-aos="fade-up" data-aos-delay="100">Те, кто двигает проект вперёд</p>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <a
            href={member.link}
            target="_blank"
            rel="noreferrer"
            className="team-card"
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} className="team-photo" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="position">{member.role}</p>
              {member.desc && <p className="desc">{member.desc}</p>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Team;
