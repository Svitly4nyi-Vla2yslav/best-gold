import nodemailer from 'nodemailer';

export const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

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
    return {
      statusCode: 200,
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
