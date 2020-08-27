
window.onload = function () {
    let minutes = 00;
    let seconds = 00;
    let milliSeconds = 00;

    let startButton = document.querySelector(".btn-start");
    let resetButton = document.querySelector(".btn-reset");
    let stopButton = document.querySelector(".btn-stop");

    let appendMilliSeconds = document.getElementById("milsec");
    let appendSeconds = document.getElementById("sec");
    let appendMinutes = document.getElementById("min");


    let lap; 

    startButton.onclick = function(){
        clearInterval(lap);
        lap = setInterval(startTimer, 10);

    };
    stopButton.onclick = function(){
        clearInterval(lap);

    };
    resetButton.onclick = function(){
        clearInterval(lap);
        milliSeconds = "00";
        seconds = "00";
        minutes = "00";
        appendMilliSeconds.innerHTML = milliSeconds;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

    function startTimer () {
        milliSeconds++;
        if (milliSeconds < 9){
            appendMilliSeconds.innerHTML = "0" + milliSeconds;
        }
        if(milliSeconds > 9){
            appendMilliSeconds.innerHTML = milliSeconds;
        }
        if(milliSeconds > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milliSeconds = 0;
            appendMilliSeconds.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
        if(seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

    }
}