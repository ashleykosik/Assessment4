const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
//const formInput = document.getElementById("submitBtn")
const getAllSongsBtn = document.getElementById("allSongs")

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

const getAllSongs = () => {
    axios.get("http://localhost:4000/api/songs/")
        .then(res => { 
            console.log(res.data);
        } )
}
//.then(moviesCallback).catch(errCallback)


// handling text that is typed into the form

// put (edit) message to correct error

// delete to remove from playlist

// post message(motivational song) to db arrray with spelling error



// const songCallback = ({ data: movies }) => displayMovies(movies)
// const errCallback = err => console.log(err.response.data)

// function submitHandler(e) {
//     e.preventDefault()

//     let title = document.querySelector('#title')
//     let rating = document.querySelector('input[name="ratings"]:checked')
//     let imageURL = document.querySelector('#img')

//     let bodyObj = {
//         title: title.value,
//         rating: rating.value, 
//         imageURL: imageURL.value
//     }

//     createMovie(bodyObj)

//     title.value = ''
//     rating.checked = false
//     imageURL.value = ''
// }

// function createMovieCard(movie) {
//     const movieCard = document.createElement('div')
//     movieCard.classList.add('movie-card')

//     movieCard.innerHTML = `<img alt='movie cover' src=${movie.imageURL} class="movie-cover"/>
//     <p class="movie-title">${movie.title}</p>
//     <div class="btns-container">
//         <button onclick="updateMovie(${movie.id}, 'minus')">-</button>
//         <p class="movie-rating">${movie.rating} stars</p>
//         <button onclick="updateMovie(${movie.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteMovie(${movie.id})">delete</button>
//     `


//     moviesContainer.appendChild(movieCard)
// }

// function displayMovies(arr) {
//     moviesContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createMovieCard(arr[i])
//     }
// }


//formInput.addEventListener('click', newSong)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

getAllSongsBtn.addEventListener('click', getAllSongs)