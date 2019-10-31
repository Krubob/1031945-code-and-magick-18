'use strict';

(function () {

  window.backend = {
    // функция load получает с сервера данные
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () { // создаем обработчик события окончания загрузки
        if (xhr.status === 200) {
          onLoad(xhr.response); // вызов коллбэка onLoad при успешной загрузке, в ее параметр передается набор полученных данных
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText); // вызов коллбэка onError при ошибке во время загрузки, в ее параметр передается сообщение об ошибке
        }
      });

      xhr.addEventListener('error', function () { // добавляем обработку ошибок
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () { // добавляем обработку временной задержки
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 10000; // 10s

      xhr.open('GET', URL);
      xhr.send();
    },
    // функция save отправляет данные игрока на сервер
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };

})();


