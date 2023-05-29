
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let time;

let start = function() {
    time = setInterval(function() {
        if(seconds.innerHTML < 60) {
            seconds.innerHTML++;
        }
    }, 100)
    setInterval(function() {
        if(seconds.innerHTML == 60) {
            seconds.innerHTML = 0;
            minutes.innerHTML++;
        }
    }, 100)
    setInterval(function() {
        if(minutes.innerHTML == 60) {
            minutes.innerHTML = 0;
            hours.innerHTML++;
        }
    }, 100)
}

function reset() {
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
    clearInterval(time);
}

let stop = function() {
    clearInterval(time);
}