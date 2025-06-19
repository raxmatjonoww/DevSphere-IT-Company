import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'devsphere-itcompany2025',
      'devsphereitcompany_20025',
      form.current,
      { publicKey: 'oEsERaOkMVQB4EyxW' }
    )
    .then(() => {
      alert('Данные успешно отправлены!');
      form.current.reset();
      window.location = '/';
    }, (error) => {
      console.error('Ошибка отправки:', error.text);
      alert('Произошла ошибка при отправке.');
      setLoading(false);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <p className="contact-subtitle">Пожалуйста, заполните свои данные</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Имя" required />
          <input type="text" name="user_surname" placeholder="Фамилия" required />
          <input type="tel" name="user_phone" placeholder="Телефон номер" required />
          <input type="email" name="user_email" placeholder="Email (обязательно)" />
          
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>

        {loading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
