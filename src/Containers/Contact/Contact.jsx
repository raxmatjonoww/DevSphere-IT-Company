import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'devsphere-it-company2025',       // ← o‘z ID’ing bilan almashtir
        'devsphere_company2025',      // ← o‘z Template ID’ing bilan almashtir
        form.current,
        '-YKQFUruqfb3HN-37'        // ← publicKey (user_...) bilan almashtir
      )
      .then(
        () => {
          alert('Сообщение успешно отправлено!');
          form.current.reset();
        },
        (error) => {
          console.error('Ошибка отправки:', error.text);
          alert('Произошла ошибка при отправке.');
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <p className="contact-subtitle">Заполните форму, чтобы мы могли с вами связаться</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Ваше имя" required />
          <input type="email" name="user_email" placeholder="Ваш Email" required />
          <textarea name="message" placeholder="Ваше сообщение" rows="5" required></textarea>
          <button type="submit" className="contact-button">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
