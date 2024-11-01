// routes/announcementRoutes.js
import express from 'express';
import { createQuiz, getQuiz, getAllQuizes, updateQuiz, deleteQuiz }  from '../controller/quizController.js';
const router = express.Router();

router.post('/', createQuiz);
router.get('/:id', getQuiz);
router.get('/', getAllQuizes);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

export default router;
