const { gql } = require("apollo-server-core");

module.exports = gql`
    type User {
        id : Int!
        name: String!
        email:String!
        password:String!
        posts:[Post!]
    }

    extend type Mutation{
        register(input:RegisterInput!):RegisterResponse
        login(input:LoginInput!):LoginResponse
    }

    type RegisterResponse{
        id: Int!
        name:String!
        email:String!
    }

    input RegisterInput{
        id: Int!
        name:String!
        email:String!
    }

    input LoginInput{
        id: Int!
        name:String!
        email:String!
    }

    type LoginResponse{
        id: Int!
        name:String!
        email:String!
        token:String!   
    }
`