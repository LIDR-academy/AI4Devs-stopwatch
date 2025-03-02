import Timer from "../domain/Timer";

/**
 * Servicio que gestiona la lógica de aplicación del cronómetro.
 * Actúa como intermediario entre el dominio y la interfaz de usuario.
 */
class TimerService {
  constructor() {
    this.timer = new Timer();
    this.onTick = null;
  }

  /**
   * Inicia el cronómetro y configura la actualización periódica.
   * @param {Function} callback - Función a llamar en cada actualización.
   */
  startTimer(callback) {
    this.onTick = callback;
    this.timer.start();

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.onTick) {
          this.onTick(this.getFormattedTime());
        }
      }, 10); // Actualiza cada 10ms para mostrar milisegundos
    }
  }

  /**
   * Pausa el cronómetro.
   */
  pauseTimer() {
    this.timer.pause();
  }

  /**
   * Reinicia el cronómetro a cero.
   */
  resetTimer() {
    this.timer.reset();
    if (this.onTick) {
      this.onTick(this.getFormattedTime());
    }
  }

  /**
   * Detiene completamente el cronómetro y limpia el intervalo.
   */
  stopTimer() {
    this.timer.pause();
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Verifica si el cronómetro está en marcha.
   * @returns {boolean} true si está en marcha, false si no.
   */
  isRunning() {
    return this.timer.isRunning();
  }

  /**
   * Obtiene el tiempo actual formateado.
   * @returns {Object} Objeto con horas, minutos, segundos y milisegundos.
   */
  getFormattedTime() {
    const totalMilliseconds = this.timer.getTime();

    const milliseconds = totalMilliseconds % 1000;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return {
      hours,
      minutes,
      seconds,
      milliseconds,
      formatted: {
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        milliseconds: {
          tenths: Math.floor(milliseconds / 100),
          hundredths: Math.floor(milliseconds / 10) % 10,
          thousandths: milliseconds % 10,
        },
      },
    };
  }
}

export default TimerService;
