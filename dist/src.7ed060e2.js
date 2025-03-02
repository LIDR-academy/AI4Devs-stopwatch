// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/domain/Timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Clase que representa el dominio de un cronómetro.
 * Maneja la lógica de negocio relacionada con el tiempo transcurrido.
 */
var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.intervalId = null;
  }

  /**
   * Inicia el cronómetro.
   */
  return _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.running = true;
      }
    }

    /**
     * Pausa el cronómetro.
     */
  }, {
    key: "pause",
    value: function pause() {
      if (this.running) {
        this.elapsedTime = Date.now() - this.startTime;
        this.running = false;
      }
    }

    /**
     * Reinicia el cronómetro a cero.
     */
  }, {
    key: "reset",
    value: function reset() {
      this.elapsedTime = 0;
      if (this.running) {
        this.startTime = Date.now();
      }
    }

    /**
     * Obtiene el tiempo actual del cronómetro.
     * @returns {number} Tiempo transcurrido en milisegundos.
     */
  }, {
    key: "getTime",
    value: function getTime() {
      if (this.running) {
        return Date.now() - this.startTime;
      }
      return this.elapsedTime;
    }

    /**
     * Verifica si el cronómetro está en marcha.
     * @returns {boolean} true si está en marcha, false si no.
     */
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);
}();
var _default = exports.default = Timer;
},{}],"../src/application/TimerService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Timer = _interopRequireDefault(require("../domain/Timer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Servicio que gestiona la lógica de aplicación del cronómetro.
 * Actúa como intermediario entre el dominio y la interfaz de usuario.
 */
var TimerService = /*#__PURE__*/function () {
  function TimerService() {
    _classCallCheck(this, TimerService);
    this.timer = new _Timer.default();
    this.onTick = null;
  }

  /**
   * Inicia el cronómetro y configura la actualización periódica.
   * @param {Function} callback - Función a llamar en cada actualización.
   */
  return _createClass(TimerService, [{
    key: "startTimer",
    value: function startTimer(callback) {
      var _this = this;
      this.onTick = callback;
      this.timer.start();
      if (!this.intervalId) {
        this.intervalId = setInterval(function () {
          if (_this.onTick) {
            _this.onTick(_this.getFormattedTime());
          }
        }, 10); // Actualiza cada 10ms para mostrar milisegundos
      }
    }

    /**
     * Pausa el cronómetro.
     */
  }, {
    key: "pauseTimer",
    value: function pauseTimer() {
      this.timer.pause();
    }

    /**
     * Reinicia el cronómetro a cero.
     */
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      this.timer.reset();
      if (this.onTick) {
        this.onTick(this.getFormattedTime());
      }
    }

    /**
     * Detiene completamente el cronómetro y limpia el intervalo.
     */
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      this.timer.pause();
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    /**
     * Verifica si el cronómetro está en marcha.
     * @returns {boolean} true si está en marcha, false si no.
     */
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.timer.isRunning();
    }

    /**
     * Obtiene el tiempo actual formateado.
     * @returns {Object} Objeto con horas, minutos, segundos y milisegundos.
     */
  }, {
    key: "getFormattedTime",
    value: function getFormattedTime() {
      var totalMilliseconds = this.timer.getTime();
      var milliseconds = totalMilliseconds % 1000;
      var totalSeconds = Math.floor(totalMilliseconds / 1000);
      var seconds = totalSeconds % 60;
      var totalMinutes = Math.floor(totalSeconds / 60);
      var minutes = totalMinutes % 60;
      var hours = Math.floor(totalMinutes / 60);
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        formatted: {
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
          milliseconds: {
            tenths: Math.floor(milliseconds / 100),
            hundredths: Math.floor(milliseconds / 10) % 10,
            thousandths: milliseconds % 10
          }
        }
      };
    }
  }]);
}();
var _default = exports.default = TimerService;
},{"../domain/Timer":"../src/domain/Timer.js"}],"../src/ui/components/TimerDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Componente que muestra el tiempo del cronómetro.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.time - Objeto con el tiempo formateado.
 * @returns {HTMLElement} Elemento de visualización del tiempo.
 */
