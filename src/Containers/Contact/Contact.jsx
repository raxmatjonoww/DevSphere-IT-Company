import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { motion } from 'framer-motion';

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
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Свяжитесь с нами
        </motion.h2>
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Пожалуйста, заполните свои данные
        </motion.p>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          className="contact-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input type="text" name="user_name" placeholder="Имя" required />
          <input type="text" name="user_surname" placeholder="Фамилия" required />
          <input type="tel" name="user_phone" placeholder="Телефон номер" required />
          <input type="email" name="user_email" placeholder="Email (обязательно)" />
          
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </motion.form>

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
