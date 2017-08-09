/*console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHtml = 'New javascript';

//moving image
var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};*/

//code  for counter

var counter = document.getElementById('counter');

button.onclick = function(){
  
  //create a request object.
  var request = new XMLHttpRequest();
  
  //capture the response and store it in variable.
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = count.toString();
        }
    }  
  };
  
  //make request
  request.open('GET','http://ravivaniya4911.imad.hasura-app.io/counter',true);
  request.send(null);
};