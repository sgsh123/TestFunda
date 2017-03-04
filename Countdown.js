var clock1, clock2;
var seconds1 = 300;
var seconds2 = 300;
var start1 = false, start2 = false;

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
    if(!start1)
    {
        clock1 = setInterval(function() {seconds1 = seconds1-1; setTimer(seconds1,id);}, 1000);
        start1 = true;
    }
  }
  if(id.localeCompare("Timer2"))
  {
    if(!start2)
    {
        clock2 = setInterval(function() {seconds2 = seconds2-1; setTimer(seconds2,id);}, 1000);
        start2 = true;
    }
  }
}

function stopTimer(id)
{
  if(id.localeCompare("Timer1"))
  {
    clearInterval(clock1);
    start1 = false;
  }
  if(id.localeCompare("Timer2"))
  {
    clearInterval(clock2);
    start2 = false;
  }

} 

function resetTimer(id)
{
    stopTimer(id);
    setTimer(300,id);
    seconds1 = 300;
    seconds2 = 300; 
}

$(document).ready(function() {

$(".stop").on("click", function()
{
  var id = $(this).closest("span").find("p").prop("id");
  stopTimer(id);
});

$(".start").on("click", function()
{
  var id = $(this).closest("span").find("p").prop("id");
  
  startTimer(id);
});

$(".reset").on("click", function()
{
  var id = $(this).closest("span").find("p").prop("id");
  resetTimer(id);
});
});
