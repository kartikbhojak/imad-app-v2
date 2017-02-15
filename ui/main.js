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
//Submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.oneClick=function(){
    // Make a request to the server and send the name
    //capture a list of names
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i<names.length; i++){
        list+='<li>'+ names[i] + '<li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
};
