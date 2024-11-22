let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

const updateDisplay = () => {
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    document.getElementById('milliseconds').innerText = String(milliseconds).padStart(2, '0');
};

const startStopwatch = () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
};

const pauseStopwatch = () => {
    clearInterval(interval);
    isRunning = false;
};

const resetStopwatch = () => {
    clearInterval(interval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
};

const recordLap = () => {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    document.getElementById('laps').appendChild(lapItem);
};

document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('pauseButton').addEventListener('click', pauseStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);
document.getElementById('lapButton').addEventListener('click', recordLap);
