// Selección de elementos del DOM
const tabCronometro = document.getElementById("tab-cronometro");
const tabTemporizador = document.getElementById("tab-temporizador");
const cronometroSection = document.getElementById("cronometro");
const temporizadorSection = document.getElementById("temporizador");

// Variables del cronómetro
let cronometroInterval;
let tiempoCronometro = 0;
let corriendoCronometro = false;
const cronometroDisplay = document.getElementById("cronometro-display");
const startPauseButton = document.getElementById("start-pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

// Variables del temporizador
let temporizadorInterval;
let tiempoTemporizador = 0;
let corriendoTemporizador = false;
const temporizadorDisplay = document.getElementById("temporizador-display");
const numPadButtons = document.querySelectorAll(".num-pad .num");
const setTimeButton = document.getElementById("set-time");
const clearTimeButton = document.getElementById("clear-time");
const startPauseTimerButton = document.getElementById("start-pause-timer");
const alarmSound = document.getElementById("alarm-sound");

// Función para cambiar de pestaña
function cambiarPestana(event) {
    if (event.target.id === "tab-cronometro") {
        tabCronometro.classList.add("active");
        tabTemporizador.classList.remove("active");
        cronometroSection.classList.add("active");
        temporizadorSection.classList.remove("active");
    } else {
        tabTemporizador.classList.add("active");
        tabCronometro.classList.remove("active");
        temporizadorSection.classList.add("active");
        cronometroSection.classList.remove("active");
    }
}

// Evento de cambio de pestaña
tabCronometro.addEventListener("click", cambiarPestana);
tabTemporizador.addEventListener("click", cambiarPestana);

// Función para formatear el tiempo en HH:mm:ss.SSS
function formatearTiempo(ms) {
    let horas = Math.floor(ms / 3600000);
    let minutos = Math.floor((ms % 3600000) / 60000);
    let segundos = Math.floor((ms % 60000) / 1000);
    let milisegundos = ms % 1000;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}.${String(milisegundos).padStart(3, "0")}`;
}

// Función para iniciar o pausar el cronómetro
function manejarCronometro() {
    if (corriendoCronometro) {
        clearInterval(cronometroInterval);
        corriendoCronometro = false;
        startPauseButton.textContent = "Reanudar";
        startPauseButton.classList.add("resumed");
    } else {
        let startTime = Date.now() - tiempoCronometro;
        cronometroInterval = setInterval(() => {
            tiempoCronometro = Date.now() - startTime;
            cronometroDisplay.textContent = formatearTiempo(tiempoCronometro);
            localStorage.setItem("cronometro", tiempoCronometro);
        }, 10);
        corriendoCronometro = true;
        startPauseButton.textContent = "Pausar";
        startPauseButton.classList.remove("resumed");
    }
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
    clearInterval(cronometroInterval);
    tiempoCronometro = 0;
    corriendoCronometro = false;
    cronometroDisplay.textContent = "00:00:00.000";
    startPauseButton.textContent = "Iniciar";
    lapsList.innerHTML = "";
    localStorage.removeItem("cronometro");
}

// Función para registrar vueltas
function registrarVuelta() {
    if (corriendoCronometro) {
        let li = document.createElement("li");
        li.textContent = formatearTiempo(tiempoCronometro);
        lapsList.appendChild(li);
    }
}

// Eventos del cronómetro
startPauseButton.addEventListener("click", manejarCronometro);
resetButton.addEventListener("click", reiniciarCronometro);
lapButton.addEventListener("click", registrarVuelta);

// Función para establecer el tiempo del temporizador
let entradaTemporizador = "";

numPadButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (entradaTemporizador.length < 6) {
            entradaTemporizador += button.dataset.num;
            actualizarDisplayTemporizador();
        }
    });
});

function actualizarDisplayTemporizador() {
    let tiempo = parseInt(entradaTemporizador) || 0;
    let segundos = tiempo % 100;
    let minutos = Math.floor((tiempo / 100) % 100);
    let horas = Math.floor(tiempo / 10000);

    tiempoTemporizador = (horas * 3600 + minutos * 60 + segundos) * 1000;
    temporizadorDisplay.textContent = formatearTiempo(tiempoTemporizador);
}

// Función para iniciar/pausar el temporizador
function manejarTemporizador() {
    if (corriendoTemporizador) {
        clearInterval(temporizadorInterval);
        corriendoTemporizador = false;
        startPauseTimerButton.textContent = "Reanudar";
        startPauseTimerButton.classList.add("resumed");
    } else {
        if (tiempoTemporizador > 0) {
            let startTime = Date.now();
            let endTime = startTime + tiempoTemporizador;

            temporizadorInterval = setInterval(() => {
                let tiempoRestante = endTime - Date.now();
                if (tiempoRestante <= 0) {
                    clearInterval(temporizadorInterval);
                    temporizadorDisplay.textContent = "00:00:00.000";
                    alarmSound.play();
                    reiniciarTemporizador();
                } else {
                    tiempoTemporizador = tiempoRestante;
                    temporizadorDisplay.textContent = formatearTiempo(tiempoRestante);
                }
                localStorage.setItem("temporizador", tiempoTemporizador);
            }, 10);

            corriendoTemporizador = true;
            startPauseTimerButton.textContent = "Pausar";
            startPauseTimerButton.classList.remove("resumed");
        }
    }
}

// Función para reiniciar el temporizador
function reiniciarTemporizador() {
    clearInterval(temporizadorInterval);
    tiempoTemporizador = 0;
    entradaTemporizador = "";
    corriendoTemporizador = false;
    temporizadorDisplay.textContent = "00:00:00.000";
    startPauseTimerButton.textContent = "Iniciar";
    localStorage.removeItem("temporizador");
}

// Eventos del temporizador
setTimeButton.addEventListener("click", actualizarDisplayTemporizador);
clearTimeButton.addEventListener("click", reiniciarTemporizador);
startPauseTimerButton.addEventListener("click", manejarTemporizador);

// Cargar estado desde LocalStorage
window.onload = () => {
    if (localStorage.getItem("cronometro")) {
        tiempoCronometro = parseInt(localStorage.getItem("cronometro"));
        cronometroDisplay.textContent = formatearTiempo(tiempoCronometro);
    }
    if (localStorage.getItem("temporizador")) {
        tiempoTemporizador = parseInt(localStorage.getItem("temporizador"));
        temporizadorDisplay.textContent = formatearTiempo(tiempoTemporizador);
    }
};
