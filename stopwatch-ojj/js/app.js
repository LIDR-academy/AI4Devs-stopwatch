// app.js - Controlador principal
import ViewController from './view-controller.js';
import Stopwatch from './stopwatch.js';
import Countdown from './countdown.js';

document.addEventListener('DOMContentLoaded', () => {
    const viewController = new ViewController();
    const stopwatch = new Stopwatch();
    const countdown = new Countdown();
    
    document.getElementById('stopwatch-card').addEventListener('click', () => {
        viewController.showStopwatch();
    });

    document.getElementById('countdown-card').addEventListener('click', () => {
        viewController.showCountdownSetup();
    });

    document.querySelectorAll('.back-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            viewController.showView(event.currentTarget.dataset.target);
        });
    });
});