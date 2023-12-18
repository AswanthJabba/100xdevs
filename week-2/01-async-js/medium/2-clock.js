const second = 1000;
const minute = second * 60;
const hour = minute * 60;

setInterval(function(){
    const d = new Date();
    let hours = Math.round(d.getTime() / hour) % 12;
    let minutes = Math.round(d.getTime() / minute) % 60;
    let seconds = Math.round(d.getTime() / second) % 60;
    let timeOfTheDay = Math.round(d.getTime() / hour)%2 == 0 ? "AM" : "PM";
    console.log(hours + ":" + minutes + ":" + seconds + " " + timeOfTheDay);
}, 1000);