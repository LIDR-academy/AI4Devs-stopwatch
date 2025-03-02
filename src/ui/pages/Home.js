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
  timerOption.className = "home-option";
  timerOption.textContent = "CRONÓMETRO";
  timerOption.addEventListener("click", () => {
    const appContainer = document.getElementById("app");
    appContainer.innerHTML = "";
    appContainer.appendChild(Timer());
  });

  // Opción de cuenta atrás
  const countdownOption = document.createElement("div");
  countdownOption.className = "home-option";
  countdownOption.textContent = "CUENTA ATRÁS";
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
