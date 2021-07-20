const circle = document.querySelector('.circle');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

open.addEventListener('click', function() {
    circle.classList.add('circle--active');
    nav.classList.add('active');
})

close.addEventListener('click', function() {
    circle.classList.remove('circle--active');
    nav.classList.remove('active');
})
