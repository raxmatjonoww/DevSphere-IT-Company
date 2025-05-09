import React, { useRef } from 'react'; // Импортируйте useRef
import './Contact.css';
import emailjs from '@emailjs/browser'; // Импортируйте EmailJS

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Ваше сообщение успешно отправлено!');
        form.current.reset(); // Очистить форму после отправки
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Произошла ошибка при отправке сообщения, попробуйте еще раз.');
      });
  };

  return (
    <div className="contact-page">
      {/* ... ваш существующий код ... */}
      <div className="contact-form">
        <h2>Оставьте сообщение</h2>
        <form ref={form} onSubmit={sendEmail}> {/* Добавьте ref и onSubmit */}
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="user_name" required /> {/* Измените name */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="user_email" required /> {/* Измените name */}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input type="tel" id="phone" name="phone" /> {/* Сохраните name */}
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" name="message" rows="5" required></textarea> {/* Сохраните name */}
          </div>
          <button type="submit" className="submit-button">Отправить сообщение</button>
        </form>
      </div>
      {/* ... ваш существующий код ... */}
    </div>
  );
}

export default Contact;