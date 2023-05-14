const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const url = process.env.MONGO_URI;

const ConnectionFn = async () => {
  await mongoose.connect(url);
  console.log("Db connected");
};

module.exports = ConnectionFn;
