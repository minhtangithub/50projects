const resultEl = document.querySelector('span');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const settingsEl = document.querySelectorAll('.setting__item + .setting__item input');
const clipboard = document.querySelector('.result button');
const btn = document.querySelector('.container > button');
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random()*11) + 33);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

btn.addEventListener('click', function() {
    const length = +lengthEl.value;
    const types = [];
    settingsEl.forEach(function(el) {
        if (el.checked) 
            types.push(el);
    });
    let result = '';
    for (let i = 0; i< length; i++) {
        result += random(types[i%types.length]);
    }
    resultEl.innerText = result;
})

function random(el) {
    if (el ===  upperEl)
        return randomUpper();
    if (el ===  lowerEl)
        return randomLower();
    if (el ===  symbolEl)
        return randomSymbol();
    if (el ===  numberEl)
        return randomNumber();
}

clipboard.addEventListener('click', function() {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password)
        return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('copied');
})


