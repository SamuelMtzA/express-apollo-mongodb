
const Task = require("./models/Task");


//parent, args (body as restAPI), context, info
const resolvers = {
  Query:{
    hello: () => 'Hello world!',
    getallTasks: async() => {
      const tasks = await Task.find();
      return tasks;
    }
  },
  Mutation: {
    createTask: async(_, args) => {
      const {title, description} = args;
      const newTask = new Task({title, description});
      await newTask.save();
      console.log(newTask);
      return newTask;
    }
  }
  
}

module.exports = { resolvers }
