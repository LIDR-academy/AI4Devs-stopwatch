AI: claude-3.7-sonnet

# Prompt 1

Asume el rol de un desarrollador web especializado en front.

#Idea y apariencia
Vamos a hacer algo [parecido a esto](@https://www.online-stopwatch.com/). Fíjate en la imagen que he adjuntado, quiero algo así. Una app con cronómetro y cuenta atrás.

#Home

- Al entrar en la web veremos la pantalla divida en dos partes (horizontal en pantallas apaisadas y vertical en pantallas verticales).
  -- En la primera mitad habrá un link al cronómetro
  -- En la segunda mitad habrá un link a la cuenta atrás

#Cronómetro

- Algo parecido a lo que adjunté en el pantallazo.
- Tiempo transcurrido en horas minutos y segundos.
  -- En pequeño quiero que se vean décimas, centésimas y milésimas de segundo.
- Un botón de start
  -- Si el cronómetro está en marcha se convertirá en Pause
- Un botón Clear.
  -- Si el cronómetro está en marcha el botón clear se convertirá en Restart
- Botón de volver a la portada

#Cuenta atrás

- Tiempo restante en horas minutos y segundos.
  -- En pequeño quiero que se vean décimas, centésimas y milésimas de segundo.
- Los estilos deben ser coherentes con el resto de la app
- Mostrará botones con los siguientes tiempos predefinidos: 1min, 2min, 3min, 5min, 10min, 15min, 20min, 30min, 1h, 2h y 3h.
  -- Al pulsar en alguno de ellos, comenzará la cuenta atrás del tiempo correspondiente.
  -- Cuando la cuenta atrás esté en marca desaparecerán los botones de selección de tiempo.
- Cuando esté en marcha la cuenta atrás aparecerá un botón clear en lugar de los botones de selección.
  -- El botón Clear sólo se podrá pulsar cuando la cuenta atrás esté en pausa.
- Un botón "Pause"
- Botón de volver a la portada

#Diseño
Quiero que sigas las indicaciones que te he dado, pero quiero que usas una tipografia 8bits y en general un aspecto retro para los textos y botones de la app.

#Documentación

- Los comentarios deben estar en español de españa.
- Sigue buenas prácticas de documentación, formato, comentarios, etc.
- Aplica un patrón de diseño DDD.
- Escribe un archivo README.md

# Prompt 2

Quiero que añadas un bones de tiempo predefinidos de 10s, 20s y 30s y que lo añadas a la documentación

# Prompt 3

Quiero que elimines el botón Start de la cuenta atrás

# Prompt 4

Has hecho un trabajo estupendo!!

Ahora me gustaría darle un diseño más atractivo siguiendo el estilo actual retro.

Vamos a representar la cuenta atrás con un disco de vinilo y el cronómetro con un cassete.

#portada

- En el botón para ir al cronómetro se verá el icono de un cassete
- En el botón para ir a la cuenta atrás se verá el icono de un disco de vinilo
- Ambos iconos podrán presentarse animados o estáticos, en la portada estarán animados constantemente en loop.
- Deben ser gráficos vectoriales o tener la suficiente calidad como para verse con nitidez.
- Deben reciclarse para las pantallas de cuenta atrás y cronómetro.

#Cronómetro

- De fondo se mostrará la imagen del cassete
  -- Se animará cuando el cronómetro esté en marcha se verá en el fondo un cassete girando.

#Cuenta atrás

- De fondo se mostrará la imagen del disco de vinilo
  -- Se animará cuando la cuenta atrás esté en marcha

# Prompt 5

Quiero que modifiques un poco los estilos en las pantallas de cronómetro y cuenta atrás.

Ahora mismo los iconos del vinilo y el cassete están dentro de de `.timer-container`. Quiero que estén por detrás y que ocupen todo el tamaño de la pantalla en estas secciones.

Intenta modificar el html lo menos posible para conseguirlo. Sólo quiero que modifiques los tamaños y la posición del vinilo y el cassete.
