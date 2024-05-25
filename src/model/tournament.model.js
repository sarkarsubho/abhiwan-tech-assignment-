const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    tournament_name: {
      type: String,
    },
    creator_name: {
      type: String,
    },
    winner_name: {
      type: String,
    },
    rooms: [
      {
        room_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "rooms",
            required: true,
          },
        players: [
          {
            player_name: {
              type: String,
            },
            score: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Tournament = mongoose.model("tournaments", tournamentSchema);

module.exports = Tournament;
