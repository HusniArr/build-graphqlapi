const { gql } = require("apollo-server-express");

module.exports = gql`
    type Comment {
        id:Int!
        content:String!
        author:String!
        post:String!
        createdAt:String
    }
    type Mutation{
        createComment(content:String!,postId:Int!):CreateCommentResponse
    }
    type CreateCommentResponse{
        id:Int!
        content:String!
        createdAt:String!
    }
`