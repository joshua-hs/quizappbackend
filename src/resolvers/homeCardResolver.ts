const HomeCard = require('../models/homeCardModel.ts');

module.exports = {
  Query: {
    async getHomeCards() {
      try {
        const cards = await HomeCard.find();
        return cards;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createHomeCard(
      _: any,
      { newCard: { title, buttonColour, imageURL } }: any,
    ) {
      const cardToSave = new HomeCard({
        title,
        buttonColour,
        imageURL,
      });

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
