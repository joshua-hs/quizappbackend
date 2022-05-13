export {};
const CorrectAnswers = require('../models/correctAnswersModel.ts');

module.exports = async (topic, question, correctAnswer) => {
  const correctAnswersDocument = await CorrectAnswers.findOne({ topic });
  if (correctAnswersDocument) {
    correctAnswersDocument.questions.push({
      question,
      correctAnswer,
    });

    await correctAnswersDocument.save();

    return correctAnswersDocument;
  }
  const newCorrectAnswersDocument = new CorrectAnswers({
    topic,
    questions: [
      {
        question,
        correctAnswer,
      },
    ],
  });

  await newCorrectAnswersDocument.save();

  return newCorrectAnswersDocument;
};
