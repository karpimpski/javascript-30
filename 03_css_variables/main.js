var body = document.querySelector('body');
var style = body.style;
addListener('spacing', 'px');
addListener('blur', 'px');
addListener('color', '');

function addListener(name, unit = null){
  document.getElementsByName(name)[0].addEventListener('input', function(){
    style.setProperty('--' + name, document.getElementsByName(name)[0].value + unit);
  });
}