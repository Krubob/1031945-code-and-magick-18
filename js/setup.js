'use strict';

(function () {

  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.dom = {
    setupElement: document.querySelector('.setup'),
    similarWizardTemplate: document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
    similarListElement: document.querySelector('.setup').querySelector('.setup-similar-list'),
    setupSimilar: document.querySelector('.setup').querySelector('.setup-similar'),
    setupWizard: document.querySelector('.setup').querySelector('.setup-wizard'),
    wizardCoat: document.querySelector('.setup').querySelector('.setup-wizard').querySelector('.wizard-coat'),
    wizardEyes: document.querySelector('.setup').querySelector('.setup-wizard').querySelector('.wizard-eyes'),
    wizardFireball: document.querySelector('.setup').querySelector('.setup-fireball-wrap'),
    setupWizardApp: document.querySelector('.setup').querySelector('.setup-wizard-appearance'),
    dialogHandler: document.querySelector('.setup').querySelector('.upload'),
    setupOpen: document.querySelector('.setup-open'),
    setupClose: document.querySelector('.setup').querySelector('.setup-close'),
    setupSubmit: document.querySelector('.setup').querySelector('.setup-submit')
  };

  // функция рандомного выбора элемента массива
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.dom.wizardCoat.addEventListener('click', function () {
    var randomCoatColor = getRandomElement(coatColor);
    window.dom.wizardCoat.style.fill = randomCoatColor;
    window.dom.setupWizardApp.querySelectorAll('input')[0].value = randomCoatColor;
  });

  window.dom.wizardEyes.addEventListener('click', function () {
    var randomEyesColor = getRandomElement(eyesColor);
    window.dom.wizardEyes.style.fill = randomEyesColor;
    window.dom.setupWizardApp.querySelectorAll('input')[1].value = randomEyesColor;
  });

  window.dom.wizardFireball.addEventListener('click', function () {
    var randomFireballColor = getRandomElement(fireballColor);
    window.dom.wizardFireball.style.backgroundColor = randomFireballColor;
    window.dom.wizardFireball.querySelector('input').value = randomFireballColor;
  });

  var renderWizard = function (wizard) {
    window.dom.wizardElement = window.dom.similarWizardTemplate.cloneNode(true);

    window.dom.wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    window.dom.wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    // window.dom.wizardElement.querySelector('.wizard-eyes').style.fill = randomArr[i].eyesColor;

    return window.dom.wizardElement;
  };

  // работа с сервером

  var form = window.dom.setupElement.querySelector('.setup-wizard-form');
  // cоздаем обработчик события отправки данных формы на сервер
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () { // отправка данных на сервер
      window.dom.setupElement.classList.add('hidden'); // закрытие формы при успешной оотправке
    }, errorHandler);
    evt.preventDefault(); // отменяем действие формы по умолчанию
  });

  // добавляем обработчик успешной загрузки в отдельную переменную и отрисовываем магов
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    window.dom.similarListElement.appendChild(fragment);
    window.dom.setupElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  // добавляем обработчик ошибки в отдельную переменную и отрисовываем сообщение об ошибке в dom-элемент
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

  window.backend.load(successHandler, errorHandler);

})();


