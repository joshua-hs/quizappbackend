const TrueFalseCard = require('../models/trueFalseCardModel.ts');
const saveCorrectAnswer = require('../util/saveCorrectAnswer.ts');

type TrueFalseCardInputType = {
  newTrueFalseCard: {
    topic: String;
    question: String;
    correctAnswer: String;
  };
};

module.exports = {
  Query: {
    async getTrueFalseCards(_: any, { topic }: any) {
      if (topic) {
        const cards = await TrueFalseCard.find({ topic });
        return cards;
      }
      try {
        const cards = await TrueFalseCard.find();
        return cards;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createTrueFalseCard(
      _: any,
      { newTrueFalseCard }: TrueFalseCardInputType
    ) {
      const { topic, question, correctAnswer } = newTrueFalseCard;
      const cardToSave = new TrueFalseCard({
        topic,
        question
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
