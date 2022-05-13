export {};
const ImageChoiceCard = require('../models/imageChoiceCardModel.ts');
const saveCorrectAnswer = require('../util/saveCorrectAnswer.ts');

type ImageChoiceCardInputType = {
  newImageChoiceCard: {
    topic: String;
    question: String;
    images: [String];
    correctAnswer: String;
  };
};

module.exports = {
  Query: {
    async getImageChoiceCards(_: any, { topic }: any) {
      if (topic) {
        const cards = await ImageChoiceCard.find({ topic });
        return cards;
      }
      try {
        const cards = await ImageChoiceCard.find();
        return cards;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createImageChoiceCard(
      _: any,
      { newImageChoiceCard }: ImageChoiceCardInputType
    ) {
      const { topic, question, images, correctAnswer } = newImageChoiceCard;
      const cardToSave = new ImageChoiceCard({
        topic,
        question,
        images,
        correctAnswer,
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
