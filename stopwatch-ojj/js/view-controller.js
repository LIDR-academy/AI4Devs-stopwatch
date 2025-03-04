// view-controller.js - Controlador de vistas
export default class ViewController {
    showView(viewId) {
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
        });
        document.getElementById(viewId).classList.remove('hidden');
    }

    showStopwatch() {
        this.showView('stopwatch-view'); // Asegúrate de que el ID coincida con el HTML
    }

    showCountdownSetup() {
        this.showView('countdown-setup-view'); // Asegúrate de que el ID coincida con el HTML
    }
}
