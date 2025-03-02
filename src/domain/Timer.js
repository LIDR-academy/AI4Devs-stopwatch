/**
 * Clase que representa el dominio de un cronómetro.
 * Maneja la lógica de negocio relacionada con el tiempo transcurrido.
 */
class Timer {
  constructor() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.intervalId = null;
  }

  /**
   * Inicia el cronómetro.
   */
  start() {
    if (!this.running) {
      this.startTime = Date.now() - this.elapsedTime;
      this.running = true;
    }
  }

  /**
   * Pausa el cronómetro.
   */
  pause() {
    if (this.running) {
      this.elapsedTime = Date.now() - this.startTime;
      this.running = false;
    }
  }

  /**
   * Reinicia el cronómetro a cero.
   */
  reset() {
    this.elapsedTime = 0;
    if (this.running) {
      this.startTime = Date.now();
    }
  }

  /**
   * Obtiene el tiempo actual del cronómetro.
   * @returns {number} Tiempo transcurrido en milisegundos.
   */
  getTime() {
    if (this.running) {
      return Date.now() - this.startTime;
    }
    return this.elapsedTime;
  }

  /**
   * Verifica si el cronómetro está en marcha.
   * @returns {boolean} true si está en marcha, false si no.
   */
  isRunning() {
    return this.running;
  }
}

export default Timer;
