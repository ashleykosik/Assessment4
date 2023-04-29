const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getAllSongsBtn = document.getElementById("allSongs")
const songsContainer = document.querySelector('#songsContainer')
const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
        const data = res.data;
        alert(data);
    })
}

const songCallback = ({ data: songs }) => displaySongs(songs)

const getAllSongs = () => {
    axios.get("http://localhost:4000/api/songs/")
        .then(songCallback)
        .catch(err => console.log(err))
}

const deleteSong = (id) => {
    axios.delete(`http://localhost:4000/api/songs/${id}`)
        .then(songCallback)
        .catch(err => console.log(err))
}

const createSong = body => {
    axios.post("http://localhost:4000/api/songs/", body)
        .then(songCallback)
        .catch(err => console.log(err))
}

function createSongHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#formInput')
    let rating = 5

    let songObj = {
        title: title.value,
        rating: rating
    }

    createSong(songObj)

    title.value = ''  
      
}

function createSongItem(song) {
    const songItem = document.createElement('div')
    songItem.classList.add('songItems')
    songItem.innerHTML = `
    <p class="songId">${song.id}.</p>
    <p class="songTitle">${song.title}</p>
    <div class="btns-container">
       <button class="delete" onclick="deleteSong(${song.id})">delete</button> 
    </div>
    `
    songsContainer.appendChild(songItem)
}

function displaySongs(arr) {
    songsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongItem(arr[i])
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getAllSongsBtn.addEventListener('click', getAllSongs)
form.addEventListener('submit', createSongHandler)

// did not need to listen for deleteBtn to be clicked as it is handled in createSongItem
// const deleteBtn = document.querySelectorAll('delete')
// deleteBtn.addEventListener('click', deleteSong)