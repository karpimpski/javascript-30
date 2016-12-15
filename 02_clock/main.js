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

hourD.innerHTML = time.getHours() % 12;
minuteD.innerHTML = time.getMinutes();
setInterval(setTime, 1000);

function setTime(){
    time = new Date();
    if(time.getSeconds() == 0){
        newMinute();
        secondD.innerHTML = '00';
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
    secondD.innerHTML = '00';
    hourD.innerHTML = time.getHours() % 12;
    minuteD.innerHTML = time.getMinutes();
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
    clock.style.borderRadius = '20px';
    clock.style.height = '200px';
    [center, second, hour, minute].forEach(function(item, index){
        item.style.display = 'none';
    });
    
    [hourD, minuteD, secondD].forEach(function(item, index){
        setTimeout(function(){
            item.style.opacity = '0';
            item.style.display = 'block'; 
            setTimeout(function(){
                item.style.opacity = '1';
            }, 200);
        }, 200);
    });
}

function makeAnalog(){
    clock.classList.remove('digital');
    clock.classList.add('analog');
    clock.style.borderRadius = '100%';
    clock.style.height = '400px';
    setTimeout(function(){
        [center, second, hour, minute].forEach(function(item, index){
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(function(){
                item.style.opacity = '1';
            }, 200);
        });
    }, 200);
    
    [hourD, minuteD, secondD].forEach(function(item, index){
        setTimeout(function(){
            item.style.display = 'none'; 
            setTimeout(function(){
                item.style.opacity = '0';
                item.style.display = 'none';
            }, 200);
        }, 200);
    });
}