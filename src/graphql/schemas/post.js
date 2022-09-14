const { gql } = require("apollo-server-core");

module.exports = gql`
    type Post{
        id:Int!
        title:String!
        content:Srring!
        author:User!
        comments:[Comment!]
        createdAt:String
    }
    extend type Query{
        getAllPosts:[Post!]
        getsinglePost(pastId:Int!):Post
    }
    extend type Mutation{
        createPost(title:String!,content:String!):CreatePostResponse
    }
    type CreatePostResponse{
        id:Int!
        title:String!
        content:String!
        createdAt:String!
    }
`