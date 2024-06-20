const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/waahan";

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
