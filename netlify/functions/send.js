import nodemailer from 'nodemailer';
require('dotenv').config();

export const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log('Received data:', event.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Нова заявка від ${name}`,
    text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`,
  };
  console.log('Received data:', event.body);

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ success: true, message: 'Лист успішно надіслано' }),
    };
    
  } catch (error) {
    console.error('Помилка при надсиланні:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Помилка при надсиланні' }),
    };
  }
  
};
