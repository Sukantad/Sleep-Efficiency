const express = require("express");
const SleepData = require("../Model/SleepModel");
const bcrypt = require("bcryptjs");
const router = express();

router.post("/sleep-data", async (req, res) => {
  const {
    nickname,
    password,
    struggleDuration,
    sleepTime,
    wakeTime,
    hoursSlept,
  } = req.body;

  try {
    const existingSleepData = await SleepData.findOne({ nickname });
    if (existingSleepData) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingSleepData.password
      );
      if (!passwordMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }
      await existingSleepData.updateOne({
        sleepTime,
        wakeTime,
        hoursSlept,
        struggleDuration,
      });
      const totalBedTime =
        (new Date(`1970-01-02T${wakeTime}:00`) -
          new Date(`1970-01-01T${sleepTime}:00`)) /
        (1000 * 60);
      const efficiency = Math.round(((hoursSlept * 60) / totalBedTime) * 100);
      return res.status(200).json({ efficiency });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSleepData = new SleepData({
      nickname,
      password: hashedPassword,
      sleepTime,
      wakeTime,
      hoursSlept,
      struggleDuration,
    });
    const totalBedTime =
      (new Date(`1970-01-02T${wakeTime}:00`) -
        new Date(`1970-01-01T${sleepTime}:00`)) /
      (1000 * 60);
    const efficiency = Math.round(((hoursSlept * 60) / totalBedTime) * 100);
    await newSleepData.save();

    res.status(200).json({ efficiency });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = { router };
