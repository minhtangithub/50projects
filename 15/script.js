const counters = document.querySelectorAll('.counter');
counters.forEach(function (c) {
    c.innerText = '0';

    const target = +c.getAttribute('data-target');
    let currentNumber = +c.innerText;
    const increment = target/20;

    console.log(target, currentNumber, increment)
    setInterval(function() {
        if (currentNumber < target) {
            currentNumber += increment;
            c.innerText = currentNumber;
            console.log(c.innerText)
        }
        clearInterval(this);
    }, 50)
})
