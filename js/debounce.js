'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 300; // ms
  // функция задержки сортировки магов
  window.debounce = function (cb) {
    var lastTimeout = null;
    // возвращает функцию у которой свой таймер для устранения возможного
    // конфликта отмены таймеров при одновременном вызове для смены цветов плаща и глаз
    return function () {
      var parameters = arguments; // псевдомассив, содержащий аргументы переданные в функцию
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
