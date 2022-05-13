export {};
const mongoose = require('mongoose')

const trueFalseCardSchema = new mongoose.Schema({
  topic: String,
  question: String,
});

module.exports = mongoose.model('TrueFalseCard', trueFalseCardSchema);
