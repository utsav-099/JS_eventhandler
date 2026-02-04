let [seconds,minutes,hours]=[0,0,0];
let displaytime=document.getElementById("displaytime");
let timer=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    displaytime.innerHTML=hours+":"+minutes+":"+seconds;
}
var start=document.getElementById("start");
start.addEventListener("click", function(watchstart){
    if(timer!==null){
        clearInterval(timer);
    }                    
    timer=setInterval(stopwatch,1000);
}); 

var stop=document.getElementById("stop");
stop.addEventListener("click",function(watchstop){
    clearInterval(timer);
});

var reset=document.getElementById("reset");
reset.addEventListener("click", function(watchreset){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displaytime.innerHTML="00:00:00";
});