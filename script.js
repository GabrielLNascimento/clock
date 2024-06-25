const seg = document.getElementById('p-seg');
const min = document.getElementById('p-min');
const hor = document.getElementById('p-hora')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();


    const secondsDegrees = ((360 / 60) * seconds) - 90
    const minutesDegrees = ((360 / 60) * minutes) - 90
    const hourDegrees = ((360 / 12) * hour) - 90


    seg.style.transform = `rotate(${secondsDegrees}deg)`;
    min.style.transform = `rotate(${minutesDegrees}deg)`;
    hor.style.transform = `rotate(${hourDegrees}deg)`;

    
    console.log(seconds)
    console.log(minutes)
    console.log(hour)
    console.log('------')
    
}

setInterval(setDate, 1000);

setDate();