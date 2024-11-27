// netlify/functions/send.js
const formidable = require('formidable');
const nodemailer = require('nodemailer');

export const handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    
    // Формуємо обробку форми
    form.parse(event.body, async (err, fields, files) => {
      if (err) {
        reject({ statusCode: 500, body: JSON.stringify({ error: 'Помилка при обробці файлів' }) });
        return;
      }

      const { name, email, message } = fields;

      // Створюємо транспорт для надсилання email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Опції для email
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `Повідомлення від ${name}`,
        text: message,
        attachments: files.files ? files.files.map(file => ({
          filename: file.originalFilename,
          path: file.filepath,
        })) : [],
      };

      // Надсилаємо email
      try {
        const info = await transporter.sendMail(mailOptions);
        resolve({ statusCode: 200, body: JSON.stringify({ success: true }) });
      } catch (error) {
        console.error(error);
        reject({ statusCode: 500, body: JSON.stringify({ error: 'Не вдалося надіслати листа' }) });
      }
    });
  });
};
