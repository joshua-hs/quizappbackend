export {};
const mongoose = require('mongoose');

const correctAnswersSchema = new mongoose.Schema({
  topic: String!,
  questions: [{
    question: String!,
    correctAnswer: String!
  }]
});

module.exports = mongoose.model('CorrectAnswers', correctAnswersSchema);
