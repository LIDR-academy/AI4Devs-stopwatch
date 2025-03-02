# Cronómetro y Cuenta Atrás Retro

Una aplicación web con estilo retro 8-bit que incluye un cronómetro y una cuenta atrás.

## Características

### Página de inicio

- Interfaz dividida en dos secciones (horizontal en pantallas apaisadas y vertical en pantallas verticales)
- Acceso al cronómetro (representado por un cassette animado)
- Acceso a la cuenta atrás (representada por un disco de vinilo animado)

### Cronómetro

- Muestra el tiempo transcurrido en horas, minutos y segundos
- Visualización de décimas, centésimas y milésimas de segundo
- Fondo con un cassette que se anima cuando el cronómetro está en marcha
- Botón de inicio/pausa
- Botón de limpiar/reiniciar
- Botón para volver a la página de inicio

### Cuenta atrás

- Muestra el tiempo restante en horas, minutos y segundos
- Visualización de décimas, centésimas y milésimas de segundo
- Fondo con un disco de vinilo que gira cuando la cuenta atrás está en marcha
- Botones de tiempo predefinidos: 10s, 20s, 30s, 1min, 2min, 3min, 5min, 10min, 15min, 20min, 30min, 1h, 2h, 3h y 5h
- Inicio automático al seleccionar un tiempo predefinido
- Botón de pausa (aparece cuando la cuenta atrás está en marcha)
- Botón de limpiar (disponible cuando la cuenta atrás está en pausa)
- Botón para volver a la página de inicio

## Diseño

La aplicación tiene un diseño retro inspirado en los juegos de 8-bits, con una tipografía pixelada y colores vibrantes. Incluye elementos gráficos animados como un cassette para el cronómetro y un disco de vinilo para la cuenta atrás, que se animan cuando están en funcionamiento.

## Tecnologías utilizadas

- JavaScript vanilla
- CSS3
- HTML5
- SVG para gráficos vectoriales
- Arquitectura Domain-Driven Design (DDD)

## Estructura del proyecto

```
src/
├── domain/           # Modelos de dominio
│   ├── Timer.js      # Modelo de dominio del cronómetro
│   └── Countdown.js  # Modelo de dominio de la cuenta atrás
├── application/      # Servicios de aplicación
│   ├── TimerService.js      # Servicio para el cronómetro
│   └── CountdownService.js  # Servicio para la cuenta atrás
├── ui/               # Interfaz de usuario
│   ├── components/   # Componentes reutilizables
│   │   ├── Button.js
│   │   ├── TimerDisplay.js
│   │   └── CountdownDisplay.js
│   ├── pages/        # Páginas de la aplicación
│   │   ├── Home.js
│   │   ├── Timer.js
│   │   └── Countdown.js
│   └── styles/       # Estilos CSS
│       └── main.css
└── index.js          # Punto de entrada de la aplicación

public/
├── images/           # Imágenes y gráficos
│   ├── cassette.svg  # Gráfico vectorial del cassette
│   └── vinyl.svg     # Gráfico vectorial del disco de vinilo
└── fonts/            # Fuentes tipográficas
    └── PressStart2P-Regular.ttf  # Fuente pixelada 8-bit
```

## Instalación

1. Clona este repositorio

```bash
git clone <url-del-repositorio>
```

2. Instala las dependencias

```bash
npm install
```

3. Inicia el servidor de desarrollo

```bash
npm start
```

4. Abre tu navegador en `http://localhost:1234`

## Construcción para producción

```bash
npm run build
```

## Licencia

ISC
