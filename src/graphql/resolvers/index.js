// 4
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

const userResolvers = require('./user');
const postResolvers = require('./post');
const commentResolvers = require('./comment');

module.exports = [resolvers,userResolvers,postResolvers,commentResolvers];