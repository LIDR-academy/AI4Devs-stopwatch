let timer;
let startTime;
let elapsedTime = 0;
let running = false;
let countdownMode = false;

const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const millisecondsInput = document.getElementById("milliseconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const countdownButton = document.getElementById("countdown");

function updateDisplay(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    minutesInput.value = String(minutes).padStart(2, "0");
    secondsInput.value = String(seconds).padStart(2, "0");
    millisecondsInput.value = String(milliseconds).padStart(3, "0");
}

function toggleTimer() {
    if (running) {
        clearInterval(timer);
        running = false;
        startButton.textContent = "Start";
        startButton.style.background = "#0ff";
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 10);
        running = true;
        startButton.textContent = "Stop";
        startButton.style.background = "#f00";
    }
    resetButton.disabled = elapsedTime === 0;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    updateDisplay(elapsedTime);
    startButton.textContent = "Start";
    startButton.style.background = "#0ff";
    resetButton.disabled = true;
}

function toggleCountdownMode() {
    countdownMode = !countdownMode;
    if (countdownMode) {
        countdownButton.textContent = "Cronometer";
        countdownButton.style.background = "#ffa500";
        startButton.disabled = true;
        resetButton.disabled = true;
        minutesInput.disabled = false;
        secondsInput.disabled = false;
        millisecondsInput.disabled = false;
        updateDisplay(0);
    } else {
        countdownButton.textContent = "Countdown";
        countdownButton.style.background = "#ff0";
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        millisecondsInput.disabled = true;
        startButton.disabled = false; // Reactivar el botón start
        resetTimer();
    }
}

function enableStartButton() {
    if (countdownMode) {
        startButton.disabled = false;
    }
}

// Bloquear inputs cuando estamos en cronómetro
minutesInput.disabled = true;
secondsInput.disabled = true;
millisecondsInput.disabled = true;

minutesInput.addEventListener("input", enableStartButton);
secondsInput.addEventListener("input", enableStartButton);
millisecondsInput.addEventListener("input", enableStartButton);

startButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
countdownButton.addEventListener("click", toggleCountdownMode);