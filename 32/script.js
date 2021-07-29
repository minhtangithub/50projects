const inputs = document.querySelectorAll('input');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

inputs.forEach(function(input) {
    input.addEventListener('change', function(e) {
        if (good.checked && cheap.checked && fast.checked) {
            if (e.target === good) {
                fast.checked = false;
            }
            if (e.target === cheap) {
                good.checked = false;
            }
            if (e.target === fast) {
                cheap.checked = false;
            }
        }
    })
})