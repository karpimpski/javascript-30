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
minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
hour.style.transform = `rotate(${(time.getHours() + time.getMinutes()/60) * 30}deg)`;

time.getHours() % 12 == 0 ? hourD.innerHTML = '12' : hourD.innerHTML = time.getHours() % 12;
minuteD.innerHTML = time.getMinutes();
setInterval(setTime, 1000);

function setTime(){
    time = new Date();
    if(time.getSeconds() == 0){
        newMinute();
        secondD.innerHTML = '00';
    }
    else if(time.getSeconds() < 10){
        second.style.transform = `rotate(${time.getSeconds() * 6 }deg)`;
        secondD.innerHTML = '0' + time.getSeconds().toString();   
    }
    else{
        second.style.transform = `rotate(${time.getSeconds() * 6 }deg)`;
        secondD.innerHTML = time.getSeconds();
    }
}

function newMinute(){
    fullCircle(second);
    var hours = (time.getHours() + time.getMinutes()/60) * 30;
    time.getMinutes() == 0 ? fullCircle(minute) : minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
    time.getHours() == 0 ? fullCircle(hour) : hour.style.transform = `rotate(${hours}deg)`;
    time.getHours() % 12 == 0 ? hourD.innerHTML = '12' : hourD.innerHTML = time.getHours() % 12;
    time.getMinutes() < 10 ? minuteD.innerHTML = '0' + time.getMinutes().toString() : minuteD.innerHTML = time.getMinutes();
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