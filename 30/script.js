const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const text = 'I love you 😍 I love you 😍 I love you 😍';
let index = 1;
let speed = 300/input.value;

function write() {
    h1.innerText = text.slice(0, index);
    index++;
    if (index > text.length)
        index = 1;

    setTimeout(write, speed);
}

input.addEventListener('input', function(e) {
    console.log(300/e.target.value)
    speed = 300/e.target.value;
});

write();
