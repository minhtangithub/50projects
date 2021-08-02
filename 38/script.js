const btns = document.querySelectorAll('li');
const imgs = document.querySelectorAll('img');

btns.forEach(function(btn, i) {
    btn.addEventListener('click', function(){
        imgs.forEach(function(img){
            img.classList.remove('active');
        })
        imgs[i].classList.add('active');
    })
})