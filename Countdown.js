var clock1, clock2;
var seconds1 = 300;
var seconds2 = 300;

function setTimer(o_seconds,id) {
    if(o_seconds < 0)
    {
        o_seconds = 0;
    }
    var minutes = Math.floor(o_seconds/60);
    var seconds = o_seconds - (minutes*60);
    var mins = "" + minutes;
    var secs = "" + seconds;    
    if(mins.length < 2)
    {
        mins = "0" + mins;
    }
    if(secs.length < 2)
    {
        secs = "0" + secs;
    }
    
    document.getElementById(id).textContent = mins + ":" + secs;
    
    if(o_seconds == 0)    
    {
      stopTimer(id);
    }

}

function startTimer(id)
{
  if(id.localeCompare("Timer1"))
  {
    clock1 = setInterval(function() {seconds1 = seconds1-1; setTimer(seconds1,id);}, 1000);
  }
  if(id.localeCompare("Timer2"))
  {
    clock2 = setInterval(function() {seconds2 = seconds2-1; setTimer(seconds2,id);}, 1000);
  }
}

function stopTimer(id)
{
  if(id.localeCompare("Timer1"))
  {
    clearInterval(clock1);
  }
  if(id.localeCompare("Timer2"))
  {
    clearInterval(clock2);
  }

} 

function ReSetTimer(id)
{
    stopTimer(id);
    setTimer(300,id);
    seconds1 = 300;
    seconds2 = 300; 
}
