const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./schema.ts');
const resolvers = require('./resolvers/index.ts');

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then((res: { url: any }) => {
    console.log(`Server listening at ${res.url}`);
  });
