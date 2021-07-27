const up = document.querySelector('.up');
const down = document.querySelector('.down');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let currentSlide = 0;

function update () {
    left.style.transform = `translateY(-${(3 - currentSlide)*100}%)`;
    right.style.transform = `translateY(-${currentSlide*100}%)`;
}

up.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide > 3)
        currentSlide = 0;
    update();
    console.log(left.style.transform, right.style.transform);
})

down.addEventListener('click', function() {
    currentSlide--;
    if (currentSlide < 0)
        currentSlide = 3;
    update();
})
