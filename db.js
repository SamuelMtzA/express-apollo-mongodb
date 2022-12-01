const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    await connect("mongodb+srv://m001-student:m001-mongodb-basics@sanbox.gapgrtm.mongodb.net/test")
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connectDB };
