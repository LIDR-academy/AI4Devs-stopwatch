# **IA utilizado: ChatGPT -4o**

# Prompt 1:

    - Eres un desarrollador full stack con mas de 15 años de experiencia en javascript y experto en diseño ciberpunk, desarrollame una una aplicacion web funcional que sirva como cronometro y cuenta atras basado en https://www.online-stopwatch.com/ y apollandote en el diseño que te voy a pasar, crea el diseño front en un archivo index.html, el codigo en el script.js y separa los estilos en un archivo css.

# Prompt 2:

    - te paso los requerimientos de los dos estados de la aplicacion, el estado 1 funcionara como un cronometro empezando desde 0 y el estado 2 sera un contador cuenta atras:
    1. cronometro:
    - boton1 tendra dos estados, "start" con color Cian neón luminoso si el cronometro esta a cero y "stop" con color rojo neon cuando el cronometro este contando.
    - boton2 tendra dos estados, siempre con el nombre "restart" y el color Cian neón, si el cronometro esta contando este se activara y sera luminoso, cuando el contador este a cero este se desactivara y se volvera menos luminoso.
    - boton3 tendra como nombre "countdown" sera de color amarillo luminoso
    - empezamos con boton1 activado, luminoso y con el nombre "start", el boton2 con el nombre "reset" estara desactivado y menos luminoso, el boton3 con el nombre "countdown" activado y en color amarillo neon luiminoso.
    - al darle al boton1 este cambia de nombre a stop y se pondra en color rojo neon luminoso y el contador empezara a contar, el boton2 se activara y se volvera luminoso.
    - al pulsar el boton1 cuando el contador este contando este cambiara de nombre a start y cambiara de color y el cronometro se pausara, al volver a darle al boton1 volvera a contar desde el tiempo en la que se pauso y volvera a su estado rojo con el nombre "stop".
    - siempre y cuando el cronometro no este a 0 el boton2 con nombre "reset" se activara y se volvera luminoso y cuando se pulse paralizara el contador y lo pondra a 0 y tambien modificara el boton1 a start.
    - cuando el cronometro este contando el boton2 estara activo y luminoso y si el contador esta a 0 ell boton estara desactivado y menos luminoso.

    2. contador cuenta atras:
    - boton1 tendra dos estados, "start" estara desactivado con color Cian neón sin luz cuando el contador esta a 0 y cuando se configura el contador con numero de activara y se volvera luminoso y "stop" con color rojo neon cuando el cronometro este contando.
    - boton2 tendra dos estados, siempre con el nombre "restart" y el color Cian neón, si el cronometro esta contando este se activara y sera luminoso, cuando el contador este a cero este se desactivara y se volvera menos luminoso.
    - boton3 tendra como nombre "cronometer" sera de color naranja sin luz
    - cuando el boton3 esta menos luminoso si lo pulsamos se volvera mas luminoso con el mismo color amarillo neon, reiniciara el contador y el boton1 y boton2 se desactivaran poniendose menos luminoso y entonces se podra modificar el tiempo en el cronometro.
    - siempre que el cronometro no este a 0 el boton1 se activara y se volvera luminoso con el nombre "start" y si se pulsa se pondra en rojo con el nombre "stop".
    - cuando el contador este contando el boton1 se volvera rojo con el nombre "stop" y si se pulsa paralizara la cuenta atras.
    - cuando la cuenta atras no este a 0 el boton2 se activara y si se pulsa pondra a 0 la cuenta.
    - si se pulsa el boton3 cuando estamos en estado 2 entonces volveremos al estado 1 "cronometer" y el boton3 se volvera naranja neon y sin luz.
    - al modificar el contador hay que asegurarse el formato de los numeros 00:00:000 que serian minutos, segundos y milisegundos, asegurate de que no se pueda modificar de otra forma y que no se pueda añadir caracteres no validos.

    si te faltan datos preguntame.

# Prompt 3:
    1.
    - si, en el estado1 el boton3 tendra el nombre "countdown" en amarillo neon luminoso.
    - si, en el estado2 el boton3 tendra el nombre "cronometer" en naranja neon sin luz.
    2.
    - si, al cambiar de estado hay que reiniciar tanto el tiempo como los botones.
    - si, al cambiar de estado hay que reiniciar tanto el tiempo como los botones.
    3.
    - si, solo serian validos numeros enteros en formato minutos:segundos:milisegundos.
    - el input que sea de tipo numero.
    4.
    - si, solo activa e ilumina el boton2 si el tiempo no es 0.
    - si, reinicia tanto el cronometro como el contador.

# Prompt 4:

    - muy bien, añade una logica mas y es que al estar en el estado 1 "cronometro" no se debe de poder cambiar los numero del tiempo, eso solo seria para el estado2 " cuenta atras", y añade un poco mas de separacion entre los numeros

# Prompt 5:

    - cuando se cambia del estado2 al estado1 el boton1 deberia volver a activarse.

