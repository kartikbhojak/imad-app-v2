//counter code
var button=document.getElementById('counter');

var counter=0;

button.oneClick=function(){
    // MAke a request to the counter
    
    //Capture the variable
    
    //Render the variable
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};