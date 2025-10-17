
const API_KEY = '21463539';
const API_URL = 'http://www.omdbapi.com/';


document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchMovie();
  }
});


async function searchMovie() {
  const query = document.getElementById('searchInput').value;
  if (!query) return;

  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&t=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovie(data);
    } else {
      document.getElementById('movie-container').innerHTML = `<p>Movie not found!</p>`;
    }
  } catch (error) {
    console.error('Error fetching movie:', error);
    document.getElementById('movie-container').innerHTML = `<p>Error fetching data.</p>`;
  }
}

function displayMovie(movie) {
  const container = document.getElementById('movie-container');
  container.innerHTML = `
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="http://img.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}" alt="${ie__title">${movie.Title} (${movie.Year})</div>
      <div class="movie__ratings">
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
      </div>
    </div>
  `;
}

