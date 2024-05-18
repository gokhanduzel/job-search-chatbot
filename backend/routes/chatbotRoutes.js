// backend/routes/chatbotRoutes.js
import express from 'express';
import { handleUserPrompt } from '../controllers/chatbotController.js';

const router = express.Router();

router.post('/chatbot', handleUserPrompt);

export default router;
