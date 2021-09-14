const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8582442a21ce11db2105afa2f41e87d5&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_API = 'https://api.themoviedb.org/3/discover/movie?api_key=8582442a21ce11db2105afa2f41e87d5&query="';


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies (data.results)
}

function showMovies (movies) {
    main.innerHTML = '';

    main.forEach((movie) => {
        const {title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movie.innerHTML = `
        <div class="movie">
        <img src="images/kevin-mueller-8F9cZvZyU7Q-unsplash.jpg" alt="">
        <div class="movie-info">
            <h3>Movies Title</h3>
            <span class="green">9.8</span>
        </div>
        <div class="overview">
            <h3>OverView</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id alias ullam odio maxime!
        </div>
    </div>
        `
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value=''
        }else{
            window.location.reload()
    };
});