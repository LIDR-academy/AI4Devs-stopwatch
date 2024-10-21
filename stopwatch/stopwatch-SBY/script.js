// Variables para el cronómetro
let stopwatchInterval;
let stopwatchTime = 0;

// Variables para la cuenta regresiva
let countdownInterval;
let countdownTime = 0;

// Función para formatear el tiempo (hh:mm:ss:ms)
function formatTime(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Función para formatear el tiempo (hh:mm:ss) en la cuenta regresiva
function formatCountdown(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Funciones del cronómetro
document.getElementById('startStopwatch').addEventListener('click', () => {
    stopwatchInterval = setInterval(() => {
        stopwatchTime += 10;
        document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
    }, 10);
    document.getElementById('startStopwatch').classList.add('hidden');
    document.getElementById('pauseStopwatch').classList.remove('hidden');
});

document.getElementById('pauseStopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    document.getElementById('pauseStopwatch').classList.add('hidden');
    document.getElementById('resetStopwatch').classList.remove('hidden');
    document.getElementById('startStopwatch').classList.remove('hidden');
});

document.getElementById('resetStopwatch').addEventListener('click', () => {
    stopwatchTime = 0;
    document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
    document.getElementById('resetStopwatch').classList.add('hidden');
});

// Funciones de la cuenta regresiva
document.getElementById('configCountdown').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('setCountdown').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    countdownTime = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
    document.getElementById('countdown').textContent = formatCountdown(countdownTime);
    document.getElementById('modal').style.display = 'none';
    document.getElementById('startCountdown').classList.remove('hidden');
});

document.getElementById('startCountdown').addEventListener('click', () => {
    countdownInterval = setInterval(() => {
        countdownTime -= 1000;
        document.getElementById('countdown').textContent = formatCountdown(countdownTime);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            alert("¡Cuenta regresiva finalizada!");
            document.getElementById('resetCountdown').classList.remove('hidden');
        }
    }, 1000);

    document.getElementById('startCountdown').classList.add('hidden');
    document.getElementById('pauseCountdown').classList.remove('hidden');
});

document.getElementById('pauseCountdown').addEventListener('click', () => {
    clearInterval(countdownInterval);
    document.getElementById('pauseCountdown').classList.add('hidden');
    document.getElementById('resetCountdown').classList.remove('hidden');
    document.getElementById('startCountdown').classList.remove('hidden');
});

document.getElementById('resetCountdown').addEventListener('click', () => {
    countdownTime = 0;
    document.getElementById('countdown').textContent = formatCountdown(countdownTime);
    document.getElementById('resetCountdown').classList.add('hidden');
});
