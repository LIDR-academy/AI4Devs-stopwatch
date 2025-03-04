// timer.js - Clase base para temporizadores
export default class Timer {
    constructor(updateCallback) {
        this.timer = null;
        this.time = 0;
        this.updateCallback = updateCallback;
    }

    start() {
        if (this.timer) return;
        this.timer = setInterval(() => {
            this.time++;
            this.updateCallback(this.time);
        }, 10);
    }

    pause() {
        clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.pause();
        this.time = 0;
        this.updateCallback(this.time);
    }
}