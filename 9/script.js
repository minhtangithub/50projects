const sounds = ['sound__1', 'sound__2', 'sound__3', 'sound__4'];
const names = ['Naruto', 'Naruto bật mode quánh chetme', 'Gao ồ', 'Gia đình phép thuật'];
sounds.forEach(function(sound, i){
    const btn = document.createElement('button');
    document.querySelector('.buttons').appendChild(btn);
    btn.innerText = names[i];
    const idOfSound = sounds[i];
    const audio = document.getElementById(idOfSound);
    btn.addEventListener('click', function() {
        stop();
        audio.play();
    })
})

function stop() {
    sounds.forEach(function(sound) {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}