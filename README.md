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
