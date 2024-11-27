import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

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
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Лист успішно надіслано' });
  } catch (error) {
    console.error('Помилка при надсиланні:', error);
    res.status(500).json({ success: false, message: 'Помилка при надсиланні' });
  }
});

export default router;
