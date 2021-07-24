const cups = document.querySelectorAll('.sm');
const bigCup = document.querySelector('.lg')
const percent = document.querySelector('.drank');
const remain = document.querySelector('.remain');
const remainSpan = document.querySelector('.remain span');

cups.forEach(function(cup, i) {
    cup.addEventListener('click', function() {
        updateCups(i);
        updateBigCup(i);
    });
});

function updateCups(i) {
    if (cups[i].classList.contains('active') && (i === cups.length - 1  || !cups[i + 1].classList.contains('active'))) {
        cups[i].classList.remove('active');
    }
    else {
        cups.forEach(function(cup, j) {      
            if (j <= i) {
                cup.classList.add('active');
            }
            else {
                cup.classList.remove('active');
            }
        })
    }
} 

function updateBigCup(i) {
    const toralHeight = 330;
    const toralCups = 8;
    const cupFilled = document.querySelectorAll('.sm.active').length;
    const percentHeight = cupFilled*toralHeight/toralCups;
    
    console.log(cupFilled, document.querySelectorAll('.sm.active'));
    if (cupFilled !== 0) {
        remainSpan.innerText = `${2 - cupFilled*0.25}L`;
        percent.innerText = `${cupFilled/toralCups*100}%`;
        if (cupFilled === toralCups) {
            remain.style.display = 'none';
        }
        else {
            remain.style.display = 'flex';
        }
        percent.style.display = 'flex';
        console.log(percentHeight)
        percent.style.height = `${percentHeight}px`;
        percent.classList.add('active');
    }
    else {
        percent.style.display = 'none';
        console.log('none');
        percent.classList.remove('active');
    }
}

