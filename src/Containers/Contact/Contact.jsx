import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <p className="contact-subtitle">Заполните форму, чтобы мы могли с вами связаться</p>

        <form className="contact-form">
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш Email" required />
          <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
          <button type="submit" className="contact-button">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
