export {};
const CorrectAnswers = require('../models/correctAnswersModel.ts');

module.exports = async (topic: string, answers) => {
  const correctAnswersDocument = await CorrectAnswers.findOne({ topic });

  const { questions } = correctAnswersDocument;
  let userScore = 0;
  const returnAnswers = [];
  const statements: string[] = [];

  for (let i = 0; i < answers.length; i += 1) {
    const { question, userAnswer } = answers[i];
    console.log("question: ", question);
    const { correctAnswer, statement } = questions.find(
      (obj) => obj.question === question
    ).toObject();

    const returnAnswerObject = {
      question,
      userAnswer,
      correctAnswer,
      userWasCorrect: false,
    };
    if (userAnswer === correctAnswer) {
      userScore += 1;
      returnAnswerObject.userWasCorrect = true;
    }
    returnAnswers.push(returnAnswerObject);
    statements.push(statement);
  }
  console.log(returnAnswers);
  return {
    userScore,
    returnAnswers,
    statements,
  };
};
