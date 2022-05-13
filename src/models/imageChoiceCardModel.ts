export {};
const mongoose = require('mongoose');

const imageChoiceCardSchema = new mongoose.Schema({
  topic: String,
  question: String,
  images: [String],
});

module.exports = mongoose.model('ImageChoiceCard', imageChoiceCardSchema);
