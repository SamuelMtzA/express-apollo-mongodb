const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String
    getallTasks: [Task],
    getTask(id: ID): Task
  }

  type Mutation {
    createTask(title: String, description: String): Task,
    deleteTask(id: ID): Task
    updateTask(id: ID, title: String, description: String): Task
  }
`;

module.exports = { typeDefs };
