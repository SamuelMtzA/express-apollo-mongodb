const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_DB)
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectDB };
