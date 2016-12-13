var boxes = document.querySelectorAll('.box');

window.addEventListener('keypress', function(e){
  if(document.querySelector('#' + e.key + '_sound')){
    playSound(e.key);
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
  box.classList.add('playing');
  setTimeout(function(){
    box.classList.remove('playing');
  }, 300);
  sound.play();
}