let startTime = 0, elapsedTime = 0, timerInterval;
let running = false;
let countdownMode = false;
let lastLapTime = 0;

const titleEl = document.querySelector("h2");
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const milisEl = document.getElementById('milisegundos');
const lapsList = document.getElementById('lapsList');

const modeChronoBtn = document.getElementById('modeChrono');
const modeCountdownBtn = document.getElementById('modeCountdown');
const startBtn = document.getElementById('start');
const resumeBtn = document.getElementById('resume');
const pauseBtn = document.getElementById('pause');
const lapBtn = document.getElementById('lap');
const stopBtn = document.getElementById('stop');
const addTimeBtn = document.getElementById('addTime');
const resetBtn = document.getElementById('reset');
const cancelBtn = document.getElementById('cancel');

modeChronoBtn.addEventListener("click", () => selectMode(false));
modeCountdownBtn.addEventListener("click", () => selectMode(true));
startBtn.addEventListener("click", startTimer);
resumeBtn.addEventListener("click", resumeTimer);
pauseBtn.addEventListener("click", pauseTimer);
lapBtn.addEventListener("click", lapTime);
stopBtn.addEventListener("click", stopTimer);
addTimeBtn.addEventListener("click", addTime);
resetBtn.addEventListener("click", resetTimer);
cancelBtn.addEventListener("click", cancelMode);

function toggleButtons(show, hide) {
    show.forEach(id => document.getElementById(id).classList.remove("hidden"));
    hide.forEach(id => document.getElementById(id).classList.add("hidden"));
}

function selectMode(isCountdown) {
    countdownMode = isCountdown;
    titleEl.textContent = isCountdown ? "Cuenta Atrás" : "Cronómetro";
    document.querySelector(".mode-selection").classList.add("hidden");
    document.querySelector(".cronometro").classList.remove("hidden");
    document.querySelector(".botones").classList.remove("hidden");
    document.querySelector(".laps").classList.toggle("hidden", countdownMode);
    resetTimer();
    toggleButtons(countdownMode ? ['start', 'reset', 'addTime'] : ['start', 'reset', 'lap'], []);
}

function startTimer() {
    if (countdownMode && elapsedTime === 0) return;
    startTime = countdownMode ? Date.now() + elapsedTime : Date.now();
    timerInterval = setInterval(updateTime, 10);
    running = true;
    toggleButtons(["pause", "stop", countdownMode ? "addTime" : "lap"], ["start", "resume", "reset"]);
}

function updateTime() {
    elapsedTime = countdownMode ? startTime - Date.now() : Date.now() - startTime;
    if (countdownMode && elapsedTime <= 0) {
        elapsedTime = 0;
        clearInterval(timerInterval);
        stopTimer();
    }
    updateDisplay(elapsedTime);
}

function pauseTimer() {
    clearInterval(timerInterval);
    running = false;
    toggleButtons(["resume", "stop", "addTime"], ["pause", "lap"]);
}

function resumeTimer() {
    startTime = countdownMode ? Date.now() + elapsedTime : Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    running = true;
    toggleButtons(["pause", "stop", "addTime"], ["resume"]);
}

function stopTimer() {
    clearInterval(timerInterval);
    running = false;
    toggleButtons(["start", "reset", countdownMode ? "addTime" : "lap"], ["pause", "resume", "stop"]);
}

function addTime() {
    if (countdownMode) {
        elapsedTime += 30000;
        startTime += 30000;
        updateDisplay(elapsedTime);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay(elapsedTime);
    toggleButtons(["start", "reset", countdownMode ? "addTime" : "lap"], ["pause", "resume", "stop"]);
}

function lapTime() {
    if (!running || countdownMode) return;
    let lapTime = elapsedTime;
    let diff = lapTime - lastLapTime;
    lastLapTime = lapTime;
    let lapEl = document.createElement("li");
    lapEl.textContent = `Vuelta: ${formatTime(lapTime)} ( +${formatTime(diff)} )`;
    lapsList.appendChild(lapEl);
}

function cancelMode() {
    document.querySelector(".mode-selection").classList.remove("hidden");
    document.querySelector(".cronometro").classList.add("hidden");
    document.querySelector(".botones").classList.add("hidden");
    document.querySelector(".laps").classList.add("hidden");
    titleEl.textContent = "Seleccionar Modo";
}

function updateDisplay(time) {
    let ms = time % 1000;
    let seconds = Math.floor(time / 1000) % 60;
    let minutes = Math.floor(time / (1000 * 60)) % 60;
    let hours = Math.floor(time / (1000 * 60 * 60));
    horasEl.textContent = String(hours).padStart(2, '0');
    minutosEl.textContent = String(minutes).padStart(2, '0');
    segundosEl.textContent = String(seconds).padStart(2, '0');
    milisEl.textContent = String(ms).padStart(3, '0');
}

function formatTime(ms) {
    let milliseconds = ms % 1000;
    let seconds = Math.floor(ms / 1000) % 60;
    let minutes = Math.floor(ms / (1000 * 60)) % 60;
    let hours = Math.floor(ms / (1000 * 60 * 60));
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${String(milliseconds).padStart(3, '0')}`;
}
