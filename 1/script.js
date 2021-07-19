const panels = document.querySelectorAll('.number1__panel');
panels.forEach(function(panel) {
    panel.addEventListener('click', function() {
        document.querySelector('.number1__panel--active').classList.remove('number1__panel--active');
        panel.classList.add('number1__panel--active');
    })
})