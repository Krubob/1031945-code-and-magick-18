'use strict';

(function () {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var fileChooser = document.querySelector('.upload input[type=file]'); // выбор аватарки
    var preview = document.querySelector('.setup-user-pic'); // картинка куда мы вставляем загруженное изображение

    // подпишемся на событие изменения аватарки
    fileChooser.addEventListener('change', function () {
        var file = fileChooser.files[0];

        // проверка на наличие выбора изображения
       if (file) {
        var fileName = file.name.toLowerCase();
       }

       // создаем функцию возвращающую true если расширение файла соотвтествует искомым типам
       var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });

      // проверка, что файл является изображением, то прочитаем его с помощью класса FileReader
      if (matches) {
        var reader = new FileReader(); // создаем FileReader

        reader.addEventListener('load', function () {
          preview.src = reader.result; // записываем результат в src
        });

        reader.readAsDataURL(file); // читаем dataURL картики
      }
     });
})();
