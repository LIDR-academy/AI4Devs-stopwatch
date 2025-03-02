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
      } else {
        timerService.startTimer((time) => {
          display.updateTime(time);
        });
        startPauseButton.textContent = "Pause";
        startPauseButton.className = "btn btn-pause";
        clearRestartButton.textContent = "Restart";
        clearRestartButton.className = "btn btn-restart";
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
