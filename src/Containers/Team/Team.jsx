import React from 'react';
import './Team.css';
import { motion } from 'framer-motion';

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
  return (
    <section className="team-section" id="team">
      <h2 className="team-title">Наша команда</h2>
      <p className="team-subtitle">Те, кто двигает проект вперёд</p>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <motion.a
            href={member.link}
            target="_blank"
            rel="noreferrer"
            className="team-card"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} className="team-photo" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="position">{member.role}</p>
              {member.desc && <p className="desc">{member.desc}</p>}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Team;
