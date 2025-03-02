/**
 * Componente que muestra el tiempo del cronómetro.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.time - Objeto con el tiempo formateado.
 * @returns {HTMLElement} Elemento de visualización del tiempo.
 */
function TimerDisplay(props = {}) {
  const {
    time = {
      formatted: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: { tenths: 0, hundredths: 0, thousandths: 0 },
      },
    },
  } = props;

  const displayContainer = document.createElement("div");
  displayContainer.className = "display";

  // Crear el elemento para el tiempo principal (horas:minutos:segundos)
  const mainTime = document.createElement("div");
  mainTime.className = "main-time";
  mainTime.textContent = `${time.formatted.hours}:${time.formatted.minutes}:${time.formatted.seconds}`;

  // Crear el elemento para los milisegundos
  const milliseconds = document.createElement("div");
  milliseconds.className = "milliseconds";
  milliseconds.textContent = `${time.formatted.milliseconds.tenths}${time.formatted.milliseconds.hundredths}${time.formatted.milliseconds.thousandths}`;

  // Añadir los elementos al contenedor
  displayContainer.appendChild(mainTime);
  displayContainer.appendChild(milliseconds);

  /**
   * Actualiza el tiempo mostrado.
   * @param {Object} newTime - Nuevo objeto de tiempo formateado.
   */
  displayContainer.updateTime = function (newTime) {
    mainTime.textContent = `${newTime.formatted.hours}:${newTime.formatted.minutes}:${newTime.formatted.seconds}`;
    milliseconds.textContent = `${newTime.formatted.milliseconds.tenths}${newTime.formatted.milliseconds.hundredths}${newTime.formatted.milliseconds.thousandths}`;
  };

  return displayContainer;
}

export default TimerDisplay;
