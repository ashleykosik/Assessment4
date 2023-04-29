const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAllSongs, deleteSong, createSong } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune/", getFortune);

// list all songs in database
app.get("/api/songs", getAllSongs)
//new feature to add song to database
app.post("/api/songs", createSong)

app.delete("/api/songs/:songId", deleteSong)


app.listen(4000, () => console.log("Server running on 4000"));
