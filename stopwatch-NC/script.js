let timer;
let isRunning = false;
let isCountdown = false;
let startTime = 0;
let elapsedTime = 0;
let countdownTime = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const clearButton = document.getElementById("clear");
const controls = document.getElementById("controls");
const countdownSettings = document.getElementById("countdown-settings");
const modeRadios = document.querySelectorAll("input[name='mode']");
const setCountdownButton = document.getElementById("setCountdown");

// Mostrar/Ocultar los controles de cuenta regresiva
modeRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    isCountdown = this.value === "countdown";
    countdownSettings.style.display = isCountdown ? "block" : "none";
  });
});

// Función para actualizar el display
function updateDisplay(time) {
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  display.innerHTML =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (milliseconds < 10 ? "0" : "") +
    milliseconds;
}

// Función para iniciar o pausar el cronómetro
function startPause() {
  if (!isRunning) {
    isRunning = true;
    startButton.textContent = "Pause";
    controls.style.display = "none"; // Ocultar controles al iniciar

    if (isCountdown) {
      startCountdown();
    } else {
      startStopwatch();
    }
  } else {
    isRunning = false;
    startButton.textContent = "Start";
    clearInterval(timer);
  }
}

// Función para iniciar el cronómetro progresivo
function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay(elapsedTime);
  }, 10);
}

// Función para iniciar la cuenta regresiva
function startCountdown() {
  startTime = Date.now();
  timer = setInterval(() => {
    let remainingTime = countdownTime - (Date.now() - startTime);

    if (remainingTime <= 0) {
      clearInterval(timer);
      updateDisplay(0);
      display.classList.add("alert");
      isRunning = false;
      startButton.textContent = "Start";
      alert("¡Tiempo terminado!");
    } else {
      updateDisplay(remainingTime);
    }
  }, 10);
}

// Función para reiniciar el cronómetro o cuenta regresiva
function clearTimer() {
  clearInterval(timer);
  isRunning = false;
  startButton.textContent = "Start";
  elapsedTime = 0;
  updateDisplay(0);
  display.classList.remove("alert");
  controls.style.display = "block"; // Mostrar controles al reiniciar
}

// Función para establecer un tiempo de cuenta regresiva
function setCountdown() {
  let minutes = parseInt(document.getElementById("minutes").value);
  let seconds = parseInt(document.getElementById("seconds").value);
  let milliseconds = parseInt(document.getElementById("milliseconds").value);

  countdownTime = (minutes * 60 + seconds) * 1000 + milliseconds;
  updateDisplay(countdownTime);
}

setCountdownButton.addEventListener("click", setCountdown);
startButton.addEventListener("click", startPause);
clearButton.addEventListener("click", clearTimer);
