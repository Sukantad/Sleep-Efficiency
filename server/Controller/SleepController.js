const express = require("express");
const SleepData = require("../Model/SleepModel");
const bcrypt = require("bcryptjs");
const router = express();

// ----------- First here I store nick name with their data -------------

router.post("/sleep-data", async (req, res) => {
  const { nickname, password, sleepTime, wakeTime, hoursSlept } = req.body;

  try {
    const existingSleepData = await SleepData.findOne({ nickname });
    if (existingSleepData) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSleepData = new SleepData({
      nickname,
      password: hashedPassword,
      sleepTime,
      wakeTime,
      hoursSlept,
    });
    await newSleepData.save();
    res.status(200).json({ message: "Signup successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// --------------- If user is exists then calculate their sleep efficiency -----------------

router.get("/sleep-efficiency/:nickname", async (req, res) => {
  const { nickname } = req.params;
  const { password } = req.body;
  try {
    const sleepData = await SleepData.findOne({ nickname });
    if (!sleepData) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, sleepData.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { sleepTime, wakeTime, hoursSlept } = sleepData;
    const totalBedTime =
      (new Date(`1970-01-02T${wakeTime}:00`) -
        new Date(`1970-01-01T${sleepTime}:00`)) /
      (1000 * 60);

    const efficiency = Math.round(((hoursSlept * 60) / totalBedTime) * 100);
    res.status(200).json({ efficiency });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = { router };
