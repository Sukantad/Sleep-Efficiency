const mongoose = require("mongoose");

const sleepDataSchema = new mongoose.Schema({
  nickname: String,
  password: String,
  sleepTime: String,
  wakeTime: String,
  hoursSlept: Number,
  struggleDuration:String
});

const SleepData = mongoose.model("SleepData", sleepDataSchema);

module.exports = SleepData;
