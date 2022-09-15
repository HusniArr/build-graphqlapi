// 4
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

const userResolvers = require('./user');
const postResolvers = require('./post');
const commentResolvers = require('./comment');

module.exports = [userResolvers,postResolvers,commentResolvers];