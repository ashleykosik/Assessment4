const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
//const formInput = document.getElementById("submitBtn")
const getAllSongsBtn = document.getElementById("allSongs")
const songsContainer = document.querySelector('#songsContainer')



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

// function submitHandler(e) {
//     e.preventDefault()

//     let title = document.querySelector('#title')
//     let rating = document.querySelector('input[name="ratings"]:checked')
    
//     let bodyObj = {
//         title: title.value,
//         rating: rating.value, 
       
//     }

//     createMovie(bodyObj)

//     title.value = ''
//     rating.checked = false
    
// }

function createSongItem(song) {
    const songItem = document.createElement('div')
    songItem.classList.add('songItems')

    songItem.innerHTML = `
    <p class="songId">${song.id}.</p>
    <p class="songTitle">${song.title}</p>
    <button class="delete" onclick="deleteSong(${song.id})">delete</button>
    `
    songsContainer.appendChild(songItem)
}

function displaySongs(arr) {
    songsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createSongItem(arr[i])
    }
}


//formInput.addEventListener('click', newSong)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getAllSongsBtn.addEventListener('click', getAllSongs)

// const deleteBtn = document.querySelectorAll('delete')
// deleteBtn.addEventListener('click', deleteSong)