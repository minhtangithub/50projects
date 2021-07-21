const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

console.log(left, right, container);
left.addEventListener('mouseenter', function() {
    container.classList.add('container--left-active');
    console.log(container.classList)
})

left.addEventListener('mouseleave', function() {
    container.classList.remove('container--left-active');
})

right.addEventListener('mouseenter', function() {
    container.classList.add('container--right-active');
})

right.addEventListener('mouseleave', function() {
    container.classList.remove('container--right-active');
})