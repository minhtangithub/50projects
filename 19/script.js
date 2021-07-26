const body = document.body;
const btn = document.querySelector('button');
const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

const weekdays = ['','Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'sartuday', 'sunday'];
const months = ['','jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
btn.addEventListener('click', function() {
    body.classList.toggle('dark');
})

function update() {
    const date = new Date();
    const month = months[date.getMonth()];
    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    time.innerText = `${hour}:${Number(minute) < 10 ? '0'+minute : minute} ${Number(hour) >= 12 ? 'PM' : 'AM'}`
    date.innerHTML = `${weekday},${month} <span>${day}</span>`

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hour%12*30}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minute*6}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${second*6}deg)`;
}

setInterval(update, 1000);