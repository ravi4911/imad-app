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