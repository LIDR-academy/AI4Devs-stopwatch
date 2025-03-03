let level = 1;
let timer;
let seconds = 0;

document.addEventListener("DOMContentLoaded", estado_inicial);
function estado_inicial() {
    document.body.style.background = "white";
    const title = document.getElementById("title");
    const timerContainer = document.getElementById("timer-container");
    const buttonsContainer = document.getElementById("buttons-container");
    const externalTimer = document.getElementById("externalTimer");
    const dinoContainer = document.getElementById("dinoContainer");
    const specialBtn = document.getElementById("specialBtn");
    const startStopBtn = document.getElementById("startStopBtn");
    const resetBtn = document.getElementById("resetBtn");
    const timer = document.getElementById("timer");

    // Restaurar visibilidad de los números del cronómetro
    timer.style.display = "block";
    timer.style.backgroundColor = "white";
    timer.style.color = "black";

    // Restaurar el título
    title.innerHTML = "<span class='highlight'>Trabajo de un principiante</span> haciendo la tarea...";
    title.style.textAlign = "center";
    title.style.color = "black";
    title.style.fontFamily = "Arial, sans-serif";
    
    // Restaurar visibilidad de los elementos
    timerContainer.style.display = "flex";
    buttonsContainer.style.display = "flex";
    externalTimer.style.display = "none";
    dinoContainer.style.display = "none";

    // Restaurar apariencia y funcionalidad del botón 3
    specialBtn.style.display = "flex";
    specialBtn.style.background = "linear-gradient(to right, #4CAF50, #2E7D32)";
    specialBtn.style.color = "white";
    specialBtn.style.fontSize = "18px";
    specialBtn.style.fontWeight = "bold";
    specialBtn.style.border = "2px solid #2E7D32";
    specialBtn.style.borderRadius = "10px";
    specialBtn.style.padding = "10px 20px";
    specialBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    specialBtn.style.transition = "all 0.3s ease";
    specialBtn.onmouseover = () => specialBtn.style.transform = "scale(1.1)";
    specialBtn.onmouseout = () => specialBtn.style.transform = "scale(1)";
    specialBtn.onclick = function() {
        alert("La verdad no hace mucho este botón");
    };

    // Restaurar apariencia de los botones 1 y 2
    startStopBtn.style.background = "linear-gradient(to right, #1E3A5F, #0D47A1)";
    startStopBtn.style.color = "white";
    startStopBtn.style.fontSize = "18px";
    startStopBtn.style.fontWeight = "bold";
    startStopBtn.style.border = "2px solid #0D47A1";
    startStopBtn.style.borderRadius = "10px";
    startStopBtn.style.padding = "10px 20px";
    startStopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    startStopBtn.style.transition = "all 0.3s ease";
    startStopBtn.onmouseover = () => startStopBtn.style.transform = "scale(1.1)";
    startStopBtn.onmouseout = () => startStopBtn.style.transform = "scale(1)";

    resetBtn.style.background = "linear-gradient(to right, #1E3A5F, #0D47A1)";
    resetBtn.style.color = "white";
    resetBtn.style.fontSize = "18px";
    resetBtn.style.fontWeight = "bold";
    resetBtn.style.border = "2px solid #0D47A1";
    resetBtn.style.borderRadius = "10px";
    resetBtn.style.padding = "10px 20px";
    resetBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    resetBtn.style.transition = "all 0.3s ease";
    resetBtn.onmouseover = () => resetBtn.style.transform = "scale(1.1)";
    resetBtn.onmouseout = () => resetBtn.style.transform = "scale(1)";
}

