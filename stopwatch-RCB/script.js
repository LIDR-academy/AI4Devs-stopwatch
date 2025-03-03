
// Variables Globales
let cronometro, temporizador, intervalos;
let tiempo = 0, timerTime = 0, intervalTime = 30000, breakTime = 30000;
let isRunning = false, isTimerRunning = false, isIntervalRunning = false;
let partials = [];

// Cambiar pantalla
function showScreen(screen) {
    document.querySelectorAll("div").forEach(div => div.classList.add("hidden"));
    document.getElementById(screen + "-screen").classList.remove("hidden");
}

// Cronómetro
function startCronometro() {
    if (!isRunning) {
        isRunning = true;
        cronometro = setInterval(() => {
            tiempo += 10;
            document.getElementById("cronometro-display").innerText = formatTime(tiempo);
        }, 10);
    }
}

function pauseCronometro() {
    clearInterval(cronometro);
    isRunning = false;
}

function resetCronometro() {
    clearInterval(cronometro);
    tiempo = 0;
    isRunning = false;
    document.getElementById("cronometro-display").innerText = "00:00:00.000";
    partials = [];
    document.getElementById("partial-list").innerHTML = "";
    localStorage.removeItem("cronometro");
}

function partialStop() {
    partials.push(formatTime(tiempo));
    let li = document.createElement("li");
    li.innerText = formatTime(tiempo);
    document.getElementById("partial-list").appendChild(li);
    saveToLocalStorage();
}

// Temporizador
document.getElementById("timer-input").addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^0-9:]/g, "");
    let parts = value.split(":").map(num => parseInt(num) || 0);
    timerTime = (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
    document.getElementById("timer-display").innerText = formatTime(timerTime);
});

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        temporizador = setInterval(() => {
            if (timerTime <= 0) {
                clearInterval(temporizador);
                isTimerRunning = false;
                playSound();
                return;
            }
            timerTime -= 1000;
            document.getElementById("timer-display").innerText = formatTime(timerTime);
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(temporizador);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(temporizador);
    isTimerRunning = false;
    timerTime = 0;
    document.getElementById("timer-display").innerText = "00:00:00";
}

// Intervalos
document.getElementById("interval-duration").addEventListener("input", (e) => {
    intervalTime = parseTimeInput(e.target.value);
});

document.getElementById("interval-break").addEventListener("input", (e) => {
    breakTime = parseTimeInput(e.target.value);
});

function startInterval() {
    if (!isIntervalRunning) {
        isIntervalRunning = true;
        runIntervalCycle();
    }
}

function runIntervalCycle() {
    let intervalCountdown = setInterval(() => {
        if (intervalTime <= 0) {
            clearInterval(intervalCountdown);
            playSound();
            setTimeout(() => {
                runBreakCycle();
            }, 500);
            return;
        }
        intervalTime -= 1000;
        document.getElementById("interval-display").innerText = formatTime(intervalTime);
    }, 1000);
}

function runBreakCycle() {
    let breakCountdown = setInterval(() => {
        if (breakTime <= 0) {
            clearInterval(breakCountdown);
            playSound();
            isIntervalRunning = false;
            return;
        }
        breakTime -= 1000;
        document.getElementById("interval-display").innerText = formatTime(breakTime);
    }, 1000);
}

function resetInterval() {
    clearInterval(intervalos);
    intervalTime = 30000;
    breakTime = 30000;
    isIntervalRunning = false;
    document.getElementById("interval-display").innerText = "00:30";
}

// Formatear tiempo
function formatTime(ms) {
    let date = new Date(ms);
    return `${String(date.getUTCHours()).padStart(2, '0')}:` +
           `${String(date.getUTCMinutes()).padStart(2, '0')}:` +
           `${String(date.getUTCSeconds()).padStart(2, '0')}`;
}

function parseTimeInput(value) {
    let parts = value.split(":").map(num => parseInt(num) || 0);
    return (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
}

// Sonido por defecto del navegador
function playSound() {
    let audio = new Audio();
    audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
    audio.play();
}

// Guardar estado en LocalStorage
function saveToLocalStorage() {
    localStorage.setItem("cronometro", JSON.stringify({ tiempo, partials }));
}

function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("cronometro"));
    if (data) {
        tiempo = data.tiempo;
        partials = data.partials;
        document.getElementById("cronometro-display").innerText = formatTime(tiempo);
        document.getElementById("partial-list").innerHTML = partials.map(time => `<li>${time}</li>`).join("");
    }
}

window.onload = loadFromLocalStorage;
