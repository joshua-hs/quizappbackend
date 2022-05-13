export {};
const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
  topic: String,
  score: Number,
  answers: [{
    question: String,
    userAnswer: String,
    correctAnswer: String,
    userWasCorrect: Boolean
  }],
  createdAt: String,
});

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
