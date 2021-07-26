const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    const X = e.clientX;
    const Y = e.clientY;

    const x = e.target.offsetLeft;
    const y = e.target.offsetTop;

    // console.log(X, x, Y, y);
    const left = X - x;
    const top = Y - y;

    const span = document.createElement('span');
    span.classList.add('circle');
    span.style.top = top + 'px';
    span.style.left = left + 'px';
    btn.appendChild(span);

    setTimeout(function() {
        span.remove();
    }, 400);
})