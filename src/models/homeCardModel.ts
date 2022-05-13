export {};
const mongoose = require('mongoose');

const homeCardSchema = new mongoose.Schema({
  title: String,
  buttonColour: String,
  imageURL: String,
});

module.exports = mongoose.model('HomeCard', homeCardSchema);
