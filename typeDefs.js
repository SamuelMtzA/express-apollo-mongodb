const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }

  input InputTask {
    title: String
    description: String
  }

  type Query {
    hello: String
    getallTasks: [Task],
    getTask(id: ID): Task
  }

  type Mutation {
    createTask(task: InputTask!): Task,
    deleteTask(id: ID!): String
    updateTask(id: ID!, task: InputTask): Task
  }
`;

module.exports = { typeDefs };
