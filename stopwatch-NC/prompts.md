# Modelo ChatGPT-4
# Prompt 1
Actúa como experto en desarrollo web utilizando html, javascript y css, con experiencia en UX/UI. Genera un cronómetro funcional basado en los archivos index.html, script.js y la imagen de referencia que proporcionaré. El cronómetro debe incluir dos modos de operación:

1. *Cronómetro progresivo:* Inicia en 00:00 y avanza en tiempo real.
2. *Cuenta regresiva:* Permite establecer un tiempo determinado y cuenta hacia atrás hasta llegar a 00:00.
El diseño debe asemejarse a la imagen proporcionada (stopwatch.png), respetando su estilo visual, colores y distribución de elementos.

## Criterios de aceptación:

### Diseño:
* La pantalla del cronómetro debe tener un fondo azul claro con un borde redondeado y números grandes en color negro.
* Debe mostrar milisegundos en la parte inferior derecha del display.
* Los botones deben ser grandes, con efecto de sombreado y colores:
* Verde con texto "Start" para iniciar/reanudar el cronómetro.
* Rojo con texto "Clear" para reiniciar el cronómetro.

### Funcionalidad:
* Un botón "Start" que inicia o pausa el cronómetro/cuenta regresiva.
* Un botón "Clear" que resetea el tiempo a 00:00.
* En modo cuenta regresiva, debe permitir ingresar el tiempo antes de iniciar.
* Cuando la cuenta regresiva llegue a 00:00, debe mostrar una alerta o cambiar el color del display.

### Implementación técnica:
* Usar HTML, CSS y JavaScript puro (sin frameworks ni librerías externas).
* Código modular y bien comentado.
* Compatible con los principales navegadores modernos.

### Extras (Opcional):

* Agregar sonidos al iniciar/detener la cuenta regresiva.
* Permitir personalización del formato de tiempo (hh:mm:ss o mm:ss).

----
# Prompt 2
En vez de solicitar el tipo de crónómetro usando la función "confirm", utiliza controles web arriba de los botones que se oculten cuando el crotómetro o el timer esté en marcha, algo como la imagen que adjunto pero respetando el diseño actual

----
# Prompt 3
corrige el diseño para que se mantengan estos estilos
