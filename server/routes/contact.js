import express from 'express';
import { saveMessage } from '../models/Message.js';
import sendNotificationEmail from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const savedMessage = await saveMessage({ name, email, message });
    await sendNotificationEmail({ name, email, message });

    res.status(201).json({ message: 'Message saved successfully.', data: savedMessage });
  } catch (error) {
    next(error);
  }
});

export default router;
