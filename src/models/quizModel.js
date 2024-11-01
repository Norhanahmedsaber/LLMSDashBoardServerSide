import mongoose from 'mongoose';

const { Schema } = mongoose;

const quizSchema = new Schema({
    name: { type: String, required: [true, "Quiz name is required"] },
    courseName: { type: String, required: [true, "Course name is required"] },
    courseID: { type: String, required: [true, "Course ID is required"] },
    questions: { 
        type: [String], 
        required: [true, "Questions are required"],
        validate: [arr => arr.length > 0, "Quiz must have at least one question"] 
    }
});

export default mongoose.model('Quiz', quizSchema);
