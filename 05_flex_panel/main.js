var panels = document.querySelectorAll('.panel');
for(var i = 0; i < panels.length; i++){
  panels[i].addEventListener('click', changeSize);
}

function changeSize(){
  this.classList.contains('large') ? shrink(this) : enlarge(this);
}

function enlarge(el){
  el.innerHTML += '<span class="top">HEY</span>';
  el.classList.add('small');
  el.style.fontSize = '0.8em';
  setTimeout(function(){
    el.querySelector('.top').classList.add('down');
    el.querySelector('.bottom').classList.add('up');
    el.classList.remove('small');
    el.classList.toggle('large');
    el.style.fontSize = '2em';
  }, 350);
}

function shrink(el){
  el.style.fontSize = '2.1em';
  el.classList.remove('large');
  el.classList.add('extra-large');
  setTimeout(function(){
    el.querySelector('.top').classList.remove('down');
    el.querySelector('.bottom').classList.remove('up');
    el.style.fontSize = '1em';
    el.classList.remove('extra-large');
  }, 350);
}