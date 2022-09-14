const express = require('express');
const { ApolloServer,gql } = require('apollo-server-express');
const  http = require('http');
const cors = require('cors');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const startServer = async (typeDefs,resolvers) => {

    // 
    const app = express()
    app.use(cors());
    const httpServer = http.createServer(app);
  
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    })
  
    // 6
    await apolloServer.start()
  
    // 7
    apolloServer.applyMiddleware({
        app,
        path: '/api'
    })
  
    // 8
    httpServer.listen({ port: process.env.PORT || 4000 }, () =>
      console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
    )
  }
  
  startServer(typeDefs,resolvers);

