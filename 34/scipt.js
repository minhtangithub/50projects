const count = document.querySelector('.count');
const final = document.querySelector('.final');
const nums = document.querySelectorAll('.nums span');
const btn = document.querySelector('button');
function run() {
    nums.forEach(function(el, i) {
        el.addEventListener('animationend', function(e){
            console.log(e.animationName);
            if (e.animationName === 'goIn' && i!==(nums.length - 1)) {
                el.classList.remove('in');
                el.classList.add('out');
            }
            else if (e.animationName === 'goOut' && el.nextElementSibling) {
                el.nextElementSibling.classList.add('in');
            }
            else {
                count.classList.add('hide');
                final.classList.add('show');
            }

        })
    })
}

function reset() {
    count.classList.remove('hide');
    final.classList.remove('show');
    nums.forEach(function(el) {
        el.className = '';
    })
    nums[0].className = 'in';
}

btn.addEventListener('click', function() {
    reset();
    run();
});

run();