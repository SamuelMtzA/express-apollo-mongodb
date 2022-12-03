const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');
const { connectDB } = require('./db');

const app = express();
connectDB();

app.get('/', (req, res) =>{
  res.send('Welcome to my Apollo Server');
})

module.exports = app;

const start = async() => {

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use('*', (req, res) => {
    res.status(404).send('Page not found');
  })

  app.listen(process.env.PORT || 3000, () =>{
    console.log('Server started on port ' + process.env.PORT);
  })
}


start();