function TimerDisplay() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$time = props.time,
    time = _props$time === void 0 ? {
      formatted: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: {
          tenths: 0,
          hundredths: 0,
          thousandths: 0
        }
      }
    } : _props$time;
  var displayContainer = document.createElement("div");
  displayContainer.className = "display";

  // Crear el elemento para el tiempo principal (horas:minutos:segundos)
  var mainTime = document.createElement("div");
  mainTime.className = "main-time";
  mainTime.textContent = "".concat(time.formatted.hours, ":").concat(time.formatted.minutes, ":").concat(time.formatted.seconds);

  // Crear el elemento para los milisegundos
  var milliseconds = document.createElement("div");
  milliseconds.className = "milliseconds";
  milliseconds.textContent = "".concat(time.formatted.milliseconds.tenths).concat(time.formatted.milliseconds.hundredths).concat(time.formatted.milliseconds.thousandths);

  // Añadir los elementos al contenedor
  displayContainer.appendChild(mainTime);
  displayContainer.appendChild(milliseconds);

  /**
   * Actualiza el tiempo mostrado.
   * @param {Object} newTime - Nuevo objeto de tiempo formateado.
   */
  displayContainer.updateTime = function (newTime) {
    mainTime.textContent = "".concat(newTime.formatted.hours, ":").concat(newTime.formatted.minutes, ":").concat(newTime.formatted.seconds);
    milliseconds.textContent = "".concat(newTime.formatted.milliseconds.tenths).concat(newTime.formatted.milliseconds.hundredths).concat(newTime.formatted.milliseconds.thousandths);
  };
  return displayContainer;
}
var _default = exports.default = TimerDisplay;
},{}],"../src/ui/components/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Componente de botón reutilizable.
 * @param {Object} props - Propiedades del botón.
 * @param {string} props.text - Texto a mostrar en el botón.
 * @param {Function} props.onClick - Función a ejecutar al hacer clic.
 * @param {string} props.className - Clases CSS adicionales.
 * @returns {HTMLElement} Elemento de botón.
 */
function Button(props) {
  var text = props.text,
    onClick = props.onClick,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className;
  var button = document.createElement("div");
  button.className = "btn ".concat(className);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}
var _default = exports.default = Button;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/ui/pages/Timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TimerService = _interopRequireDefault(require("../../application/TimerService"));
var _TimerDisplay = _interopRequireDefault(require("../components/TimerDisplay"));
var _Button = _interopRequireDefault(require("../components/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Página del cronómetro.
 * @returns {HTMLElement} Elemento contenedor de la página del cronómetro.
 */
function Timer() {
  var timerService = new _TimerService.default();
  var container = document.createElement("div");
  container.className = "timer-container";

  // Crear el display del cronómetro
  var initialTime = timerService.getFormattedTime();
  var display = (0, _TimerDisplay.default)({
    time: initialTime
  });

  // Crear los controles
  var controlsContainer = document.createElement("div");
  controlsContainer.className = "controls";

  // Botón de inicio/pausa
  var startPauseButton = (0, _Button.default)({
    text: "Start",
    className: "btn-start",
    onClick: function onClick() {
      if (timerService.isRunning()) {
        timerService.pauseTimer();
        startPauseButton.textContent = "Start";
        startPauseButton.className = "btn btn-start";
        clearRestartButton.textContent = "Clear";
        clearRestartButton.className = "btn btn-clear";
      } else {
        timerService.startTimer(function (time) {
          display.updateTime(time);
        });
        startPauseButton.textContent = "Pause";
        startPauseButton.className = "btn btn-pause";
        clearRestartButton.textContent = "Restart";
        clearRestartButton.className = "btn btn-restart";
      }
    }
  });

  // Botón de limpiar/reiniciar
  var clearRestartButton = (0, _Button.default)({
    text: "Clear",
    className: "btn-clear",
    onClick: function onClick() {
      if (timerService.isRunning()) {
        // Reiniciar mientras está en marcha
        timerService.resetTimer();
      } else {
        // Limpiar cuando está pausado
        timerService.resetTimer();
        display.updateTime(timerService.getFormattedTime());
      }
    }
  });

  // Añadir botones al contenedor de controles
  controlsContainer.appendChild(startPauseButton);
  controlsContainer.appendChild(clearRestartButton);

  // Botón para volver a la página de inicio
  var homeButton = (0, _Button.default)({
    text: "Volver a Inicio",
    className: "btn-home",
    onClick: function onClick() {
      timerService.stopTimer();

      // Importar dinámicamente para evitar dependencias circulares
      require("_bundle_loader")(require.resolve("./Home")).then(function (module) {
        var Home = module.default;
        var appContainer = document.getElementById("app");
        appContainer.innerHTML = "";
        appContainer.appendChild(Home());
      });
    }
  });

  // Añadir elementos al contenedor principal
  container.appendChild(display);
  container.appendChild(controlsContainer);
  container.appendChild(homeButton);
  return container;
}
var _default = exports.default = Timer;
},{"../../application/TimerService":"../src/application/TimerService.js","../components/TimerDisplay":"../src/ui/components/TimerDisplay.js","../components/Button":"../src/ui/components/Button.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./Home":[["src.7ed060e2.js","../src/index.js"],"src.7ed060e2.js.map","../src/ui/pages/Home.js"]}],"../src/domain/Countdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Clase que representa el dominio de una cuenta atrás.
 * Maneja la lógica de negocio relacionada con el tiempo restante.
 */
