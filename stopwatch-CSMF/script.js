document.getElementById("btnStopwatch").addEventListener("click", function () {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("stopwatch").classList.remove("hidden");
});

document.getElementById("btnCountdown").addEventListener("click", function () {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");
});

document.getElementById("swBack").addEventListener("click", function () {
    document.getElementById("stopwatch").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
});

document.getElementById("cdBack").addEventListener("click", function () {
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
});

// Cronómetro
let swRunning = false, swTime = 0, swInterval;
const swStartButton = document.getElementById("swStart");

swStartButton.addEventListener("click", function () {
    if (!swRunning) {
        swRunning = true;
        swStartButton.textContent = "Pause";
        swStartButton.className = "green";
        swInterval = setInterval(() => {
            swTime += 10;
            updateStopwatch();
        }, 10);
    } else {
        swRunning = false;
        swStartButton.textContent = "Continue";
        swStartButton.className = "blue";
        clearInterval(swInterval);
    }
});

document.getElementById("swClear").addEventListener("click", function () {
    swRunning = false;
    swTime = 0;
    clearInterval(swInterval);
    swStartButton.textContent = "Start";
    swStartButton.className = "green";
    updateStopwatch();
});

function updateStopwatch() {
    let ms = swTime % 1000;
    let sec = Math.floor(swTime / 1000) % 60;
    let min = Math.floor(swTime / 60000) % 60;
    let hr = Math.floor(swTime / 3600000);
    document.getElementById("swHours").textContent = hr.toString().padStart(2, "0");
    document.getElementById("swMinutes").textContent = min.toString().padStart(2, "0");
    document.getElementById("swSeconds").textContent = sec.toString().padStart(2, "0");
    document.getElementById("swMillis").textContent = ms.toString().padStart(3, "0");
}

// Cuenta regresiva
let cdInput = "";
document.querySelectorAll(".num").forEach(button => {
    button.addEventListener("click", function () {
        cdInput = (cdInput + this.dataset.value).slice(-6);
        updateCountdownDisplay();
    });
});

document.getElementById("cdClear").addEventListener("click", function () {
    cdInput = "";
    updateCountdownDisplay();
});

function updateCountdownDisplay() {
    let sec = parseInt(cdInput) || 0;
    let min = Math.floor(sec / 60);
    let hr = Math.floor(min / 60);
    sec %= 60;
    min %= 60;
    document.getElementById("cdHours").textContent = hr.toString().padStart(2, "0");
    document.getElementById("cdMinutes").textContent = min.toString().padStart(2, "0");
    document.getElementById("cdSeconds").textContent = sec.toString().padStart(2, "0");
}
