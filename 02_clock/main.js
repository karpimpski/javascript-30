var clock = document.querySelector('#clock');
var center = document.querySelector('#center');
var second = document.querySelector('#second');
var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');

var hourD = document.querySelector('#hour_d');
var minuteD = document.querySelector('#minute_d');
var secondD = document.querySelector('#second_d');

setTime();
var time = new Date();
minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
hour.style.transform = `rotate(${(time.getHours() + time.getMinutes()/60) * 30}deg)`;
setInterval(setTime, 1000);

function setTime(){
    time = new Date();
    time.getSeconds() == 0 ? newMinute() : second.style.transform = `rotate(${time.getSeconds() * 6 }deg)`;
}

function newMinute(){
    fullCircle(second);
    var hours = (time.getHours() + time.getMinutes()/60) * 30;
    time.getMinutes() == 0 ? fullCircle(minute) : minute.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
    time.getHours() == 0 ? fullCircle(hour) : hour.style.transform = `rotate(${hours}deg)`;
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
    this.style.borderRadius = '20px';
    this.style.height = '200px';
    [center, second, hour, minute].forEach(function(item, index){
        item.style.background = 'rgba(255,255,255,1)';
        item.style.borderColor = 'white';
    });
    
    setTimeout(function(){
        [hourD, minuteD, secondD].forEach(function(item, index){
            item.style.display = 'block'; 
        });
    }, 200);
});