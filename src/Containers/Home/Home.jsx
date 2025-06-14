import React from 'react';
import './Home.css';
import glob from '../../assets/glob.png';

const Home = () => {
  return (
    <section className="home-section" id="home">
        <div className='Home-Flex'>
            <div>
                <h1 className="home-title">DevSphere</h1>
                <p className='home-p'>DevSphere — IT и креатив. <br />Сайты, дизайн, брендинг. <br />От идеи до запуска.</p>
                <button className='home-btn'>Связаться</button>
            </div>
            <div className="home-img">
                <img src={glob} alt="" />
            </div> 
        </div>
    </section>
  );
};

export default Home;
