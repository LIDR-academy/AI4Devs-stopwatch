import Countdown from "../domain/Countdown";

/**
 * Servicio que gestiona la lógica de aplicación de la cuenta atrás.
 * Actúa como intermediario entre el dominio y la interfaz de usuario.
 */
class CountdownService {
  constructor() {
    this.countdown = new Countdown();
    this.onTick = null;
    this.onComplete = null;
    this.intervalId = null;
  }

  /**
   * Establece la duración de la cuenta atrás.
   * @param {number} minutes - Minutos para la cuenta atrás.
   */
  setTime(minutes) {
    const milliseconds = minutes * 60 * 1000;
    this.countdown.setDuration(milliseconds);

    if (this.onTick) {
      this.onTick(this.getFormattedTime());
    }
  }

  /**
   * Establece la duración de la cuenta atrás en milisegundos.
   * @param {number} milliseconds - Milisegundos para la cuenta atrás.
   */
  setTimeInMilliseconds(milliseconds) {
    this.countdown.setDuration(milliseconds);

    if (this.onTick) {
      this.onTick(this.getFormattedTime());
    }
  }

  /**
   * Inicia la cuenta atrás y configura la actualización periódica.
   * @param {Function} tickCallback - Función a llamar en cada actualización.
   * @param {Function} completeCallback - Función a llamar cuando la cuenta atrás finaliza.
   */
  startCountdown(tickCallback, completeCallback) {
    this.onTick = tickCallback;
    this.onComplete = completeCallback;
    this.countdown.start();

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        const time = this.getFormattedTime();

        if (this.onTick) {
          this.onTick(time);
        }

        if (time.totalMilliseconds === 0) {
          if (this.onComplete) {
            this.onComplete();
          }
          this.stopCountdown();
        }
      }, 10); // Actualiza cada 10ms para mostrar milisegundos
    }
  }

  /**
   * Pausa la cuenta atrás.
   */
  pauseCountdown() {
    this.countdown.pause();
  }

  /**
   * Reinicia la cuenta atrás con la misma duración.
   */
  resetCountdown() {
    this.countdown.reset();
    if (this.onTick) {
      this.onTick(this.getFormattedTime());
    }
  }

  /**
   * Limpia la cuenta atrás y detiene el intervalo.
   */
  clearCountdown() {
    this.countdown.clear();
    this.stopCountdown();

    if (this.onTick) {
      this.onTick(this.getFormattedTime());
    }
  }

  /**
   * Detiene completamente la cuenta atrás y limpia el intervalo.
   */
  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Verifica si la cuenta atrás está en marcha.
   * @returns {boolean} true si está en marcha, false si no.
   */
  isRunning() {
    return this.countdown.isRunning();
  }

  /**
   * Verifica si la cuenta atrás ha finalizado.
   * @returns {boolean} true si ha finalizado, false si no.
   */
  isCompleted() {
    return this.countdown.isCompleted();
  }

  /**
   * Obtiene el tiempo restante formateado.
   * @returns {Object} Objeto con horas, minutos, segundos y milisegundos.
   */
  getFormattedTime() {
    const totalMilliseconds = this.countdown.getRemainingTime();

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
      totalMilliseconds,
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

export default CountdownService;
