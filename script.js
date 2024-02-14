// JavaScript code for stopwatch functionality
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
    document.getElementById('display').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    } else {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

document.getElementById('play-button').addEventListener('click', startStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);