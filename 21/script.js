const fill = document.querySelector('.fill');
const emptys = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', function() {
    console.log('start');
    this.classList.add('hold');
    setTimeout(function() {
        fill.className = 'invisuble';
        console.log('settimeout')
    }, 10)
    // set timeout de dam bao no duoc thuc hien sau 
})

fill.addEventListener('dragend', function() {
    this.className = 'fill';
    console.log('end');
})

emptys.forEach (function(el) {
    el.addEventListener('dragover', function(e) {
        console.log('over')
        e.preventDefault();
    })
    el.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.classList.add('hover');
        console.log('enter');
    })
    el.addEventListener('dragleave', function() {
        this.classList.remove('hover');
        console.log('leave');
    })
    el.addEventListener('drop', function() {
        this.className = 'empty';
        this.appendChild(fill);
        console.log('drop');
    })
})