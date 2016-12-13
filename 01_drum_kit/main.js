window.addEventListener('keypress', function(e){
  var letter = String.fromCharCode(e.which);
  var id = '#' + letter + '_sound';

  if(document.querySelector(id)){
    document.querySelector(id).play();
  }
    
});