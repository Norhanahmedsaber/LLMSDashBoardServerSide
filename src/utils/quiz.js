import message from "../utils/generateMessage"
function validateQuiz({ name, courseName, courseID, questions } ){
    if (!name || !courseName || !courseID || !Array.isArray(questions) || questions.length === 0) {
        return message.generatMessage(400, "Invalid quiz data")
    }
    
};