var Countdown = /*#__PURE__*/function () {
  function Countdown() {
    _classCallCheck(this, Countdown);
    this.duration = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.running = false;
    this.completed = false;
  }

  /**
   * Establece la duración de la cuenta atrás.
   * @param {number} milliseconds - Duración en milisegundos.
   */
  return _createClass(Countdown, [{
    key: "setDuration",
    value: function setDuration(milliseconds) {
      this.duration = milliseconds;
      this.elapsedTime = 0;
      this.completed = false;
    }

    /**
     * Inicia la cuenta atrás.
     */
  }, {
    key: "start",
    value: function start() {
      if (!this.running && !this.completed && this.duration > 0) {
        this.startTime = Date.now() - this.elapsedTime;
        this.running = true;
      }
    }

    /**
     * Pausa la cuenta atrás.
     */
  }, {
    key: "pause",
    value: function pause() {
      if (this.running) {
        this.elapsedTime = Date.now() - this.startTime;
        this.running = false;
      }
    }

    /**
     * Reinicia la cuenta atrás con la misma duración.
     */
  }, {
    key: "reset",
    value: function reset() {
      this.elapsedTime = 0;
      this.completed = false;
      if (this.running) {
        this.startTime = Date.now();
      }
    }

    /**
     * Limpia la cuenta atrás y la detiene.
     */
  }, {
    key: "clear",
    value: function clear() {
      this.duration = 0;
      this.elapsedTime = 0;
      this.running = false;
      this.completed = false;
    }

    /**
     * Obtiene el tiempo restante de la cuenta atrás.
     * @returns {number} Tiempo restante en milisegundos.
     */
  }, {
    key: "getRemainingTime",
    value: function getRemainingTime() {
      if (this.duration === 0) return 0;
      var elapsed = this.running ? Date.now() - this.startTime : this.elapsedTime;
      var remaining = this.duration - elapsed;
      if (remaining <= 0) {
        remaining = 0;
        if (this.running) {
          this.running = false;
          this.completed = true;
        }
      }
      return remaining;
    }

    /**
     * Verifica si la cuenta atrás está en marcha.
     * @returns {boolean} true si está en marcha, false si no.
     */
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }

    /**
     * Verifica si la cuenta atrás ha finalizado.
     * @returns {boolean} true si ha finalizado, false si no.
     */
  }, {
    key: "isCompleted",
    value: function isCompleted() {
      return this.completed;
    }
  }]);
}();
var _default = exports.default = Countdown;
},{}],"../src/application/CountdownService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Countdown = _interopRequireDefault(require("../domain/Countdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Servicio que gestiona la lógica de aplicación de la cuenta atrás.
 * Actúa como intermediario entre el dominio y la interfaz de usuario.
 */
