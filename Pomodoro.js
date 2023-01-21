var minutes; 
var seconds;

function studyBreak(x){
clearInterval (interval)
minutes = x;

seconds = 0;

var interval = setInterval(

function(){

var el = document.getElementById("timer")
if(seconds ==0 && minutes ==0){

    clearInterval (interval)
    document.title="READYYYYY"
    el.innerHTML = "00:00"
    
    el.style.backgroundColor = "red"
}
else if (seconds == 0){

minutes = minutes -1;

seconds = 59

el.innerHTML = minutes + ":" + seconds
document.title=minutes + ":" + seconds

}else if(seconds > 0) {

seconds = seconds - 1;

el.innerHTML = minutes + ":" + seconds
document.title=minutes + ":" + seconds

}
}, 
1000
)
}