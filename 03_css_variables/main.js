addListener('spacing', 'px');
addListener('blur', 'px');
addListener('color', '');

function addListener(name, unit){
  document.getElementsByName(name)[0].addEventListener('input', function(){
    document.querySelector('body').style.setProperty('--' + name, document.getElementsByName(name)[0].value + unit);
  });
}