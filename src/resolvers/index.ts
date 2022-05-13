const homeCardResolver = require('./homeCardResolver.ts');
const trueFalseCardResolver = require('./trueFalseCardResolver.ts');
const multipleChoiceCardResolver = require('./multipleChoiceCardResolver.ts');
const imageChoiceCardResolver = require('./imageChoiceCardResolver.ts');
const QuizAttemptResolver = require('./quizAttemptResolver.ts')

module.exports = {
  Query: {
    ...homeCardResolver.Query,
    ...imageChoiceCardResolver.Query,
    ...multipleChoiceCardResolver.Query,
    ...trueFalseCardResolver.Query,
    ...QuizAttemptResolver.Query,
  },
  Mutation: {
    ...homeCardResolver.Mutation,
    ...imageChoiceCardResolver.Mutation,
    ...multipleChoiceCardResolver.Mutation,
    ...trueFalseCardResolver.Mutation,
    ...QuizAttemptResolver.Mutation,
  },
};
