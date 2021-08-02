const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const btn = document.querySelector('button');
for (let i = 0; i<4; i++)
    for (let j = 0; j<4; j++) {
        boxes[i*4 + j].style.backgroundPosition = `${-125*j}px ${-125*i}px`
    }

btn.addEventListener('click', function(){
    container.classList.toggle('active');
})