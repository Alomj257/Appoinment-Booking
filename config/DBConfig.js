const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = Connection;
