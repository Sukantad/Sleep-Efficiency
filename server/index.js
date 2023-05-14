const express = require("express");
const cors = require("cors");
const ConnectionFn = require("./config/db");
const { router } = require("./Controller/SleepController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  ConnectionFn();
  console.log(`Server running on port ${port}`);
});
