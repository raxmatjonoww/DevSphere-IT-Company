import React from 'react';
import './Contact.css'; // Agar uslub fayli bo'lsa

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-header">
        <h2>Контакты</h2>
      </section>

      <section className="contact-form">
        <h3>Свяжитесь с нами</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Ваш email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Отправить сообщение</button>
        </form>
      </section>

      <section className="contact-info">
        <h3>Контактная информация</h3>
        <p>Адрес: г. Ташкент, ул. ...</p>
        <p>Телефон: +998 ...</p>
        <p>Email: info@devsphere.uz</p>
        {/* Ijtimoiy tarmoqlar havolalari */}
      </section>
    </div>
  );
}

export default Contact;