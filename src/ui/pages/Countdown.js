import CountdownService from "../../application/CountdownService";
import CountdownDisplay from "../components/CountdownDisplay";
import Button from "../components/Button";

/**
 * Página de la cuenta atrás.
 * @returns {HTMLElement} Elemento contenedor de la página de cuenta atrás.
 */
function Countdown() {
  const countdownService = new CountdownService();

  const container = document.createElement("div");
  container.className = "countdown-container";

  // Crear el display de la cuenta atrás
  const initialTime = countdownService.getFormattedTime();
  const display = CountdownDisplay({ time: initialTime });

  // Crear los controles
  const controlsContainer = document.createElement("div");
  controlsContainer.className = "controls";

  // Botón de pausa (inicialmente oculto)
  const pauseButton = Button({
    text: "Pause",
    className: "btn-pause",
    onClick: () => {
      if (countdownService.isRunning()) {
        countdownService.pauseCountdown();
        // Ocultar el botón de pausa cuando se pausa la cuenta atrás
        pauseButton.style.display = "none";
      }
    },
  });

  // Inicialmente ocultar el botón de pausa
  pauseButton.style.display = "none";

  // Botón de limpiar
  const clearButton = Button({
    text: "Clear",
    className: "btn-clear",
    onClick: () => {
      if (!countdownService.isRunning()) {
        countdownService.clearCountdown();
        display.updateTime(countdownService.getFormattedTime());

        // Mostrar los botones de presets nuevamente
        presetButtonsContainer.style.display = "flex";
        clearButton.style.display = "none";
        pauseButton.style.display = "none";
      }
    },
  });

  // Inicialmente ocultar el botón de limpiar
  clearButton.style.display = "none";

  // Crear contenedor para los botones de presets
  const presetButtonsContainer = document.createElement("div");
  presetButtonsContainer.className = "preset-buttons";

  // Definir los presets de tiempo
  const presets = [
    { text: "10 s", minutes: 10 / 60 },
    { text: "20 s", minutes: 20 / 60 },
    { text: "30 s", minutes: 30 / 60 },
    { text: "1 min", minutes: 1 },
    { text: "2 min", minutes: 2 },
    { text: "3 min", minutes: 3 },
    { text: "5 min", minutes: 5 },
    { text: "10 min", minutes: 10 },
    { text: "15 min", minutes: 15 },
    { text: "20 min", minutes: 20 },
    { text: "30 min", minutes: 30 },
    { text: "1 h", minutes: 60 },
    { text: "2 h", minutes: 120 },
    { text: "3 h", minutes: 180 },
    { text: "5 h", minutes: 300 },
  ];

  // Crear botones para cada preset
  presets.forEach((preset) => {
    const presetButton = Button({
      text: preset.text,
      className: "btn-preset",
      onClick: () => {
        countdownService.setTime(preset.minutes);
        display.updateTime(countdownService.getFormattedTime());

        // Ocultar los presets y mostrar los botones de control
        presetButtonsContainer.style.display = "none";
        clearButton.style.display = "block";
        pauseButton.style.display = "block";

        // Iniciar la cuenta atrás automáticamente
        countdownService.startCountdown(
          (time) => {
            display.updateTime(time);
          },
          () => {
            // Cuando la cuenta atrás finaliza
            // Mostrar los botones de presets nuevamente
            presetButtonsContainer.style.display = "flex";
            clearButton.style.display = "none";
            pauseButton.style.display = "none";
          }
        );
      },
    });

    presetButtonsContainer.appendChild(presetButton);
  });

  // Añadir botones al contenedor de controles
  controlsContainer.appendChild(pauseButton);
  controlsContainer.appendChild(clearButton);

  // Botón para volver a la página de inicio
  const homeButton = Button({
    text: "Volver a Inicio",
    className: "btn-home",
    onClick: () => {
      countdownService.stopCountdown();

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
  container.appendChild(presetButtonsContainer);
  container.appendChild(homeButton);

  return container;
}

export default Countdown;
