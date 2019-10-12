'use strict';

var numberOfObj = 4;

var tmpData = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

var dom = {
  setupElement: document.querySelector('.setup'),
  similarWizardTemplate: document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
  similarListElement: document.querySelector('.setup').querySelector('.setup-similar-list'),
  setupSimilar: document.querySelector('.setup').querySelector('.setup-similar')
};

dom.setupElement.classList.remove('hidden');

var renderWizard = function () {
  dom.wizardElement = dom.similarWizardTemplate.cloneNode(true);

  dom.wizardElement.querySelector('.setup-similar-label').textContent = randomArr[i].name;
  dom.wizardElement.querySelector('.wizard-coat').style.fill = randomArr[i].coatColor;
  dom.wizardElement.querySelector('.wizard-eyes').style.fill = randomArr[i].eyesColor;

  return dom.wizardElement;
};

// создаем функцию для выбора случайного элемента массива
var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
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
// console.log(randomArr);

dom.fragment = document.createDocumentFragment();
for (var i = 0; i < numberOfObj; i++) {
  dom.fragment.appendChild(renderWizard(randomArr[i]));
}
dom.similarListElement.appendChild(dom.fragment);
dom.setupSimilar.classList.remove('hidden');
