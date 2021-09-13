const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8582442a21ce11db2105afa2f41e87d5&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=8582442a21ce11db2105afa2f41e87d5&query="';


const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log (data.results)
}

form.addEventListener('siubmit', (e) => {
    e.preventDefault();
    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies()
    }
})