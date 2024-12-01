import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field" // Захист від спаму
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Ваше ім'я: <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Ваш Email: <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Ваше повідомлення: <textarea name="message" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Надіслати</button>
      </p>
    </form>
  );
};

export default ContactForm;
