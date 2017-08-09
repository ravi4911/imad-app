console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHtml = 'New javascript';

//moving image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft='100px';
};