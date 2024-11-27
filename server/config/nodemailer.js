import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

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
  subject: 'Форма заявки',
  text: 'Ваш клієнт заповнив форму та надіслав заявку!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Помилка під час надсилання:', error);
  } else {
    console.log('Лист успішно надіслано:', info.response);
  }
});
