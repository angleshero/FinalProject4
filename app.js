const moviesWrapper = document.querySelector (".movies")
const searchName = document.querySelector (".searchName")

console.log (moviesWrapper)



function searchChange(event) {
     renderMovies(event.target.value)  
     searchName,innerHTML = event.target.value    
}

async function renderMovies(searchTerm) {

const response = await fetch (`https://www.omdbapi.com/?s=${searchTerm}&apikey=21463539&s`)
const data = await response.json()
const moviesArr = data.Search
moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
    return `
    <div class="movie">
    <img src=${movie.Poster} alt="" />
    <h2>${movie.Title}</h2>
    <h4>${movie.Year}</h4>
    <button>Learn More</button>
    </div> 
    `
       
    }).join ('');
}


