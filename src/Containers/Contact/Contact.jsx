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
      'devsphere-it-company2025',
      'devsphere_company2025',
      form.current,
      { publicKey: '-YKQFUruqfb3HN-37' }
    )
    .then(() => {
      alert('Сообщение успешно отправлено!');
      form.current.reset();

      // 🔁 Sahifani root ('/') ga qaytadan yuklash
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
        <p className="contact-subtitle">Заполните форму, чтобы мы могли с вами связаться</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Ваше имя" required />
          <input type="email" name="user_email" placeholder="Ваш Email" required />
          <textarea name="message" placeholder="Ваше сообщение" rows="5" required></textarea>

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
