const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Room = mongoose.model("rooms", roomsSchema);

module.exports = Room;
