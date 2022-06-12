const QuizAttempt = require('../models/quizAttemptModel.ts');
const validateAnswers = require('../util/validateAnswers.ts');

module.exports = {
  Query: {
    async getQuizAttempts() {
      try {
        const attempts = await QuizAttempt.find();
        return attempts;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createQuizAttempt(_: any, { newQuizAttempt }: any) {
      const { topic, answers } = newQuizAttempt;
      // validate answers and calculate score before saving
      const { userScore, returnAnswers, statements } = await validateAnswers(
        topic,
        answers
      );

      const attemptToSave = new QuizAttempt({
        topic,
        score: userScore,
        answers: returnAnswers,
        createdAt: new Date().toISOString(),
      });

      const res = await attemptToSave.save();

      return {
        // eslint-disable-next-line no-underscore-dangle
        ...res._doc,
        // eslint-disable-next-line no-underscore-dangle
        id: res.id,
        statements,
      };
    },
  },
};
