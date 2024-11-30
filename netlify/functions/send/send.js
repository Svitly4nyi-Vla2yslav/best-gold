const nodemailer = require('nodemailer');
const cors = require('cors');

// Якщо ти хочеш використовувати cors в Netlify, тобі не потрібно створювати app, достатньо правильно налаштувати заголовки:
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST'],
});

// Обробка функції Netlify
export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  try {
    const formData = JSON.parse(event.body);
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Error sending email:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
