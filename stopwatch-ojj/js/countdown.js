// countdown.js - Implementación de la cuenta atrás
export default class Countdown {
    constructor() {
        this.timer = null;
        this.remainingTime = 0;
        this.initialTime = 0;
        document.addEventListener('DOMContentLoaded', () => this.cacheElements());
    }

    cacheElements() {
        this.hoursEl = document.getElementById('countdown-hours');
        this.minutesEl = document.getElementById('countdown-minutes');
        this.secondsEl = document.getElementById('countdown-seconds');
    }

    setTime(time) {
        this.remainingTime = time;
        this.initialTime = time;
        this.updateDisplay();
    }

    start() {
        if (this.timer) return;
        this.timer = setInterval(() => {
            if (this.remainingTime <= 0) {
                this.pause();
                return;
            }
            this.remainingTime--;
            this.updateDisplay();
        }, 1000);
    }

    pause() {
        clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.pause();
        this.remainingTime = this.initialTime;
        this.updateDisplay();
    }

    updateDisplay() {
        if (!this.hoursEl) return; // Evita errores si los elementos no existen aún
        
        const hrs = Math.floor(this.remainingTime / 3600);
        const mins = Math.floor((this.remainingTime % 3600) / 60);
        const secs = this.remainingTime % 60;
        
        this.hoursEl.textContent = hrs.toString().padStart(2, '0');
        this.minutesEl.textContent = mins.toString().padStart(2, '0');
        this.secondsEl.textContent = secs.toString().padStart(2, '0');
    }
}