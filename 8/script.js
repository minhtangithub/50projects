const labels = document.querySelectorAll('label');

labels.forEach(function(label) {
    console.log(label.innerHTML)
    label.innerHTML = label.innerText
    .split('')
    .map(function(letter, i) {
        return `<span style= "transition-delay:${i * 50}ms">${letter}</span>`
    })
    .join('')
    console.log(label.innerHTML)
})