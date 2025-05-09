import React from 'react';
import './WhyChooseUsSection.css';

const reasons = [
  {
    title: 'Опытная команда',
    description: 'Наша команда состоит из высококвалифицированных и опытных IT-специалистов.',
  },
  {
    title: 'Инновационный подход',
    description: 'Мы всегда применяем новейшие технологии и решения.',
  },
  {
    title: 'Ориентация на клиента',
    description: 'Мы подходим к каждому проекту индивидуально и ставим потребности наших клиентов на первое место.',
  },
  {
    title: 'Качественный сервис',
    description: 'Мы гарантируем высокое качество предоставляемых услуг и своевременное выполнение проектов.',
  },
];

function WhyChooseUsSection() {
  return (
    <section className="why-choose-us-section">
      <div className="why-container">
        <h2 className="why-title">Почему <span>DevSphere IT Company</span>?</h2>
        <ul className="reasons-list">
          {reasons.map((reason, index) => (
            <li key={index} className="reason-item">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
