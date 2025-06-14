import React from 'react';
import './Home.css'; // Hamma harflar to‘g‘ri yozilgan bo‘lishi kerak
import glob from '../../assets/glob.png';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="Home-Flex">
        <div>
          <h1 className="home-title">DevSphere</h1>
          <p className="home-p">
            IT-компания под ключ: создаём сайты, дизайн, Telegram-ботов и продвигаем в соцсетях. Помогаем бизнесу расти быстро и умно — с автоматизацией, стилем и результатом
          </p>
          <a href="#contact"><button className="home-btn">Связаться</button></a>
        </div>
        <div className="home-img">
          <img src={glob} alt="Globe" />
        </div>
      </div>
    </section>
  );
};

export default Home;
