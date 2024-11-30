import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions/send';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();

      if (data.success) {
        alert('Лист успішно надіслано!');
      } else {
        alert(`Помилка: ${data.message}`);
      }
    } catch (error: any) {
      console.error('Помилка:', error.message || error);
      alert('Не вдалося надіслати лист. Перевірте підключення або спробуйте пізніше.');
    }
  };

  return (
    <form onSubmit={handleSubmit} netlify>
      <input
        type="text"
        name="name"
        placeholder="Ваше ім'я"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Ваш Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Ваше повідомлення"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Надіслати</button>
    </form>
  );
};

export default ContactForm;