var CountdownService = /*#__PURE__*/function () {
  function CountdownService() {
    _classCallCheck(this, CountdownService);
    this.countdown = new _Countdown.default();
    this.onTick = null;
    this.onComplete = null;
    this.intervalId = null;
  }

  /**
   * Establece la duración de la cuenta atrás.
   * @param {number} minutes - Minutos para la cuenta atrás.
   */
  return _createClass(CountdownService, [{
    key: "setTime",
    value: function setTime(minutes) {
      var milliseconds = minutes * 60 * 1000;
      this.countdown.setDuration(milliseconds);
      if (this.onTick) {
        this.onTick(this.getFormattedTime());
      }
    }

    /**
     * Establece la duración de la cuenta atrás en milisegundos.
     * @param {number} milliseconds - Milisegundos para la cuenta atrás.
     */
  }, {
    key: "setTimeInMilliseconds",
    value: function setTimeInMilliseconds(milliseconds) {
      this.countdown.setDuration(milliseconds);
      if (this.onTick) {
        this.onTick(this.getFormattedTime());
      }
    }

    /**
     * Inicia la cuenta atrás y configura la actualización periódica.
     * @param {Function} tickCallback - Función a llamar en cada actualización.
     * @param {Function} completeCallback - Función a llamar cuando la cuenta atrás finaliza.
     */
  }, {
    key: "startCountdown",
    value: function startCountdown(tickCallback, completeCallback) {
      var _this = this;
      this.onTick = tickCallback;
      this.onComplete = completeCallback;
      this.countdown.start();
      if (!this.intervalId) {
        this.intervalId = setInterval(function () {
          var time = _this.getFormattedTime();
          if (_this.onTick) {
            _this.onTick(time);
          }
          if (time.totalMilliseconds === 0) {
            if (_this.onComplete) {
              _this.onComplete();
            }
            _this.stopCountdown();
          }
        }, 10); // Actualiza cada 10ms para mostrar milisegundos
      }
    }

    /**
     * Pausa la cuenta atrás.
     */
  }, {
    key: "pauseCountdown",
    value: function pauseCountdown() {
      this.countdown.pause();
    }

    /**
     * Reinicia la cuenta atrás con la misma duración.
     */
  }, {
    key: "resetCountdown",
    value: function resetCountdown() {
      this.countdown.reset();
      if (this.onTick) {
        this.onTick(this.getFormattedTime());
      }
    }

    /**
     * Limpia la cuenta atrás y detiene el intervalo.
     */
  }, {
    key: "clearCountdown",
    value: function clearCountdown() {
      this.countdown.clear();
      this.stopCountdown();
      if (this.onTick) {
        this.onTick(this.getFormattedTime());
      }
    }

    /**
     * Detiene completamente la cuenta atrás y limpia el intervalo.
     */
  }, {
    key: "stopCountdown",
    value: function stopCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    /**
     * Verifica si la cuenta atrás está en marcha.
     * @returns {boolean} true si está en marcha, false si no.
     */
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.countdown.isRunning();
    }

    /**
     * Verifica si la cuenta atrás ha finalizado.
     * @returns {boolean} true si ha finalizado, false si no.
     */
  }, {
    key: "isCompleted",
    value: function isCompleted() {
      return this.countdown.isCompleted();
    }

    /**
     * Obtiene el tiempo restante formateado.
     * @returns {Object} Objeto con horas, minutos, segundos y milisegundos.
     */
  }, {
    key: "getFormattedTime",
    value: function getFormattedTime() {
      var totalMilliseconds = this.countdown.getRemainingTime();
      var milliseconds = totalMilliseconds % 1000;
      var totalSeconds = Math.floor(totalMilliseconds / 1000);
      var seconds = totalSeconds % 60;
      var totalMinutes = Math.floor(totalSeconds / 60);
      var minutes = totalMinutes % 60;
      var hours = Math.floor(totalMinutes / 60);
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        totalMilliseconds: totalMilliseconds,
        formatted: {
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
          milliseconds: {
            tenths: Math.floor(milliseconds / 100),
            hundredths: Math.floor(milliseconds / 10) % 10,
            thousandths: milliseconds % 10
          }
        }
      };
    }
  }]);
}();
var _default = exports.default = CountdownService;
},{"../domain/Countdown":"../src/domain/Countdown.js"}],"../src/ui/components/CountdownDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Componente que muestra el tiempo de la cuenta atrás.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.time - Objeto con el tiempo formateado.
 * @returns {HTMLElement} Elemento de visualización del tiempo.
 */
