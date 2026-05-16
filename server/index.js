import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/db.js';
import contactRouter from './routes/contact.js';

dotenv.config({ path: '../.env' });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDatabase();

app.get('/', (req, res) => {
  res.json({ message: 'Vishal Portfolio API is running.' });
});

app.use('/api/contact', contactRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
