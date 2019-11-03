'use strict';

(function () {

  var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.dom = {
    setupElement: document.querySelector('.setup'),
    wizardTemplate: document.querySelector('#similar-wizard-template'),
    similarListElement: document.querySelector('.setup-similar-list'),
    setupSimilar: document.querySelector('.setup-similar'),
    setupWizard: document.querySelector('.setup-wizard'),
    wizardCoat: document.querySelector('.setup-wizard').querySelector('.wizard-coat'),
    wizardEyes: document.querySelector('.setup-wizard').querySelector('.wizard-eyes'),
    wizardFireball: document.querySelector('.setup-fireball-wrap').querySelector('input'),
    setupWizardApp: document.querySelector('.setup').querySelector('.setup-wizard-appearance'),
    dialogHandler: document.querySelector('.setup').querySelector('.upload'),
    setupOpen: document.querySelector('.setup-open'),
    setupClose: document.querySelector('.setup').querySelector('.setup-close'),
    setupSubmit: document.querySelector('.setup').querySelector('.setup-submit')
  };

  // создадим объект, в который будут записываться текущие цветовые параметры мага при клике по плащу или глазам
  window.wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  // функция рандомного выбора элемента массива
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  // обработчик на клик, для рандомного выбора и отрисовки цветого параметра элемента мага
  // выбранный цветовой параметр записывается в объект для запоминания
  window.dom.wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS); // генерируем рандомный цвет
    window.dom.wizardCoat.style.fill = newColor; // отрисовываем выбранный цвет в dom-дерево
    window.wizard.onCoatChange(newColor); // записываем выбранный цвет
  });

  // -//-
  window.dom.wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    window.dom.wizardEyes.style.fill = newColor;
    window.wizard.onEyesChange(newColor);
  });

  // -//-
  window.dom.wizardFireball.addEventListener('click', function () {
    var newColor = getRandomElement(FIREBALL_COLOR);
    window.dom.wizardFireball.value = newColor;
  });

})();


