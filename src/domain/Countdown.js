/**
 * Clase que representa el dominio de una cuenta atrás.
 * Maneja la lógica de negocio relacionada con el tiempo restante.
 */
class Countdown {
  constructor() {
    this.duration = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.completed = false;
  }

  /**
   * Establece la duración de la cuenta atrás.
   * @param {number} milliseconds - Duración en milisegundos.
   */
  setDuration(milliseconds) {
    this.duration = milliseconds;
    this.elapsedTime = 0;
    this.completed = false;
  }

  /**
   * Inicia la cuenta atrás.
   */
  start() {
    if (!this.running && !this.completed && this.duration > 0) {
      this.startTime = Date.now() - this.elapsedTime;
      this.running = true;
    }
  }

  /**
   * Pausa la cuenta atrás.
   */
  pause() {
    if (this.running) {
      this.elapsedTime = Date.now() - this.startTime;
      this.running = false;
    }
  }

  /**
   * Reinicia la cuenta atrás con la misma duración.
   */
  reset() {
    this.elapsedTime = 0;
    this.completed = false;
    if (this.running) {
      this.startTime = Date.now();
    }
  }

  /**
   * Limpia la cuenta atrás y la detiene.
   */
  clear() {
    this.duration = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.completed = false;
  }

  /**
   * Obtiene el tiempo restante de la cuenta atrás.
   * @returns {number} Tiempo restante en milisegundos.
   */
  getRemainingTime() {
    if (this.duration === 0) return 0;

    let elapsed = this.running ? Date.now() - this.startTime : this.elapsedTime;
    let remaining = this.duration - elapsed;

    if (remaining <= 0) {
      remaining = 0;
      if (this.running) {
        this.running = false;
        this.completed = true;
      }
    }

    return remaining;
  }

  /**
   * Verifica si la cuenta atrás está en marcha.
   * @returns {boolean} true si está en marcha, false si no.
   */
  isRunning() {
    return this.running;
  }

  /**
   * Verifica si la cuenta atrás ha finalizado.
   * @returns {boolean} true si ha finalizado, false si no.
   */
  isCompleted() {
    return this.completed;
  }
}

export default Countdown;
