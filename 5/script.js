const container = document.querySelector('.container');
const text = document.querySelector('.text');
let loading = 0;
const interval = setInterval(blur, 30);

function blur () {
    loading++;
    if (loading >= 100) {
        clearInterval(interval);
    }
    text.innerHTML = loading+'%';
    text.style.opacity = 1 - loading*0.01;
    container.style.filter = `blur(${100 - loading}px)`
    console.log(text.style.opacity, container.style.filter)
}