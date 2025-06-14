import React from 'react';
import './Team.css';

import jahongir from '../../assets/ibo.JPG';
import ibrohim from '../../assets/ibo.JPG';
import ibroxim2 from '../../assets/ibo2.JPG';
import inobat from '../../assets/inobat.JPG';

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="team-title">Команда с большими задачами.</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src={ibrohim} alt="Ибрагим Махмудов" className="team-photo" />
          <h3>Ибрагим Махмудов</h3>
          <p className="position">CEO & Creative Director</p>
          <p className="desc">Design / Frontend Developer</p>
        </div>
        <div className="team-card">
          <img src={jahongir} alt="Джахонгир Рахматжонов" className="team-photo" />
          <h3>Джахонгир Рахматжонов</h3>
          <p className="position">CTO & Marketing</p>
          <p className="desc">Backend / Bot Developer</p>
        </div>
        <div className="team-card">
          <img src={ibroxim2} alt="Иброхим Мухиддинов" className="team-photo" />
          <h3>Иброхим Мухиддинов</h3>
          <p className="position">Мобилограф / Программист</p>
        </div>
        <div className="team-card">
          <img src={inobat} alt="Инобат Асоатуллаева" className="team-photo" />
          <h3>Инобат Асоатуллаева</h3>
          <p className="position">SMM-специалист / Мобилограф</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
