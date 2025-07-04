import React, { useEffect } from 'react';
import './Home.css';
import glob from '../../assets/glob.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="Home-Flex">
        <div className="home-text" data-aos="fade-right">
          <h1 className="home-title">DevSphere</h1>
          <p className="home-p">
            IT-компания под ключ: создаём сайты, дизайн, Telegram-ботов и продвигаем в соцсетях. Помогаем бизнесу расти быстро и умно — с автоматизацией, стилем и результатом
          </p>
          <a href="#contact">
            <button className="home-btn">Связаться</button>
          </a>
        </div>

        <div className="home-img" data-aos="zoom-in">
          <img src={glob} alt="Globe" />
        </div>
      </div>
    </section>
  );
};

export default Home;
