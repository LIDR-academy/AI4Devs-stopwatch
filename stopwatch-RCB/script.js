// Variables Globales
let cronometro, temporizador, intervalos;
let tiempo = 0,
  timerTime = 0,
  intervalTime = 30000,
  breakTime = 30000;
let isRunning = false,
  isTimerRunning = false,
  isIntervalRunning = false;
let partials = [];

// Habilitar edición de tiempo en Temporizador e Intervalos
document.querySelectorAll(".editable").forEach(element => {
    element.addEventListener("input", (e) => {
        let value = e.target.innerText.replace(/[^0-9:]/g, "");
        let parts = value.split(":").map(num => parseInt(num) || 0);
        let totalMs = (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
        e.target.dataset.time = totalMs;
    });
});

// -------------------- CAMBIO DE PANTALLA --------------------
function showScreen(screen) {
    // Ocultar todas las pantallas funcionales
    document.querySelectorAll(".screen").forEach(div => div.classList.add("hidden"));
    // Mostrar solo la pantalla seleccionada
    document.getElementById(screen + "-screen").classList.remove("hidden");
}

// -------------------- CRONÓMETRO --------------------
function startCronometro() {
  if (!isRunning) {
    isRunning = true;
    cronometro = setInterval(() => {
      tiempo += 10;
      document.getElementById("cronometro-display").innerText =
        formatTime(tiempo);
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

// -------------------- TEMPORIZADOR --------------------
document.getElementById("timer-display").addEventListener("input", (e) => {
  timerTime = parseTimeInput(e.target.innerText);
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
      document.getElementById("timer-display").innerText =
        formatTime(timerTime);
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

// -------------------- INTERVALOS --------------------
document.getElementById("interval-display").addEventListener("input", (e) => {
  intervalTime = parseTimeInput(e.target.innerText);
});

document.getElementById("break-display").addEventListener("input", (e) => {
  breakTime = parseTimeInput(e.target.innerText);
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
    document.getElementById("interval-display").innerText =
      formatTime(intervalTime);
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
    document.getElementById("break-display").innerText = formatTime(breakTime);
  }, 1000);
}

function resetInterval() {
  clearInterval(intervalos);
  intervalTime = 30000;
  breakTime = 30000;
  isIntervalRunning = false;
  document.getElementById("interval-display").innerText = "00:30";
  document.getElementById("break-display").innerText = "00:30";
}

// -------------------- UTILIDADES --------------------
function formatTime(ms) {
  let date = new Date(ms);
  return (
    `${String(date.getUTCHours()).padStart(2, "0")}:` +
    `${String(date.getUTCMinutes()).padStart(2, "0")}:` +
    `${String(date.getUTCSeconds()).padStart(2, "0")}`
  );
}

function parseTimeInput(value) {
  let parts = value.split(":").map((num) => parseInt(num) || 0);
  return (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
}

// -------------------- SONIDO --------------------
function playSound() {
  let audio = new Audio();
  audio.src =
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
  audio.play();
}

// -------------------- LOCAL STORAGE --------------------
function saveToLocalStorage() {
  localStorage.setItem("cronometro", JSON.stringify({ tiempo, partials }));
}

function loadFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("cronometro"));
  if (data) {
    tiempo = data.tiempo;
    partials = data.partials;
    document.getElementById("cronometro-display").innerText =
      formatTime(tiempo);
    document.getElementById("partial-list").innerHTML = partials
      .map((time) => `<li>${time}</li>`)
      .join("");
  }
}

window.onload = loadFromLocalStorage;
