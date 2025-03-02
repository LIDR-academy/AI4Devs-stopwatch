import TimerService from "../../application/TimerService";
import TimerDisplay from "../components/TimerDisplay";
import Button from "../components/Button";

/**
 * Página del cronómetro.
 * @returns {HTMLElement} Elemento contenedor de la página del cronómetro.
 */
function Timer() {
  const timerService = new TimerService();

  const container = document.createElement("div");
  container.className = "timer-container";

  // Fondo con cassette
  const timerBackground = document.createElement("div");
  timerBackground.className = "timer-background";

  // Cargar el SVG del cassette directamente
  timerBackground.innerHTML = `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Carcasa principal del cassette -->
      <rect x="20" y="30" width="260" height="140" rx="10" ry="10" fill="#333333" stroke="#000000" stroke-width="2"/>
      
      <!-- Etiqueta central -->
      <rect x="40" y="50" width="220" height="100" rx="5" ry="5" fill="#e0e0e0" stroke="#000000" stroke-width="1"/>
      
      <!-- Ventanas para ver la cinta -->
      <rect x="60" y="70" width="60" height="60" rx="3" ry="3" fill="#222222" stroke="#000000" stroke-width="1"/>
      <rect x="180" y="70" width="60" height="60" rx="3" ry="3" fill="#222222" stroke="#000000" stroke-width="1"/>
      
      <!-- Carretes (que girarán) -->
      <g id="left-reel">
        <circle cx="90" cy="100" r="25" fill="#111111" stroke="#000000" stroke-width="1"/>
        <circle cx="90" cy="100" r="10" fill="#333333" stroke="#000000" stroke-width="1"/>
        <line x1="90" y1="75" x2="90" y2="125" stroke="#333333" stroke-width="2"/>
        <line x1="65" y1="100" x2="115" y2="100" stroke="#333333" stroke-width="2"/>
      </g>
      
      <g id="right-reel">
        <circle cx="210" cy="100" r="25" fill="#111111" stroke="#000000" stroke-width="1"/>
        <circle cx="210" cy="100" r="10" fill="#333333" stroke="#000000" stroke-width="1"/>
        <line x1="210" y1="75" x2="210" y2="125" stroke="#333333" stroke-width="2"/>
        <line x1="185" y1="100" x2="235" y2="100" stroke="#333333" stroke-width="2"/>
      </g>
      
      <!-- Agujeros para los engranajes -->
      <circle cx="90" cy="100" r="5" fill="#000000"/>
      <circle cx="210" cy="100" r="5" fill="#000000"/>
      
      <!-- Detalles adicionales -->
      <rect x="130" y="80" width="40" height="40" rx="2" ry="2" fill="#cccccc" stroke="#000000" stroke-width="1"/>
      <text x="150" y="105" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">RETRO</text>
      
      <!-- Agujeros para los tornillos -->
      <circle cx="40" cy="50" r="3" fill="#666666" stroke="#000000" stroke-width="1"/>
      <circle cx="260" cy="50" r="3" fill="#666666" stroke="#000000" stroke-width="1"/>
      <circle cx="40" cy="150" r="3" fill="#666666" stroke="#000000" stroke-width="1"/>
      <circle cx="260" cy="150" r="3" fill="#666666" stroke="#000000" stroke-width="1"/>
      
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        #left-reel {
          transform-origin: 90px 100px;
          animation: spin 4s linear infinite;
          animation-play-state: paused;
        }
        #right-reel {
          transform-origin: 210px 100px;
          animation: spin 4s linear infinite;
          animation-play-state: paused;
        }
        .playing #left-reel, .playing #right-reel {
          animation-play-state: running;
        }
      </style>
    </svg>
  `;

  container.appendChild(timerBackground);

  // Crear el display del cronómetro
  const initialTime = timerService.getFormattedTime();
  const display = TimerDisplay({ time: initialTime });

  // Crear los controles
  const controlsContainer = document.createElement("div");
  controlsContainer.className = "controls";

  // Botón de inicio/pausa
  const startPauseButton = Button({
    text: "Start",
    className: "btn-start",
    onClick: () => {
      if (timerService.isRunning()) {
        timerService.pauseTimer();
        startPauseButton.textContent = "Start";
        startPauseButton.className = "btn btn-start";
        clearRestartButton.textContent = "Clear";
        clearRestartButton.className = "btn btn-clear";
        container.classList.remove("running");
      } else {
        timerService.startTimer((time) => {
          display.updateTime(time);
        });
        startPauseButton.textContent = "Pause";
        startPauseButton.className = "btn btn-pause";
        clearRestartButton.textContent = "Restart";
        clearRestartButton.className = "btn btn-restart";
        container.classList.add("running");
      }
    },
  });

  // Botón de limpiar/reiniciar
  const clearRestartButton = Button({
    text: "Clear",
    className: "btn-clear",
    onClick: () => {
      if (timerService.isRunning()) {
        // Reiniciar mientras está en marcha
        timerService.resetTimer();
      } else {
        // Limpiar cuando está pausado
        timerService.resetTimer();
        display.updateTime(timerService.getFormattedTime());
        container.classList.remove("running");
      }
    },
  });

  // Añadir botones al contenedor de controles
  controlsContainer.appendChild(startPauseButton);
  controlsContainer.appendChild(clearRestartButton);

  // Botón para volver a la página de inicio
  const homeButton = Button({
    text: "Volver a Inicio",
    className: "btn-home",
    onClick: () => {
      timerService.stopTimer();

      // Importar dinámicamente para evitar dependencias circulares
      import("./Home").then((module) => {
        const Home = module.default;
        const appContainer = document.getElementById("app");
        appContainer.innerHTML = "";
        appContainer.appendChild(Home());
      });
    },
  });

  // Añadir elementos al contenedor principal
  container.appendChild(display);
  container.appendChild(controlsContainer);
  container.appendChild(homeButton);

  return container;
}

export default Timer;
