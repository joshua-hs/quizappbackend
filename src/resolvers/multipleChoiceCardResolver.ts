export {};
const MultipleChoiceCard = require('../models/multipleChoiceCardModel.ts');
const saveCorrectAnswer = require('../util/saveCorrectAnswer.ts');

type MultipleChoiceCardInputType = {
  newMultipleChoiceCard: {
    topic: String;
    question: String;
    answers: [String];
    correctAnswer: String;
  };
};

module.exports = {
  Query: {
    async getMultipleChoiceCards(_: any, { topic }: any) {
      if (topic) {
        const cards = await MultipleChoiceCard.find({ topic });
        return cards;
      }
      try {
        const cards = await MultipleChoiceCard.find();
        return cards;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createMultipleChoiceCard(
      _: any,
      { newMultipleChoiceCard }: MultipleChoiceCardInputType
    ) {
      const { topic, question, answers, correctAnswer } = newMultipleChoiceCard
      const cardToSave = new MultipleChoiceCard({
        topic,
        question,
        answers,
      });

      saveCorrectAnswer(topic, question, correctAnswer);

      const res = await cardToSave.save();

      return {
        // eslint-disable-next-line no-underscore-dangle
        ...res._doc,
        // eslint-disable-next-line no-underscore-dangle
        id: res.id,
      };
    },
  },
};
