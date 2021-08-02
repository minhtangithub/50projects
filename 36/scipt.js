const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const squares = document.querySelectorAll('.square');
function randomColor () {
    return colors[Math.floor(Math.random()*colors.length)];
}

squares.forEach(function(el){
    el.addEventListener('mouseover', function() {
        const color = randomColor();
        el.style.backgroundColor = color;
        el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    })

    el.addEventListener('mouseout', function() {
        el.style.backgroundColor = `#1d1d1d`;
        el.style.boxShadow = `0 0 2px #000`;
    })
})