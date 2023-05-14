const mongoose = require("mongoose");

const sleepDataSchema = new mongoose.Schema({
  nickname: String,
  password: String,
  sleepTime: String,
  wakeTime: String,
  hoursSlept: Number,
});

const SleepData = mongoose.model("SleepData", sleepDataSchema);

module.exports = SleepData;
