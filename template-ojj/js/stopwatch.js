// stopwatch.js - Implementación del cronómetro
import Timer from './timer.js';
export default class Stopwatch extends Timer {
    constructor() {
        super(time => this.updateDisplay(time));
        document.addEventListener('DOMContentLoaded', () => this.cacheElements());
    }

    cacheElements() {
        this.hoursEl = document.getElementById('stopwatch-hours');
        this.minutesEl = document.getElementById('stopwatch-minutes');
        this.secondsEl = document.getElementById('stopwatch-seconds');
        this.millisecondsEl = document.getElementById('stopwatch-milliseconds');
    }

    updateDisplay(time) {
        if (!this.hoursEl) return; // Evita errores si los elementos no existen aún
        
        const ms = time % 100;
        const sec = Math.floor(time / 100) % 60;
        const min = Math.floor(time / 6000) % 60;
        const hrs = Math.floor(time / 360000);
        
        this.hoursEl.textContent = hrs.toString().padStart(2, '0');
        this.minutesEl.textContent = min.toString().padStart(2, '0');
        this.secondsEl.textContent = sec.toString().padStart(2, '0');
        this.millisecondsEl.textContent = ms.toString().padStart(3, '0');
    }
}