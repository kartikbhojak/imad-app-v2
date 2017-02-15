//counter code
var button=document.getElementById('counter');
var counter=0;

button.oneClick = function() {
    // create a request
    var request=new XMLHttpRequest();
    
    
    //Capture the variable
    request.onreadystatechange=function(){
        if(request.readyState=== XMLHttpRequest.DONE){
            //TAke some action
            
            if(request.ststus===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
        //not done yet
    };
    
    //Make the request
    request.open('GET','http://kartikbhojak.imad.hasura-app.io/counter',true);
    request.send(null);
    
};