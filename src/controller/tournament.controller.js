const express = require("express");
const Tournament = require("../model/tournament.model");
const { default: mongoose } = require("mongoose");

const router = express.Router();

// Create Tournament
// tournament data
// {
//     "tournament_name": "first tournament",
//     "creator_name": "subhankar",
//     "winner_name": "",
//     "rooms": [
//         {
//             "room_id": "66517f91fb60bdff0b736fc9",
//             "players": [
//                 {
//                     "player_name": "first player",
//                     "score": 70
//                 },
//                 {
//                     "player_name": "first player",
//                     "score": 60
//                 },
//                 {
//                     "player_name": "first player",
//                     "score": 80
//                 },
//                 {
//                     "player_name": "first player",
//                     "score": 75
//                 }
//             ]
//         }
//     ]
// }

router.post("/create", async (req, res) => {
  try {
    const data = await Tournament.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// GET winner

router.get("/findAndAddWinner", async (req, res) => {
  try {
    const { tournamentId } = req.body;

    const tournament = await Tournament.findById(tournamentId);

    if (!tournament) {
      console.log("Tournament not found");
      return res.status(400).send("Tournament not found");
    }

    const result = await Tournament.aggregate([
      { $unwind: "$rooms" }, // Unwind the rooms array
      { $unwind: "$rooms.players" }, // Unwind the players array within each room
      { $sort: { "rooms.players.score": -1 } },
      {
        $group: {
          _id: "$_id",
          highestScore: { $max: "$rooms.players.score" }, // Get the highest score
          player: {
            $first: {
              $cond: [
                {
                  $eq: [
                    "$rooms.players.score",
                    { $max: "$rooms.players.score" },
                  ],
                },
                "$rooms.players",
                null,
              ],
            },
          },
          tournament_name: { $first: "$tournament_name" },
        },
      },
      // Sort players by score
      // { $limit: 1 }, // Take the first (highest) score
      {
        $project: {
          _id: 1,
          tournament_name: 1,
          player_name: "$player.player_name",
          score: "$highestScore",
        },
      },
    ]);

    await Promise.all(
      result.map((e) =>
        Tournament.findByIdAndUpdate(
          { _id: e._id },
          { winner_name: e.player_name }
        )
      )
    );

    let t = await Tournament.find({});
    return res.status(200).send({ result, updatedTournament: t });
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

module.exports = router;
