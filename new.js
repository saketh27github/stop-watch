 var minutes = 00;
 var seconds = 00;
 var tens = 00;

//  we assign getElementByID's to buttons to start, stop and reset.

var OutputMinutes = document.getElementById('minutes');
 var OutputSeconds = document.getElementById('second');
 var OutputTens = document.getElementById('tens');
 var buttonStart = document.getElementById('btn-start');
 var buttonStop = document.getElementById('btn-stop');
 var buttonReset = document.getElementById('btn-reset');
 var Interval;

//  now we add a event listner and click buttons

buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
//   we give 10 milliseconds = 0.01 seconds
  Interval = setInterval(startTime, 10);
});


// this is stop button
buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

// this is the reset button
buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    minutes = "00";
    tens = "00";
    seconds = "00";
    OutputMinutes.innerHTML = minutes;
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});

// star time function executes if start is pushed 
function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }


    // if milliseconds greater than 99 seconds should increase by one 
    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }


    // if seconds are greater than 59 minutes should increase by one
    if(seconds > 59){
        minutes++;
        OutputMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        OutputSeconds.innerHTML = "0" + seconds;
    }

}

