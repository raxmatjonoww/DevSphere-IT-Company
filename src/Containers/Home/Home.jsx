import React from 'react';
import './Home.css';
import glob from '../../assets/glob.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="Home-Flex">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="home-title">DevSphere</h1>
          <p className="home-p">
            IT-компания под ключ: создаём сайты, дизайн, Telegram-ботов и продвигаем в соцсетях. Помогаем бизнесу расти быстро и умно — с автоматизацией, стилем и результатом
          </p>
          <a href="#contact">
            <button className="home-btn">Связаться</button>
          </a>
        </motion.div>

        <motion.div
          className="home-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={glob} alt="Globe" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
