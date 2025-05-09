import React from 'react';
import './AboutSection.css'; // Если вы используете CSS Modules
// import aboutUsImage from '../../assets/about-us.jpg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="image-container">
          {/* <img src={aboutUsImage} alt="О нас" /> */}
        </div>
        <div className="text-container">
          <h2>О DevSphere IT</h2>
          <p>DevSphere IT - это команда опытных и увлеченных профессионалов в области информационных технологий. Мы стремимся создавать инновационные и эффективные решения, которые помогают нашим клиентам достигать своих бизнес-целей. Наш подход основан на глубоком понимании потребностей клиента, использовании передовых технологий и стремлении к высочайшему качеству.</p>
          <p>Мы специализируемся на разработке веб-сайтов, мобильных приложений, программного обеспечения, а также предлагаем услуги в области цифрового маркетинга и IT-консалтинга. Наша миссия - быть надежным партнером в вашем цифровом развитии.</p>
          <button className="learn-more-button">Узнать больше о компании</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;