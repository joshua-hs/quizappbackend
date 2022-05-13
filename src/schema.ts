const { gql } = require('apollo-server');

module.exports = gql`
  type HomeCard {
    id: ID!
    title: String!
    buttonColour: String!
    imageURL: String!
  }
  type TrueFalseCard {
    id: ID!
    topic: String!
    question: String!
  }
  type MultipleChoiceCard {
    id: ID!
    topic: String!
    question: String!
    answers: [String!]!
  }
  type ImageChoiceCard {
    id: ID!
    topic: String!
    question: String!
    images: [String!]!
  }
  type Answers {
    question: String!
    userAnswer: String!
    correctAnswer: String!
    userWasCorrect: Boolean!
  }
  type QuizAttempt {
    id: ID!
    topic: String!
    score: Int!
    answers: [Answers!]!
    statements: [String!]!
    createdAt: String!
  }
  input CreateHomeCardInput {
    title: String!
    buttonColour: String!
    imageURL: String!
  }
  input CreateTrueFalseCardInput {
    topic: String!
    question: String!
    correctAnswer: String!
  }
  input CreateMultipleChoiceCardInput {
    topic: String!
    question: String!
    answers: [String!]!
    correctAnswer: String!
  }
  input CreateImageChoiceCardInput {
    topic: String!
    question: String!
    images: [String!]!
    correctAnswer: String!
  }
  input AnswersInput {
    question: String!
    userAnswer: String!
  }
  input CreateQuizAttemptInput {
    topic: String!
    answers: [AnswersInput!]!
  }
  type Query {
    getHomeCards: [HomeCard]!
    getTrueFalseCards(topic: String): [TrueFalseCard]!
    getMultipleChoiceCards(topic: String): [MultipleChoiceCard]!
    getImageChoiceCards(topic: String): [ImageChoiceCard]!
    getQuizAttempts: [QuizAttempt]!
  }
  type Mutation {
    createHomeCard(newHomeCard: CreateHomeCardInput): HomeCard!
    createTrueFalseCard(
      newTrueFalseCard: CreateTrueFalseCardInput
    ): TrueFalseCard!
    createMultipleChoiceCard(
      newMultipleChoiceCard: CreateMultipleChoiceCardInput
    ): MultipleChoiceCard!
    createImageChoiceCard(
      newImageChoiceCard: CreateImageChoiceCardInput
    ): ImageChoiceCard!
    createQuizAttempt(newQuizAttempt: CreateQuizAttemptInput): QuizAttempt!
  }
`;
