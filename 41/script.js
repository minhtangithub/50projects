const inputs = document.querySelectorAll('input');
inputs[0].focus();
inputs.forEach(function(input, i){
    input.addEventListener('keydown', function(e) {
        if (e.key >=0 && e.key<=9) {
            inputs[i].value = '';
            setTimeout(function() {
                inputs[i+1].focus()
            }, 10);
        }
        else if (e.key === 'Backspace') {
            setTimeout(function() {
                inputs[i-1].focus()
            }, 10);
        }
    })
})