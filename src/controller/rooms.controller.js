const express = require("express");
const Room = require("../model/rooms.model");


const router = express.Router();

// Crate Room

router.post("/create", async (req, res) => {
  try {
    const data = await Room.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});



module.exports = router;
