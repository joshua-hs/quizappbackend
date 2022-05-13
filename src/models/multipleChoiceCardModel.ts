export {};
const mongoose = require('mongoose');

const multipleChoiceCardSchema = new mongoose.Schema({
  topic: String,
  question: String,
  answers: [String],
});

module.exports = mongoose.model('MultipleChoiceCard', multipleChoiceCardSchema);
