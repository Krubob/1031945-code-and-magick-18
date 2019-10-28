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

  var numberOfObj = 4;

  var tmpData = {
    WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
  };

  // dom.setupElement.classList.remove('hidden');

  var renderWizard = function () {
    window.dom.wizardElement = window.dom.similarWizardTemplate.cloneNode(true);

    window.dom.wizardElement.querySelector('.setup-similar-label').textContent = randomArr[i].name;
    window.dom.wizardElement.querySelector('.wizard-coat').style.fill = randomArr[i].coatColor;
    window.dom.wizardElement.querySelector('.wizard-eyes').style.fill = randomArr[i].eyesColor;

    return window.dom.wizardElement;
  };

  // создаем функцию для генерации объекта со случайными значениями
  var createRandomObj = function () {
    var randomObj = {}; // создаем пустой объект для записи случайных значений
    var randomName = getRandomElement(tmpData.WIZARD_NAMES);
    var randomSurname = getRandomElement(tmpData.WIZARD_SURNAMES);
    randomObj.name = randomName + ' ' + randomSurname;
    randomObj.coatColor = getRandomElement(tmpData.COAT_COLORS);
    randomObj.eyesColor = getRandomElement(tmpData.EYES_COLORS);
    return randomObj;
  };

  // создаем функцию для генерации масссива из N объектов со случайными значениями
  var createArrOfObj = function () {
    var arr = []; // создаем пустой массив для записи в него объектов
    for (var i = 0; i < numberOfObj; i++) {
      arr.push(createRandomObj());
    }
    return arr;
  };

  var randomArr = createArrOfObj(numberOfObj);

  window.dom.fragment = document.createDocumentFragment();
  for (var i = 0; i < numberOfObj; i++) {
    window.dom.fragment.appendChild(renderWizard(randomArr[i]));
  }
  window.dom.similarListElement.appendChild(window.dom.fragment);
  window.dom.setupSimilar.classList.remove('hidden');

})();


