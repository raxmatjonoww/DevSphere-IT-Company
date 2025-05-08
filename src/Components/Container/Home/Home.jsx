import React from 'react';
import './Home.css'; // Agar uslub fayli bo'lsa

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в DevSphere!</h1>
          <p>Ваш надежный партнер в мире информационных технологий.</p>
          <button className="call-to-action">Узнать больше</button>
        </div>
      </section>

      {/* Bosh sahifaning boshqa qismlari (masalan, kompaniya haqida qisqacha ma'lumot, afzalliklar va hokazo) shu yerda bo'lishi mumkin */}
    </div>
  );
}

export default Home;