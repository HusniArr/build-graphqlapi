const { gql } = require("apollo-server-core");

module.exports = gql`
    type Comment {
        id:Int!
        content:String!
        author:String!
        post:String!
        createdAt:String
    }
    extend type Mutation{
        createComment(content:String!,postId:Int!):CreateCommentResponse
    }
    type CreateCommentResponse{
        id:Int!
        content:String!
        createdAt:String!
    }
`