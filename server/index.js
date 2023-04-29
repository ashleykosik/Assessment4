const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAllSongs } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune/", getFortune);

// list all songs in database
app.get("/api/songs", getAllSongs)
//new feature to add song to database
//app.post(/api/, body)


app.listen(4000, () => console.log("Server running on 4000"));
