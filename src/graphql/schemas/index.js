const { gql } = require("apollo-server-express");
const userType = require("./user");
const commentType = require("./comment");
const postType = require("./post");
// 3
const rootType = gql`
type Query {
  root: String
}

type Mutation{
  root:String
}
`;

module.exports = [rootType,userType,commentType,postType];