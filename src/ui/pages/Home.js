import Timer from "./Timer";
import Countdown from "./Countdown";

/**
 * Página de inicio que muestra las opciones de cronómetro y cuenta atrás.
 * @returns {HTMLElement} Elemento contenedor de la página de inicio.
 */
function Home() {
  const container = document.createElement("div");
  container.className = "home-container";

  // Opción de cronómetro
  const timerOption = document.createElement("div");
  timerOption.className = "home-option home-option-timer";

  // Icono de cassette
  const timerIconContainer = document.createElement("div");
  timerIconContainer.className = "home-option-icon";

  // Cargar el SVG del cassette directamente
  timerIconContainer.innerHTML = `
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

  const timerText = document.createElement("div");
  timerText.textContent = "CRONÓMETRO";

  timerOption.appendChild(timerIconContainer);
  timerOption.appendChild(timerText);

  timerOption.addEventListener("click", () => {
    const appContainer = document.getElementById("app");
    appContainer.innerHTML = "";
    appContainer.appendChild(Timer());
  });

  // Opción de cuenta atrás
  const countdownOption = document.createElement("div");
  countdownOption.className = "home-option home-option-countdown";

  // Icono de vinilo
  const countdownIconContainer = document.createElement("div");
  countdownIconContainer.className = "home-option-icon";

  // Cargar el SVG del vinilo directamente
  countdownIconContainer.innerHTML = `
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

  const countdownText = document.createElement("div");
  countdownText.textContent = "CUENTA ATRÁS";

  countdownOption.appendChild(countdownIconContainer);
  countdownOption.appendChild(countdownText);

  countdownOption.addEventListener("click", () => {
    const appContainer = document.getElementById("app");
    appContainer.innerHTML = "";
    appContainer.appendChild(Countdown());
  });

  // Añadir opciones al contenedor
  container.appendChild(timerOption);
  container.appendChild(countdownOption);

  return container;
}

export default Home;
