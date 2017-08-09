//code  for counter

var counter = document.getElementById('counter');
var counter = 0;
/*button.onclick = function(){
  
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
  request.open('GET','https://ravivaniya4911.imad.hasura-app.io/counter',true);
  request.send(null);
};*/

button.onclick = function(){
  counter = counter + 1;
  var span = document.getElementById('count');
    span.innerHTML = count.toString();
};