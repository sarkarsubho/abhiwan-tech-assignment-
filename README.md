### techStack used
  - Express
  - MongoDB
  - Node.js


#### Default route

```http
  GET /
 
```

```http
  Response: "<h3 style="color:green;font-size:26px;margin:20px auto;">Welcome tournament API</h3>"

```

#### Create Room

```http
  POST /room/create
```

```http
 success Response: { data  : {new  room object}}
 error Response: { message: "error message" }

```

#### Create Tournament

```http
  POST /tournament/create
```

```http
 success Response: { data  : {new  tournament object}}
 error Response: { message: "error message" }

```

#### GET and update winner

```http
  POST /tournament/findAndAddWinner
```

```http
 success Response: { result:[ 
        {
            "_id": tournamentId
            "tournament_name": "second tournament",
            "player_name": winner_name
            "score": best score in that tournament
        } 
    ], updatedTournament: [array of updated tournament details] }
 error Response: { message: "error message" }

```

```javascript
final result for updating winner
{
    "result": [
        {
            "_id": "66518284fb60bdff0b736fd2",
            "tournament_name": "second tournament",
            "player_name": "first player",
            "score": 60
        },
        {
            "_id": "665181bffb60bdff0b736fcb",
            "tournament_name": "first tournament",
            "player_name": "top player",
            "score": 80
        }
    ],
    "updatedTournament": [
        {
            "_id": "665181bffb60bdff0b736fcb",
            "tournament_name": "first tournament",
            "creator_name": "subhankar",
            "winner_name": "top player",
            "rooms": [
                {
                    "room_id": "66517f91fb60bdff0b736fc9",
                    "players": [
                        {
                            "player_name": "first player",
                            "score": 70,
                            "_id": "665181bffb60bdff0b736fcd"
                        },
                        {
                            "player_name": "first player",
                            "score": 60,
                            "_id": "665181bffb60bdff0b736fce"
                        },
                        {
                            "player_name": "top player",
                            "score": 80,
                            "_id": "665181bffb60bdff0b736fcf"
                        },
                        {
                            "player_name": "first player",
                            "score": 75,
                            "_id": "665181bffb60bdff0b736fd0"
                        }
                    ],
                    "_id": "665181bffb60bdff0b736fcc"
                }
            ],
            "createdAt": "2024-05-25T06:14:23.823Z",
            "updatedAt": "2024-05-25T08:08:48.507Z"
        },
        {
            "_id": "66518284fb60bdff0b736fd2",
            "tournament_name": "second tournament",
            "creator_name": "subhankar 2",
            "winner_name": "first player",
            "rooms": [
                {
                    "room_id": "66517f91fb60bdff0b736fc9",
                    "players": [
                        {
                            "player_name": "first player",
                            "score": 35,
                            "_id": "66518284fb60bdff0b736fd4"
                        },
                        {
                            "player_name": "first player",
                            "score": 32,
                            "_id": "66518284fb60bdff0b736fd5"
                        },
                        {
                            "player_name": "first player",
                            "score": 60,
                            "_id": "66518284fb60bdff0b736fd6"
                        },
                        {
                            "player_name": "first player",
                            "score": 45,
                            "_id": "66518284fb60bdff0b736fd7"
                        }
                    ],
                    "_id": "66518284fb60bdff0b736fd3"
                }
            ],
            "createdAt": "2024-05-25T06:17:40.903Z",
            "updatedAt": "2024-05-25T08:08:48.506Z"
        }
    ]
}

```