const input = document.querySelector('textarea');
const tags = document.querySelector('.tags');

input.focus();

input.addEventListener('keyup', function(e) {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        random();
    }
})

function createTags(text) {
    const choices = text
    .split(',')
    .filter(function(choice) {
        return choice !== '';
    })
    .map(function(choice) {
        return choice.trim();
    })

    tags.innerHTML = '';

    choices.forEach(function(choice) {
        const tag = document.createElement('span');
        tag.innerText = choice;
        tags.appendChild(tag);
    })
}

function random() {
    const choices = document.querySelectorAll('span');

    const interval = setInterval(function() {
        const tag = pickRandomTag(choices);
        hightlight(tag);

        setTimeout(function() {
            unhightlight(tag);
        }, 100)
    }, 100)

    setTimeout(function() {
        clearInterval(interval);
        setTimeout(function() {
            hightlight(pickRandomTag(choices));
        }, 100)
    }, 3000)
}

function pickRandomTag (choices) {
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function hightlight (el) {
    el.classList.add('active');
}

function unhightlight (el) {
    el.classList.remove('active');
}

