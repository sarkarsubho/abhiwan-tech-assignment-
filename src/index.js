const express = require("express");
var cors = require("cors");
const connect = require("./config/db");
const app = express();
const roomsController = require("./controller/rooms.controller");
const tournamentController = require("./controller/tournament.controller");
app.use(express.json());
app.use(cors());

app.use("/tournament", tournamentController);
app.use("/room", roomsController);

app.use("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h3 style="color:green;font-size:26px;margin:20px auto;">Welcome tournament API</h3>`
    );
});

app.listen(process.env.PORT || 8080, async function () {
  try {
    await connect();
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (er) {
    console.log(er);
  }
});

module.exports = app;