# Prompt 6:

    - documentame en un formato marcdown todas las instrucciones que te he dado sobre esta aplicacion sin cambiar mis palabras

# **Instrucciones para la Aplicación de Cronómetro y Cuenta Atrás**

## **1. Cronómetro**
- ****Botón 1**** tendrá dos estados:
  - "Start" con color ****Cian neón luminoso**** si el cronómetro está a cero.
  - "Stop" con color ****Rojo neón**** cuando el cronómetro esté contando.
- ****Botón 2**** tendrá dos estados:
  - Siempre con el nombre ****"Restart"**** y el color ****Cian neón****.
  - Si el cronómetro está contando este se activará y será luminoso.
  - Cuando el contador esté a cero este se desactivará y se volverá menos luminoso.
- ****Botón 3**** tendrá como nombre ****"Countdown"**** y será de color ****Amarillo neón luminoso****.
- ****Estados iniciales:****
  - Botón 1 activado, luminoso y con el nombre ****"Start"****.
  - Botón 2 con el nombre ****"Restart"**** estará desactivado y menos luminoso.
  - Botón 3 con el nombre ****"Countdown"**** activado y en color ****Amarillo neón luminoso****.
- ****Acciones:****
  - Al darle al botón 1, este cambia de nombre a ****"Stop"**** y se pondrá en ****Rojo neón luminoso****, y el contador empezará a contar. El botón 2 se activará y se volverá luminoso.
  - Al pulsar el botón 1 cuando el contador esté contando, este cambiará de nombre a ****"Start"****, cambiará de color y el cronómetro se pausará. Al volver a darle al botón 1, volverá a contar desde el tiempo en la que se pausó y volverá a su estado ****Rojo**** con el nombre ****"Stop"****.
  - Siempre y cuando el cronómetro no esté a ****0****, el botón 2 con el nombre ****"Restart"**** se activará y se volverá luminoso. Cuando se pulse, paralizará el contador y lo pondrá a ****0****, además de modificar el botón 1 a ****"Start"****.
  - Cuando el cronómetro esté contando, el botón 2 estará activo y luminoso. Si el contador está a ****0****, el botón estará desactivado y menos luminoso.

## **2. Contador Cuenta Atrás**
- ****Botón 1**** tendrá dos estados:
  - "Start" estará ****desactivado con color Cian neón sin luz**** cuando el contador esté a ****0****.
  - Cuando se configura el contador con un número, se activará y se volverá luminoso.
  - "Stop" con color ****Rojo neón**** cuando el cronómetro esté contando.
- ****Botón 2**** tendrá dos estados:
  - Siempre con el nombre ****"Restart"**** y el color ****Cian neón****.
  - Si el cronómetro está contando, este se activará y será luminoso.
  - Cuando el contador esté a ****0****, este se desactivará y se volverá menos luminoso.
- ****Botón 3**** tendrá como nombre ****"Cronometer"**** y será de color ****Naranja neón sin luz****.
- ****Estados iniciales:****
  - Cuando el botón 3 está menos luminoso y si lo pulsamos, se volverá ****más luminoso**** con el mismo color ****Amarillo neón****, reiniciará el contador y los botones 1 y 2 se desactivarán poniéndose menos luminosos. Entonces se podrá modificar el tiempo en el cronómetro.
- ****Acciones:****
  - Siempre que el cronómetro no esté a ****0****, el botón 1 se activará y se volverá luminoso con el nombre ****"Start"****. Si se pulsa, se pondrá en ****Rojo**** con el nombre ****"Stop"****.
  - Cuando el contador esté contando, el botón 1 se volverá ****Rojo**** con el nombre ****"Stop"****. Si se pulsa, paralizará la cuenta atrás.
  - Cuando la cuenta atrás no esté a ****0****, el botón 2 se activará y si se pulsa, pondrá a ****0**** la cuenta.
  - Si se pulsa el botón 3 cuando estamos en el ****Estado 2****, entonces volveremos al ****Estado 1**** ****("Cronometer")**** y el botón 3 se volverá ****Naranja neón y sin luz****.
- ****Modificación del contador:****
  - Al modificar el contador hay que asegurarse de que el ****formato de los números sea 00:00:000****, que representan ****Minutos:Segundos:Milisegundos****.
  - Asegurarse de que ****no se pueda modificar de otra forma**** y que ****no se pueda añadir caracteres no válidos****.

## **3. Reglas Adicionales**
- Cuando se cambia del ****Estado 2 (Cuenta Atrás) al Estado 1 (Cronómetro)****, el botón 1 ****debe volver a activarse automáticamente****.
- En el ****Estado 1 (Cronómetro)****, los números del tiempo ****no deben poder cambiarse****.
- En el ****Estado 2 (Cuenta Atrás)****, los números deben poder modificarse mediante ****inputs numéricos****.
- Se ha añadido ****mayor separación entre los números**** para mejorar la visualización.