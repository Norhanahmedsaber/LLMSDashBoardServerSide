// src/controllers/announcementController.js
import * as quizService from '../services/quizServices.js';

export const createQuiz = async (req, res) => {
    const result = await quizService.createQuiz(req.body);
    res.status(result.statusCode).json(result);
};

export const getQuiz = async (req, res) => {
    const result = await quizService.getQuiz(req.params.id);
    res.status(result.statusCode).json(result);
};

export const getAllQuizes = async (req, res) => {
    const result = await quizService.getAllQuizes();
    res.status(result.statusCode).json(result);
};

export const updateQuiz = async (req, res) => {
    const result = await quizService.updateQuiz(req.params.id, req.body);
    res.status(result.statusCode).json(result);
};

export const deleteQuiz = async (req, res) => {
    const result = await quizService.deleteQuiz(req.params.id);
    res.status(result.statusCode).json(result);
};
