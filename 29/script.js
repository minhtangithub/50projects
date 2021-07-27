const container = document.querySelector('.container');
let lastestTime = 0;
container.addEventListener ('click', function(e) {
    if (lastestTime === 0) {
        const date = new Date;
        lastestTime = date.getTime();
        console.log('1', date.getTime());
    }
    else {
        const date = new Date;
        if (date.getTime() - lastestTime < 800) {
            createHeart(e);
            lastestTime = 0;
            console.log('2', date.getTime());
        }
        else {
            lastestTime = date.getTime();
            console.log('3', date.getTime());
        }
    }
})

function createHeart(e) {
    const X = e.clientX;
    const Y = e.clientY;

    const x = e.target.offsetLeft;
    const y = e.target.offsetTop;

    const top = Y - y;
    const left = X - x;

    const heart = document.createElement('i');
    heart.className = `fas fa-heart`;
    container.appendChild(heart);
    heart.style.top = top + 'px';
    heart.style.left = left + 'px';
    setTimeout(function() {
        heart.remove();
    }, 450)
}