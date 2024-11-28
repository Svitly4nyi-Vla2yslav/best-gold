import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    files: [] as File[], // Додаємо поле для файлів
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (
      e.target.name === 'files' &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      // Перевірка типу елемента input
      const files = Array.from(e.target.files); // Перетворюємо FileList в масив
      setFormData(prev => ({
        ...prev,
        files: files,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(); // Використовуємо FormData для відправки файлів
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    // Додаємо файли до форми
    formData.files.forEach(file => {
      form.append('files', file);
    });

    try {
      const response = await fetch('http://localhost:8888/.netlify/functions/send',
        {
          method: 'POST',
          body: form, // Відправляємо форму з файлами
        }
      );

      const data = await response.json();
      if (data.success) {
        alert('Лист успішно надіслано!');
      } else {
        alert('Сталася помилка. Спробуйте знову.');
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

      {/* Поле для завантаження файлів */}
      <input type="file" name="files" multiple onChange={handleChange} />

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default ContactForm;
