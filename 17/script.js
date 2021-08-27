const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.querySelector('main');
const form = document.querySelector('form');
const input = document.querySelector('input');
const container = document.querySelector('.container');
//khoi tao ban dau
getMovies(API_URL);
async function getMovies (url) {
    const result = await fetch(url)
    const data = await result.json()
    console.log(data.results);
    showMovies(data.results);
}

function showMovies (movies) {
    container.innerHTML = '';
    movies.forEach((movie) => {

        const {title, poster_path, vote_average, overview} = movie;

        const div = document.createElement('div');
        div.classList.add('item');

        div.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="PAW Patrol: The Movie">
        <div class="infor">
            <h3>${title}</h3>
            <span class=${getColorClass(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
            <h3>${title}</h3>
            ${overview}
        </div>
        `
        container.appendChild(div);
    })
}

function getColorClass(rate) {
    const rateNumber = Number(rate);
    if (rateNumber >= 8) {
        return 'green';
    }
    else if (rateNumber > 5) {
        return 'orange';
    }
    else
        return 'red';
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = input.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        input.value = ''
    } else {
        window.location.reload()
    }
})