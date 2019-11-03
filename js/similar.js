'use strict';

(function () {

  var coatColor; // создаем переменную для записи в нее выбранного значения цвета мага
  var eyesColor; // -//-
  var wizards = []; // создаем пустой массив для записи в него данных загруженных с сервера для отсутствия повторной загрузки

  // функция для присваивания рейтинга магу (или веса)
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) { // если цвет загруженный с сервера равен выбранному
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) { // -//-
      rank += 1;
    }

    return rank;
  };

  // функция сортировки магов загруженных с сервера по весам
  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      // запишем алгоритм сортировки прямо в теле функции
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  // функция, которая запоминает выбранный цвет и
  // делает сортировку по наиболее похожему цвету по загруженным данным
  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  // -//-
  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = window.dom.setupElement.querySelector('.setup-wizard-form');
  // cоздаем обработчик события отправки данных формы на сервер
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () { // отправка данных на сервер
      window.dom.setupElement.classList.add('hidden'); // закрытие формы при успешной оотправке
    }, errorHandler);
    evt.preventDefault(); // отменяем действие формы по умолчанию
  });

  window.backend.load(successHandler, errorHandler);

})();
