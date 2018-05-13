var body = document.getElementsByTagName("body")[0];

linkCss(document.getElementById('spacing_input'), 'spacing', 'px');
linkCss(document.getElementById('blur_input'), 'blur', 'px');
linkCss(document.getElementById('color_input'), 'color', '');

/**
 * Links an input element and a CSS variable for live style editing.
 * @param {Object} element - HTML element to link
 * @param {String} cssVariable - name of CSS variable to link
 * @param {String} unit - optional. CSS shorthand for the unit of measurement, such as 'px'
 */
function linkCss(element, cssVariable, unit = ''){
  console.log(typeof element);
  element.addEventListener('input', function(){
    body.style.setProperty('--' + cssVariable, element.value + unit);
  });
}