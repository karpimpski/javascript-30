var clock = document.querySelector('#clock');
var center = document.querySelector('#center');
var second = document.querySelector('#second');
var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');

var hourD = document.querySelector('#hour_d');
var minuteD = document.querySelector('#minute_d');
var secondD = document.querySelector('#second_d');

var time;

setTime();
setInterval(setTime, 1000);

function setTime(){
    time = new Date();
    rotateHands();
    updateDigital();
}

function rotateHands() {
    time.getSeconds() == 0 ? fullCircle(second) : second.style.transform = `rotate(${time.getSeconds() * 6 }deg)`;
    time.getMinutes() == 0 ? fullCircle(minute) : minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
    time.getHours() == 0 ? fullCircle(hour) : hour.style.transform = `rotate(${(time.getHours() + time.getMinutes()/60) * 30}deg)`;
}

function updateDigital() {
    secondD.innerHTML = format(time.getSeconds());
    minuteD.innerHTML = format(time.getMinutes());
    hourD.innerHTML = format(time.getHours());
}

function format(value) {
    if(value < 10) return "0" + value.toString();
    return value.toString();
}

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

clock.addEventListener('click', function(){
    this.classList.contains('analog') ? makeDigital() : makeAnalog();
});

function makeDigital(){
    clock.classList.remove('analog');
    clock.classList.add('digital');
}

function makeAnalog(){
    clock.classList.remove('digital');
    clock.classList.add('analog');
}