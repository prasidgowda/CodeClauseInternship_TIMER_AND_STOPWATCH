
let timer;
let timerRunning = false;
let timerSeconds = 0;

function startTimer() {
    if (!timerRunning) {
        const timeInterval = parseInt(document.getElementById('time-interval').value, 10);
        if (!isNaN(timeInterval) && timeInterval > 0) {
            timerSeconds = timeInterval;
            timerRunning = true;
            clearInterval(timer); 
            timer = setInterval(updateTimer, 1000);
        } else {
            alert('Please enter a valid time interval in seconds.');
        }
    }
}

function pauseResumeTimer() {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
        
        document.getElementById('pause-timer').innerText = 'Resume';
    } else {
        
        timerRunning = true;
        timer = setInterval(updateTimer, 1000);
        
        document.getElementById('pause-timer').innerText = 'Pause';
    }
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timerSeconds = 0;
    updateTimerDisplay(timerSeconds);
    
    document.getElementById('pause-timer').innerText = 'Pause';
}

function updateTimer() {
    if (timerSeconds > 0) {
        timerSeconds--;
    } 
    else {
        clearInterval(timer);
        timerRunning = false;
        
        document.getElementById('pause-timer').innerText = 'Pause';
    }

    updateTimerDisplay(timerSeconds);
}

function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer-display').innerText = timeString;
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseResumeTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);


let stopwatch;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchSeconds = 0;
        stopwatch = setInterval(updateStopwatch, 1000);
    }
}

function pauseResumeStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatch);
        stopwatchRunning = false;
        
        document.getElementById('pause-stopwatch').innerText = 'Resume';
    } else {
        
        stopwatchRunning = true;
        stopwatch = setInterval(updateStopwatch, 1000);
        
        document.getElementById('pause-stopwatch').innerText = 'Pause';
    }
}

function resetStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay(stopwatchSeconds);
    
    document.getElementById('pause-stopwatch').innerText = 'Pause';
}

function updateStopwatch() {
    stopwatchSeconds++;
    updateStopwatchDisplay(stopwatchSeconds);
}

function updateStopwatchDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('stopwatch-display').innerText = timeString;
}

document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('pause-stopwatch').addEventListener('click', pauseResumeStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
