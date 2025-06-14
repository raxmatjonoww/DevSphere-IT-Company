import React from 'react';
import './Team.css';

import ibrohim from '../../assets/ibo.JPG';
import ibroxim2 from '../../assets/ibo2.JPG';
import inobat from '../../assets/inobat.JPG';
import joka from '../../assets/joka.JPG';

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="team-title">Команда с большими задачами.</h2>
      <div className="team-grid">
        <a className='a-hreff' href="https://www.instagram.com/raxmatjonoww/"><div className="team-card">
          <img src={joka} alt="Джахонгир Рахматжонов" className="team-photo" />
          <h3>Джахонгир Рахматжонов</h3>
          <p className="position">CTO & Marketing</p>
          <p className="desc">Full-Stack Developer</p>
        </div></a>
        <a className='a-hreff' href="https://www.instagram.com/kep.xn/"><div className="team-card">
          <img src={ibrohim} alt="Ибрагим Махмудов" className="team-photo" />
          <h3>Ибрагим Махмудов</h3>
          <p className="position">CEO & Creative Director</p>
          <p className="desc">Web Designer</p>
        </div></a>
        <a className='a-hreff' href="https://www.instagram.com/faruxovich_media/"><div className="team-card">
          <img src={ibroxim2} alt="Иброхим Мухиддинов" className="team-photo" />
          <h3>Иброхим Мухиддинов</h3>
          <p className="position">Мобилограф / Frontend Developer</p>
        </div></a>
        <a className='a-hreff' href="https://www.instagram.com/inobat_hikmatullayevna/"><div className="team-card">
          <img src={inobat} alt="Инобат Асоатуллаева" className="team-photo" />
          <h3>Инобат Асоатуллаева</h3>
          <p className="position">SMM-Специалист / Мобилограф</p>
        </div></a>
      </div>
    </section>
  );
};

export default Team;
