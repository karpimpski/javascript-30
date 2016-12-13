var boxes = document.querySelectorAll('.box');

window.addEventListener('keypress', function(e){
  var letter = String.fromCharCode(e.which);
  var id = '#' + letter + '_sound';

  if(document.querySelector(id)){
    playSound(letter);
  }
});

for(var i = 0; i < boxes.length; i++){
 boxes[i].addEventListener('click', function(){
   playSound(this.querySelector('p').innerHTML);
 });
}

function playSound(letter){
  var sound = document.querySelector('#' + letter + '_sound');
  var box = document.querySelector('#' + letter + '_box');
  sound.currentTime = 0;
  box.style.transform = 'scale(1.1)';
  box.style.borderColor = '#FFC600';
  setTimeout(function(){
    box.style.transform = '';
    box.style.borderColor = 'black';
  }, 200);
  sound.play();
}