function CountdownDisplay() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$time = props.time,
    time = _props$time === void 0 ? {
      formatted: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: {
          tenths: 0,
          hundredths: 0,
          thousandths: 0
        }
      }
    } : _props$time;
  var displayContainer = document.createElement("div");
  displayContainer.className = "display";

  // Crear el elemento para el tiempo principal (horas:minutos:segundos)
  var mainTime = document.createElement("div");
  mainTime.className = "main-time";
  mainTime.textContent = "".concat(time.formatted.hours, ":").concat(time.formatted.minutes, ":").concat(time.formatted.seconds);

  // Crear el elemento para los milisegundos
  var milliseconds = document.createElement("div");
  milliseconds.className = "milliseconds";
  milliseconds.textContent = "".concat(time.formatted.milliseconds.tenths).concat(time.formatted.milliseconds.hundredths).concat(time.formatted.milliseconds.thousandths);

  // Añadir los elementos al contenedor
  displayContainer.appendChild(mainTime);
  displayContainer.appendChild(milliseconds);

  /**
   * Actualiza el tiempo mostrado.
   * @param {Object} newTime - Nuevo objeto de tiempo formateado.
   */
  displayContainer.updateTime = function (newTime) {
    mainTime.textContent = "".concat(newTime.formatted.hours, ":").concat(newTime.formatted.minutes, ":").concat(newTime.formatted.seconds);
    milliseconds.textContent = "".concat(newTime.formatted.milliseconds.tenths).concat(newTime.formatted.milliseconds.hundredths).concat(newTime.formatted.milliseconds.thousandths);

    // Añadir clase de alerta cuando queda poco tiempo (menos de 10 segundos)
    if (newTime.totalMilliseconds < 10000 && newTime.totalMilliseconds > 0) {
      displayContainer.classList.add("alert");
    } else {
      displayContainer.classList.remove("alert");
    }

    // Añadir clase de completado cuando el tiempo llega a cero
    if (newTime.totalMilliseconds === 0) {
      displayContainer.classList.add("completed");
    } else {
      displayContainer.classList.remove("completed");
    }
  };
  return displayContainer;
}
var _default = exports.default = CountdownDisplay;
},{}],"../src/ui/pages/Countdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CountdownService = _interopRequireDefault(require("../../application/CountdownService"));
var _CountdownDisplay = _interopRequireDefault(require("../components/CountdownDisplay"));
var _Button = _interopRequireDefault(require("../components/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Página de la cuenta atrás.
 * @returns {HTMLElement} Elemento contenedor de la página de cuenta atrás.
 */
function Countdown() {
  var countdownService = new _CountdownService.default();
  var container = document.createElement("div");
  container.className = "countdown-container";

  // Crear el display de la cuenta atrás
  var initialTime = countdownService.getFormattedTime();
  var display = (0, _CountdownDisplay.default)({
    time: initialTime
  });

  // Crear los controles
  var controlsContainer = document.createElement("div");
  controlsContainer.className = "controls";

  // Botón de pausa (inicialmente oculto)
  var pauseButton = (0, _Button.default)({
    text: "Pause",
    className: "btn-pause",
    onClick: function onClick() {
      if (countdownService.isRunning()) {
        countdownService.pauseCountdown();
        // Ocultar el botón de pausa cuando se pausa la cuenta atrás
        pauseButton.style.display = "none";
      }
    }
  });

  // Inicialmente ocultar el botón de pausa
  pauseButton.style.display = "none";

  // Botón de limpiar
  var clearButton = (0, _Button.default)({
    text: "Clear",
    className: "btn-clear",
    onClick: function onClick() {
      if (!countdownService.isRunning()) {
        countdownService.clearCountdown();
        display.updateTime(countdownService.getFormattedTime());

        // Mostrar los botones de presets nuevamente
        presetButtonsContainer.style.display = "flex";
        clearButton.style.display = "none";
        pauseButton.style.display = "none";
      }
    }
  });

  // Inicialmente ocultar el botón de limpiar
  clearButton.style.display = "none";

  // Crear contenedor para los botones de presets
  var presetButtonsContainer = document.createElement("div");
  presetButtonsContainer.className = "preset-buttons";

  // Definir los presets de tiempo
  var presets = [{
    text: "10 s",
    minutes: 10 / 60
  }, {
    text: "20 s",
    minutes: 20 / 60
  }, {
    text: "30 s",
    minutes: 30 / 60
  }, {
    text: "1 min",
    minutes: 1
  }, {
    text: "2 min",
    minutes: 2
  }, {
    text: "3 min",
    minutes: 3
  }, {
    text: "5 min",
    minutes: 5
  }, {
    text: "10 min",
    minutes: 10
  }, {
    text: "15 min",
    minutes: 15
  }, {
    text: "20 min",
    minutes: 20
  }, {
    text: "30 min",
    minutes: 30
  }, {
    text: "1 h",
    minutes: 60
  }, {
    text: "2 h",
    minutes: 120
  }, {
    text: "3 h",
    minutes: 180
  }, {
    text: "5 h",
    minutes: 300
  }];

  // Crear botones para cada preset
  presets.forEach(function (preset) {
    var presetButton = (0, _Button.default)({
      text: preset.text,
      className: "btn-preset",
      onClick: function onClick() {
        countdownService.setTime(preset.minutes);
        display.updateTime(countdownService.getFormattedTime());

        // Ocultar los presets y mostrar los botones de control
        presetButtonsContainer.style.display = "none";
        clearButton.style.display = "block";
        pauseButton.style.display = "block";

        // Iniciar la cuenta atrás automáticamente
        countdownService.startCountdown(function (time) {
          display.updateTime(time);
        }, function () {
          // Cuando la cuenta atrás finaliza
          // Mostrar los botones de presets nuevamente
          presetButtonsContainer.style.display = "flex";
          clearButton.style.display = "none";
          pauseButton.style.display = "none";
        });
      }
    });
    presetButtonsContainer.appendChild(presetButton);
  });

  // Añadir botones al contenedor de controles
  controlsContainer.appendChild(pauseButton);
  controlsContainer.appendChild(clearButton);

  // Botón para volver a la página de inicio
  var homeButton = (0, _Button.default)({
    text: "Volver a Inicio",
    className: "btn-home",
    onClick: function onClick() {
      countdownService.stopCountdown();

      // Importar dinámicamente para evitar dependencias circulares
      require("_bundle_loader")(require.resolve("./Home")).then(function (module) {
        var Home = module.default;
        var appContainer = document.getElementById("app");
        appContainer.innerHTML = "";
        appContainer.appendChild(Home());
      });
    }
  });

  // Añadir elementos al contenedor principal
  container.appendChild(display);
  container.appendChild(controlsContainer);
  container.appendChild(presetButtonsContainer);
  container.appendChild(homeButton);
  return container;
}
var _default = exports.default = Countdown;
},{"../../application/CountdownService":"../src/application/CountdownService.js","../components/CountdownDisplay":"../src/ui/components/CountdownDisplay.js","../components/Button":"../src/ui/components/Button.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./Home":[["src.7ed060e2.js","../src/index.js"],"src.7ed060e2.js.map","../src/ui/pages/Home.js"]}],"../src/ui/pages/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Timer = _interopRequireDefault(require("./Timer"));
var _Countdown = _interopRequireDefault(require("./Countdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Página de inicio que muestra las opciones de cronómetro y cuenta atrás.
 * @returns {HTMLElement} Elemento contenedor de la página de inicio.
 */
function Home() {
  var container = document.createElement("div");
  container.className = "home-container";

  // Opción de cronómetro
  var timerOption = document.createElement("div");
  timerOption.className = "home-option";
  timerOption.textContent = "CRONÓMETRO";
  timerOption.addEventListener("click", function () {
    var appContainer = document.getElementById("app");
    appContainer.innerHTML = "";
    appContainer.appendChild((0, _Timer.default)());
  });

  // Opción de cuenta atrás
  var countdownOption = document.createElement("div");
  countdownOption.className = "home-option";
  countdownOption.textContent = "CUENTA ATRÁS";
  countdownOption.addEventListener("click", function () {
    var appContainer = document.getElementById("app");
    appContainer.innerHTML = "";
    appContainer.appendChild((0, _Countdown.default)());
  });

  // Añadir opciones al contenedor
  container.appendChild(timerOption);
  container.appendChild(countdownOption);
  return container;
}
var _default = exports.default = Home;
},{"./Timer":"../src/ui/pages/Timer.js","./Countdown":"../src/ui/pages/Countdown.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _Home = _interopRequireDefault(require("./ui/pages/Home"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Función principal que inicializa la aplicación.
 */
function initApp() {
  var appContainer = document.getElementById("app");
  if (appContainer) {
    // Limpiar el contenedor
    appContainer.innerHTML = "";

    // Renderizar la página de inicio
    var homePage = (0, _Home.default)();
    appContainer.appendChild(homePage);
  } else {
    console.error('No se encontró el elemento con id "app"');
  }
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initApp);
},{"./ui/pages/Home":"../src/ui/pages/Home.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62855" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };
    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map