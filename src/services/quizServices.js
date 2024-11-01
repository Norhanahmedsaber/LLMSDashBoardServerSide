// src/services/quizService.js
import Quiz from '../models/quizModel.js';
import { generateMessage } from '../utils/generateMessage.js';

export const createQuiz = async ({ name, courseName, courseID, questions }) => {
    try {
         if (!name || !courseName || !courseID || !questions) {
            return generateMessage(400, "All fields are required");
        } 
        if (!/\d/.test(courseID)) {
            return generateMessage(400, "CourseID must contain at least one number");
        }
        if (!Array.isArray(questions) || questions.length === 0 || !questions.every(q => typeof q === 'string')) {
            return generateMessage(400, "Questions must be a non-empty array of strings");
        }

        // Renaming the instance to avoid conflict
        const quizInstance = new Quiz({ name, courseName, courseID, questions });
        const result = await quizInstance.save();
        
        return generateMessage(201, "Quiz created successfully", result);
    } catch (error) {
        return generateMessage(500, error.message);
    }
};


export const getQuiz = async (id) => {
    try {
        const result = await Quiz.findById(id);
        return result
            ? generateMessage(200, "Quiz found", result)
            : generateMessage(404, "Quiz not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const getAllQuizes = async () => {
    try {
        const result = await Quiz.find();
        return generateMessage(200, "quizes retrieved", result);
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const updateQuiz = async (id, { name, courseName, courseID, questions }) => {
    try {
        if (!name || !courseName || !courseID || !questions) {
            return generateMessage(400, "All fields are required");
        }
        if (!/\d/.test(courseID)) {
            return generateMessage(400, "CourseID must contain at least one number");
        }
        if (!Array.isArray(questions) || questions.length === 0 || !questions.every(q => typeof q === 'string')) {
            return generateMessage(400, "Questions must be a non-empty array of strings");
        }
        const updateData = { name, courseName, courseID, questions };
        const result = await Quiz.findByIdAndUpdate(id, updateData, { new: true });
        return result
            ? generateMessage(200, "Quiz updated successfully", result)
            : generateMessage(404, "Quiz not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};

export const deleteQuiz = async (id) => {
    try {
        const result = await Quiz.findByIdAndDelete(id);
        return result
            ? generateMessage(201, "Quiz deleted successfully")
            : generateMessage(404, "Quiz not found");
    } catch (error) {
        return generateMessage(500, error.message);
    }
};
