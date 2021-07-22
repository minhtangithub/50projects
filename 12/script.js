const btns = document.querySelectorAll('button');
btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const faq = btn.parentElement;

        faq.classList.toggle('faq--active');
    })
})