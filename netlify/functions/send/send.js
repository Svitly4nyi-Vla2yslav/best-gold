import nodemailer from 'nodemailer';
require('dotenv').config();
const cors = require('cors');
app.use(cors());


export const handler = async (event) => {
  // Перевірка, чи є тіло запиту
  if (!event.body) {
    console.error('Тіло запиту порожнє');
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Тіло запиту порожнє' }),
    };
  }

  let formData;
  try {
    // Парсимо дані з тіла запиту
    formData = JSON.parse(event.body);
  } catch (error) {
    console.error('Помилка парсингу JSON:', error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Некоректний JSON' }),
    };
  }

  const { name, email, message } = formData;

  // Перевірка, чи є всі необхідні дані
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Bad request: Missing data' }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Нова заявка від ${name}`,
    text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`,
  };

  try {
    // Відправка листа
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173', // Дозволяє запити з будь-якого домену
        'Access-Control-Allow-Headers': 'Content-Type', // Дозволяє заголовки, що використовуються у запитах
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
      },
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Помилка при відправці листа:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