function estado_intermedio() {
    document.body.style.background = "#4682B4";
    
    const title = document.getElementById("title");
    const startStopBtn = document.getElementById("startStopBtn");
    const resetBtn = document.getElementById("resetBtn");
    const specialBtn = document.getElementById("specialBtn");
    const timer = document.getElementById("timer");
    const buttonsContainer = document.getElementById("buttons-container");
    const externalTimer = document.getElementById("externalTimer");

    if (!title || !startStopBtn || !resetBtn || !specialBtn || !timer || !buttonsContainer || !externalTimer) {
        console.error("Uno o más elementos no existen en el DOM.");
        return;
    }

    // Restaurar visibilidad de los números del cronómetro
    timer.style.display = "block";
    timer.style.visibility = "visible";
    timer.style.backgroundColor = "#1565C0";
    timer.style.color = "white";
    timer.style.padding = "10px";
    timer.style.borderRadius = "5px";

    timer.style.color = "black";


    // Restaurar visibilidad de los botones 1 y 2
    buttonsContainer.style.display = "flex";

    // Ocultar el frame del cronómetro
    externalTimer.style.display = "none";

    title.innerHTML = "<span class='highlight'>Trabajo de un intermedio</span> haciendo la tarea...";
    title.style.textAlign = "center";
    title.style.color = "white";
    title.style.fontFamily = "'Orbitron', sans-serif";

    // Restaurar apariencia y funcionalidad del botón 3
    specialBtn.style.display = "flex";
    specialBtn.style.background = "linear-gradient(to right, #1565C0, #0D47A1)";
    specialBtn.style.color = "white";
    specialBtn.style.fontSize = "18px";
    specialBtn.style.fontWeight = "bold";
    specialBtn.style.border = "2px solid #0D47A1";
    specialBtn.style.borderRadius = "10px";
    specialBtn.style.padding = "10px 20px";
    specialBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    specialBtn.style.transition = "all 0.3s ease";
    specialBtn.onmouseover = () => specialBtn.style.transform = "scale(1.1)";
    specialBtn.onmouseout = () => specialBtn.style.transform = "scale(1)";
    specialBtn.onclick = mostrarLogo;

    // Restaurar apariencia de los botones 1 y 2
    [startStopBtn, resetBtn].forEach(btn => {
        btn.style.background = "linear-gradient(to right, #1565C0, #0D47A1)";
        btn.style.color = "white";
        btn.style.fontSize = "18px";
        btn.style.fontWeight = "bold";
        btn.style.border = "2px solid #0D47A1";
        btn.style.borderRadius = "10px";
        btn.style.padding = "10px 20px";
        btn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
        btn.style.transition = "all 0.3s ease";
        btn.onmouseover = () => btn.style.transform = "scale(1.1)";
        btn.onmouseout = () => btn.style.transform = "scale(1)";
    });
}

function estado_final() {
    document.body.style.background = "linear-gradient(to bottom, black, yellow)";
    const title = document.getElementById("title");
    const buttonsContainer = document.getElementById("buttons-container");
    const timerContainer = document.getElementById("timer-container");
    const externalTimer = document.getElementById("externalTimer");
    const dinoContainer = document.getElementById("dinoContainer");
    const specialBtn = document.getElementById("specialBtn");
    const timer = document.getElementById("timer");

    // Modificar el título
    title.innerHTML = "<span class='highlight'>Trabajo de un <span class='ai4devs-highlight'>AI4DEVS</span></span> haciendo la tarea...";
    title.style.textAlign = "center";
    title.style.color = "white";
    title.style.fontFamily = "'Press Start 2P', cursive";

    // Ocultar botones 1 y 2 y el cronómetro
    buttonsContainer.style.display = "none";
    timerContainer.style.display = "none";
    timer.style.display = "none";

    // Mostrar y bajar el frame del cronómetro para evitar superposición
    externalTimer.style.display = "block";
    externalTimer.style.marginTop = "40px";

    // Ocultar el frame del Dino
    dinoContainer.style.display = "none";

    // Estilizar el botón 3
    specialBtn.style.display = "flex";
    specialBtn.style.background = "linear-gradient(to right, #ff6a00, #ee0979)";
    specialBtn.style.color = "white";
    specialBtn.style.padding = "15px 30px";
    specialBtn.style.fontSize = "22px";
    specialBtn.style.fontWeight = "bold";
    specialBtn.style.border = "none";
    specialBtn.style.borderRadius = "12px";
    specialBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    specialBtn.style.transition = "all 0.3s ease";
    specialBtn.onmouseover = () => specialBtn.style.transform = "scale(1.1)";
    specialBtn.onmouseout = () => specialBtn.style.transform = "scale(1)";
    specialBtn.onclick = animateLogo;

}

function triggerDinoJump() {
    document.querySelector('.ai4devs-highlight').classList.add("highlighted-text");
    const dinoFrame = document.querySelector("#dinoContainer iframe");
    dinoFrame.contentWindow.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    setTimeout(() => {
        document.querySelector('.ai4devs-highlight').classList.remove("highlighted-text");
    }, 500);
}

function changeLevel(newLevel) {
    level = newLevel;
    document.body.className = `level-${level}`;
    if (level === 1) {
        estado_inicial();
    } else if (level === 2) {
        estado_intermedio();
    } else {
        estado_final()
    }
}

function animateLogo() {
    const logo = document.querySelector(".logo");
    logo.style.transition = "transform 0.5s ease-in-out";
    logo.style.transform = "rotate(360deg) scale(1.2)";
    logo.style.color = "white";
    setTimeout(() => {
        logo.style.transform = "rotate(0deg) scale(1)";
    }, 800);
}
function mostrarLogo() {
    const logo = document.querySelector(".logo");
    logo.style.display = "block";
    logo.style.color = "black";
    logo.style.transition = "color 0.5s ease-in-out";
}






