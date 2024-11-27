import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailRoute from './routes/mail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/send', mailRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
