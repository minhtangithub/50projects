// number1
const panels = document.querySelectorAll('.number1__panel');
panels.forEach(function(panel) {
    panel.addEventListener('click', function() {
        document.querySelector('.number1__panel--active').classList.remove('number1__panel--active');
        panel.classList.add('number1__panel--active');
    })
})

// number2
const progress = document.querySelector('.number2__progress');
const next = document.querySelector('.number2__buttons-next');
const prev = document.querySelector('.number2__buttons-prev');
const circles = document.querySelectorAll('.number2__circle');

let currentNumber = 1;
function update() {
    document.querySelectorAll('.number2__circle--active').forEach(function(circle) {
        circle.classList.remove('number2__circle--active');
    })
    for (let i = 0; i<currentNumber; i++){
        circles[i].classList.add('number2__circle--active');
    }
    progress.style.width = (currentNumber - 1)*350/3 + 'px';
    console.log(progress.style.width)
}

next.addEventListener ('click', function() {
    if (currentNumber < 4) {
        currentNumber++;
        if (currentNumber == 2) {
            prev.classList.add('number2__btn--active');
        }
        if (currentNumber == 4) {
            next.classList.remove('number2__btn--active');
        }
        update();
    }
})

prev.addEventListener('click', function() {
    if (currentNumber > 1) {
        currentNumber--;
        if (currentNumber == 3) {
            next.classList.add('number2__btn--active');
        }
        if (currentNumber == 1) {
            prev.classList.remove('number2__btn--active');
        }
        update();
    }
})