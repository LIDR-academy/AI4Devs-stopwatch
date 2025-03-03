// Variables globales
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let isCountdownMode = false;
let countdownTime = 0;

// Elementos del DOM
const displayElement = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const toggleButton = document.getElementById('toggle');
const modeTitle = document.getElementById('mode-title');
const countdownInput = document.getElementById('countdown-input');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const setCountdownButton = document.getElementById('set-countdown');

// Inicialización
function init() {
    updateDisplay('00:00:000');
    
    // Event listeners
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
    toggleButton.addEventListener('click', toggleMode);
    setCountdownButton.addEventListener('click', setCountdown);
}

// Función para iniciar el timer
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    
    if (isCountdownMode) {
        if (countdownTime <= 0) return;
        startTime = Date.now() - (elapsedTime || 0);
        timer = setInterval(updateCountdown, 10);
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
    }
}

// Función para pausar el timer
function pauseTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    clearInterval(timer);
    
    if (isCountdownMode) {
        elapsedTime = Date.now() - startTime;
    } else {
        elapsedTime = Date.now() - startTime;
    }
}

// Función para resetear el timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    
    if (isCountdownMode) {
        countdownTime = 0;
        updateDisplay('00:00:000');
    } else {
        updateDisplay('00:00:000');
    }
}

// Función para cambiar entre cronómetro y cuenta regresiva
function toggleMode() {
    resetTimer();
    isCountdownMode = !isCountdownMode;
    
    if (isCountdownMode) {
        modeTitle.textContent = 'Countdown';
        toggleButton.textContent = 'Switch to Stopwatch';
        countdownInput.classList.remove('hidden');
    } else {
        modeTitle.textContent = 'Stopwatch';
        toggleButton.textContent = 'Switch to Countdown';
        countdownInput.classList.add('hidden');
    }
}

// Función para configurar la cuenta regresiva
function setCountdown() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    if (minutes === 0 && seconds === 0) {
        alert('Por favor ingresa un tiempo válido');
        return;
    }
    
    countdownTime = (minutes * 60 + seconds) * 1000;
    elapsedTime = 0;
    
    const formattedTime = formatTime(countdownTime);
    updateDisplayWithAnimation(formattedTime);
}

// Función para actualizar el cronómetro
function updateStopwatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    const formattedTime = formatTime(elapsedTime);
    updateDisplayWithAnimation(formattedTime);
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;
    const timeRemaining = countdownTime - timeElapsed;
    
    if (timeRemaining <= 0) {
        clearInterval(timer);
        isRunning = false;
        updateDisplayWithAnimation('00:00:000');
        alert('¡Tiempo terminado!');
        return;
    }
    
    const formattedTime = formatTime(timeRemaining);
    updateDisplayWithAnimation(formattedTime);
}

// Función para formatear el tiempo en MM:SS:MMM
function formatTime(timeInMs) {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    
    return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 3)}`;
}

// Función para añadir ceros a la izquierda
function padZero(num, length = 2) {
    return num.toString().padStart(length, '0');
}

// Función para actualizar el display con animación
function updateDisplayWithAnimation(newValue) {
    // Si el valor es diferente al actual, aplicar la animación
    if (displayElement.textContent !== newValue) {
        displayElement.classList.add('digit-changed');
        displayElement.textContent = newValue;
        
        // Quitar la clase después de que termine la animación
        setTimeout(() => {
            displayElement.classList.remove('digit-changed');
        }, 300); // Mismo tiempo que la duración de la animación
    }
}

// Función para actualizar el display sin animación
function updateDisplay(value) {
    displayElement.textContent = value;
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init); 