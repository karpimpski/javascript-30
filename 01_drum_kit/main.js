var boxes = document.querySelectorAll('.box');

window.addEventListener('keydown', function(e){
  if(document.querySelector('#' + e.key + '_sound')){
    playSound(e.key);
  }
});

window.addEventListener('keyup', function(e){
  if(document.querySelector('#' + e.key + '_sound')){
    document.querySelector('#' + e.key + '_box').classList.remove('playing');
  }
});

for(var i = 0; i < boxes.length; i++){
 boxes[i].addEventListener('mousedown', function(){
   playSound(this.querySelector('p').innerHTML);
 });
 
 boxes[i].addEventListener('mouseup', function(){
   this.classList.remove('playing');
 });
}

function playSound(letter){
  var sound = document.querySelector('#' + letter + '_sound');
  var box = document.querySelector('#' + letter + '_box');
  if(box.classList.contains('playing') == false){
    sound.currentTime = 0;
    box.classList.add('playing');
    sound.play();
  }
}

