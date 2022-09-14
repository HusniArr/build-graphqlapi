const { gql } = require("apollo-server-core");
const userType = require("./user");
const commentType = require("./comment");
const postType = require("./post");
// 3
const typeDefs = gql`
type Query {
  hello:String
  root: String
}

type Mutation{
  root:String
}
`;

module.exports = [typeDefs,userType,commentType,postType];