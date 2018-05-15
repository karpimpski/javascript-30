var clock = document.querySelector('#clock');
var center = document.querySelector('#center');
var second = document.querySelector('#second');
var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');

var hourD = document.querySelector('#hour_d');
var minuteD = document.querySelector('#minute_d');
var secondD = document.querySelector('#second_d');

var time;

updateClock();
setInterval(updateClock, 1000);

function updateClock(){
    time = new Date();
    updateAnalog();
    updateDigital();
}

function updateAnalog() {
    if(time.getSeconds() == 0) {
        fullCircle(second);
        time.getMinutes() == 0 ? fullCircle(minute) : minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
        time.getHours() == 0 ? fullCircle(hour) : hour.style.transform = `rotate(${(time.getHours() + time.getMinutes()/60) * 30}deg)`;
    }
    else {
        second.style.transform = `rotate(${time.getSeconds() * 6 }deg)`;
        minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
        hour.style.transform = `rotate(${(time.getHours() + time.getMinutes()/60) * 30}deg)`;
    }
}

function updateDigital() {
    secondD.innerHTML = format(time.getSeconds());
    minuteD.innerHTML = format(time.getMinutes());
    hourD.innerHTML = format(time.getHours());
}

/**
 * Rotates an HTML element to 360 degrees, then resets its rotation to 0.
 * @param {Object} el - element to rotate.
 */
function fullCircle(el){
    el.style.transform = `rotate(360deg)`;
    setTimeout(function(){
        el.style.transitionProperty = 'none';
        el.style.transform = `rotate(0deg)`;
    }, 200);
    
    setTimeout(function(){
        el.style.transition = 'all 0.2s';
    }, 250);
}

/**
 * Formats an integer to 2 digits.
 * @param {Int} value - number to format.
 */
function format(value) {
    if(value < 10) return "0" + value.toString();
    return value.toString();
}

clock.addEventListener('click', toggleClock);

function toggleClock() {
    clock.classList.contains('analog') ? clock.classList = 'digital' : clock.classList = 'analog';
}