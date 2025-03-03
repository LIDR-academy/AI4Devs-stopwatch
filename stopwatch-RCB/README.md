# TimeMaster - Temporizador Futurista ⏳🚀

## 📌 Descripción
TimeMaster es una aplicación de temporizador futurista con un diseño **minimalista, cyberpunk y moderno**.  
Incluye tres funcionalidades principales:
- ⏱ **Cronómetro** con paros parciales.
- ⏳ **Temporizador** con entrada en vivo.
- 🔄 **Intervalos** con ciclos de trabajo y descanso configurables.

🖥 **Diseño mejorado con Bootstrap** para una experiencia fluida y elegante.

---

## ⚙ **Características**
### 1️⃣ **Cronómetro**
- 🟢 **Iniciar**, 🟡 **Pausar**, 🔴 **Resetear**.
- 🏁 **Paro Parcial** (Guarda tiempos de interrupción).
- 💾 **Se almacena en LocalStorage** para persistencia.

### 2️⃣ **Temporizador**
- ⌨ **Edición directa** en la pantalla de tiempo.
- 🔔 **Sonido al finalizar**.
- 🔄 **Pausa y reset**.

### 3️⃣ **Intervalos**
- 🕒 **Ciclo de trabajo y descanso configurables**.
- ⌨ **Edición directa del tiempo**.
- 🔄 **Modo reinicio instantáneo o con espera**.
- 🔔 **Sonido al finalizar cada ciclo y descanso**.
- ⏸ **Pausar intervalo en cualquier momento**.
- 🔄 **Reiniciar solo el contador sin borrar configuración**.

---

## 📜 **Changelog - Historial de Mejoras**
### 🔥 v2.1 - Corrección de errores y optimización 🚀
✅ **Corrección del formato en la entrada de tiempo en los Intervalos**:  
   - Ahora se pueden ingresar números sin necesidad de ceros (`4` en lugar de `04`).  
   - El sistema ajusta automáticamente el tiempo para evitar errores (`NaN`).  

✅ **Botón "Reiniciar Contador" en Intervalos ahora funciona correctamente**:  
   - Restablece el contador sin borrar la configuración guardada.  

✅ **Botón "Pausar" en Intervalos**:  
   - Permite detener la cuenta regresiva en cualquier momento.  

✅ **Optimización de código**:  
   - Se mejoró la conversión de tiempo para evitar errores.  

---

### 🔥 v2.0 - Mejoras Visuales y de UX 🚀
✅ **Bootstrap 5** para diseño responsive y elegante.  
✅ **Íconos FontAwesome** en los botones de la interfaz inicial.  
✅ **Distribución mejorada**: 
   - El tiempo ahora ocupa la parte superior de cada pantalla funcional.  
   - Los botones están alineados debajo del tiempo.  
✅ **Edición directa del tiempo** en el Temporizador e Intervalos.  
✅ **Dos filas en la pantalla de Intervalos**:  
   - **Ciclo de trabajo** y **Descanso** separados visualmente.  
✅ **Hover y efectos futuristas** en botones y tiempo mostrado.  

---

### 🔥 v1.5 - Corrección de navegación entre pantallas 🚀
✅ **Función `showScreen()` corregida**:  
   - Ahora cambia correctamente entre las pantallas sin errores.  
✅ **Clase `.screen` agregada a las secciones** para evitar errores en la navegación.  
✅ **Corrección de `.hidden { display: none !important; }` en CSS**.  

---

### 🔥 v1.0 - Primera Versión 🚀
✅ **Cronómetro funcional** con paros parciales.  
✅ **Temporizador funcional** con edición en vivo.  
✅ **Intervalos funcionales** con configuración de ciclos y descanso.  
✅ **Diseño inicial con colores Cyberpunk** (rojo, negro y amarillo).  
✅ **Sonidos al finalizar los temporizadores e intervalos**.  
✅ **Persistencia en LocalStorage** para Cronómetro e Intervalos.  

---

## 🎨 **Diseño y Tecnologías**
🔹 **HTML5, CSS3, Bootstrap 5**  
🔹 **JavaScript (ES6+)**  
🔹 **FontAwesome para iconos**  
🔹 **LocalStorage para guardar configuraciones**  
🔹 **Sonido del navegador para notificaciones**  

---

## 🛠 **Cómo Usarlo**
1️⃣ **Selecciona una función** desde la pantalla inicial.  
2️⃣ **Usa los controles** para iniciar, pausar o resetear.  
3️⃣ **En el Temporizador e Intervalos**, edita el tiempo directamente haciendo clic sobre él.  
4️⃣ **Usa el botón "Reiniciar Contador" en Intervalos** para volver al tiempo guardado sin borrar la configuración.  
5️⃣ **Usa el botón “Volver”** para regresar al menú principal.  

---

## 📌 **Próximas Mejoras (v3.0)**
🔹 **Modo Oscuro / Claro dinámico**.  
🔹 **Vibración en dispositivos móviles**.  
🔹 **Más animaciones futuristas**.  

👨‍💻 **Desarrollado por [Ruben Contreras]** 🚀

---
