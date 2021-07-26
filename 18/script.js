const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let currentSlide = 0;
console.dir(slides[currentSlide]);

function update() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage;
    document.querySelector('.active').classList.remove('active');
    slides[currentSlide].classList.add('active');
}

left.addEventListener('click', function() {
    currentSlide--;
    if (currentSlide < 0)
        currentSlide = slides.length - 1;
    update();
})

right.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide >= slides.length)
        currentSlide = 0;
    update();
})
