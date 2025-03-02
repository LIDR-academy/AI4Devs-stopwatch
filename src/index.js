import Home from "./ui/pages/Home";

/**
 * Función principal que inicializa la aplicación.
 */
function initApp() {
  const appContainer = document.getElementById("app");

  if (appContainer) {
    // Limpiar el contenedor
    appContainer.innerHTML = "";

    // Renderizar la página de inicio
    const homePage = Home();
    appContainer.appendChild(homePage);
  } else {
    console.error('No se encontró el elemento con id "app"');
  }
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initApp);
