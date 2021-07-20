const btn = document.querySelector('.search-btn');
const search = document.querySelector('.search-input');

btn.addEventListener('click', function() {
    search.classList.toggle('search-input--active')
})