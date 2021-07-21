const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', function() {
    const animatePoint = window.innerHeight*0.8;
    boxes.forEach(function(box) {
        if (box.getBoundingClientRect().top < animatePoint) {
            box.classList.add('box--active');
        }
        else {
            box.classList.remove('box--active');
        }
    })
})