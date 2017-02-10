function changeInd(n) {
    var list = document.getElementById('monthList');
    var index = list.selectedIndex;
    var len = list.options.length; 
    var changed = index+n;

    if (changed == len) {changed = 0;}
    if (changed < 0 ) {changed = len-1;} 
    
    list.selectedIndex = changed;
    colourchange(changed);
}

function colourchange(changed) {
    
    var div = document.getElementById("colourBox");

    if(changed === 0)
    {
     div.style.backgroundColor = "green";
    }
    else if (changed === 1)
    {
     div.style.backgroundColor = "blue";
    }
    else if (changed === 2)
    {
     div.style.backgroundColor = "yellow";
    }
    else if (changed === 3)
    {
     div.style.backgroundColor = "crimson"; 
    }
    else if (changed === 4)
    {
     div.style.backgroundColor = "pink";
    }
    else if (changed === 5)
    {
     div.style.backgroundColor = "coral";
    }
    else if (changed === 6)
    {
     div.style.backgroundColor = "black";
    }
    else if (changed === 7)
    {
     div.style.backgroundColor = "lightblue";
    }
    else if (changed === 8)
    {
     div.style.backgroundColor = "orange";
    }
    else if (changed === 9)
    {
     div.style.backgroundColor = "darkmagenta";
    }
    else if (changed === 10)
    {
     div.style.backgroundColor = "aquamarine";
    }
    else if (changed === 11)
    {
     div.style.backgroundColor = "chartreuse";
    }
}

