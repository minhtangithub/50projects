const container = document.querySelector('.container');
window.addEventListener('keydown', function (e) {
    container.innerHTML = `
    <div class="small-container">
             ${e.key === '' ? 'space' : e.key}
            <span>event.key</span>
        </div>
        <div class="small-container">
            ${e.keyCode}
            <span>event.keyCode</span>
        </div>
        <div class="small-container">
            ${e.code}
            <span>event.code</span>
        </div>
    `
})