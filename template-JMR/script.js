let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const display = document.querySelector(".display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");

function updateTime() {
    const currentTime = Date.now() - startTime + elapsedTime;
    let hours = Math.floor(currentTime / 3600000);
    let minutes = Math.floor((currentTime % 3600000) / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);
    let milliseconds = currentTime % 1000;

    display.textContent = 
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (!running) {
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
        startBtn.style.display = "none";
        stopBtn.style.display = "inline-block";
        running = true;
    }
});

stopBtn.addEventListener("click", () => {
    if (running) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        startBtn.style.display = "inline-block";
        stopBtn.style.display = "none";
        running = false;
    }
});

clearBtn.addEventListener("click", () => {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    display.textContent = "00:00:00.000";
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
});