
let db = [
    {
        title: "Running Up That Hill",
        id: 1 
    },
    {
        title: "Live A Little",
        id: 2
    },
    {
        title: "The Sound of Letting Go",
        id: 3
    }
];

let id = db.length

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A golden egg of opportunity falls into your lap this month.", "A hunch is creativity trying to tell you something.", "A new perspective will come with the new year.", "All the effort you are making will ultimately pay off.", "Change is happening in your life, so go with the flow!",];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune);
    
    },

    getAllSongs : (req, res) => {
        res.status(200).send(db)
    },

    deleteSong : (req, res) => {
        const {songId} = req.params  
        for (let i = 0; i < db.length; i++) {
         if (db[i].id === +songId) {
             db.splice(i, 1)
         }
        }
        res.status(200).send(db)
     },

    createSong : (req, res) => {
        id++
       let newSong = {...req.body, id: id}
       db.push(newSong)
       res.status(200).send(db)
    }, 


    // updateSong : (req, res) => {
    //     const {song_title} = req.params
    //     const {SongId} = req.body

    //     for(let i = 0; i < db.length; i++) {
    //         if(db[i].id === +SongId) {
    //             db[i].title = song_title
    //     }
    // }
    // },



 
}