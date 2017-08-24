var submit = document.getElementById('submit_btn');

submit.onclick = function(){
  
  //create a request object.
  var request = new XMLHttpRequest();
  
  //capture the response and store it in variable.
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200){
            alert('Logged in succesfully');
        }else if(request.status === 403){
            alert('Username/password is invalid');
        }else if(request.status === 500){
            alert('some error occured on server');
        }
    }  
  };
  
  //make request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log('username');
  console.log('password');
  request.open('POST','http://ravivaniya4911.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username,password:password}));
};