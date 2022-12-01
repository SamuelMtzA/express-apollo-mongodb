
const Task = require("./models/Task");


//parent (an object that contains information about the resolver that ran just before)
// , args (body as restAPI), context, info
const resolvers = {
  Query:{
    hello: () => 'Hello world!',
    getallTasks: async() => {
      const tasks = await Task.find();
      return tasks;
    },
    getTask: async(_, {id}) => {
      const task = await Task.findById(id);
      return task;
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
