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

  // Fondo con vinilo
  const countdownBackground = document.createElement("div");
  countdownBackground.className = "countdown-background";

  // Cargar el SVG del vinilo directamente
  countdownBackground.innerHTML = `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Disco de vinilo -->
      <g id="vinyl-disc">
        <!-- Disco exterior -->
        <circle cx="150" cy="150" r="140" fill="#111111" stroke="#000000" stroke-width="2"/>
        
        <!-- Surcos del disco -->
        <circle cx="150" cy="150" r="130" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="120" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="110" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="100" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="90" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="80" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="70" fill="none" stroke="#222222" stroke-width="1"/>
        <circle cx="150" cy="150" r="60" fill="none" stroke="#222222" stroke-width="1"/>
        
        <!-- Etiqueta central -->
        <circle cx="150" cy="150" r="50" fill="#e76e55" stroke="#000000" stroke-width="1"/>
        <circle cx="150" cy="150" r="20" fill="#111111" stroke="#000000" stroke-width="1"/>
        
        <!-- Texto en la etiqueta -->
        <text x="150" y="140" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#ffffff">RETRO</text>
        <text x="150" y="160" font-family="Arial" font-size="10" text-anchor="middle" fill="#ffffff">COUNTDOWN</text>
        
        <!-- Detalles adicionales -->
        <circle cx="150" cy="150" r="5" fill="#000000"/>
        
        <!-- Reflejo para dar efecto brillante -->
        <ellipse cx="120" cy="120" rx="60" ry="20" fill="rgba(255, 255, 255, 0.1)" transform="rotate(-30, 120, 120)"/>
      </g>
      
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        #vinyl-disc {
          transform-origin: 150px 150px;
          animation: spin 10s linear infinite;
          animation-play-state: paused;
        }
        .playing #vinyl-disc {
          animation-play-state: running;
        }
      </style>
    </svg>
  `;

  container.appendChild(countdownBackground);

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
        container.classList.remove("running");
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
        container.classList.remove("running");
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
            container.classList.remove("running");
          }
        );

        // Activar la animación del vinilo
        container.classList.add("running");
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
