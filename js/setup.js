'use strict';

var tmpData = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

var dom = {
  setupElement: document.querySelector('.setup'),
  wizardTemplateElement: document.querySelector('#similar-wizard-template')
};

dom.hiddenElement = dom.setupElement.classList.remove('hidden');
dom.similarListElement = dom.setupElement.querySelector('.setup-similar-list');

dom.similarWizardTemplate = dom.wizardTemplateElement
  .content
  .querySelector('.setup-similar-item');

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
var createArrOfObj = function (numberOfObj) {
  var arr = []; // создаем пустой массив для записи в него объектов
  for (var i = 0; i < numberOfObj; i++) {
    arr.push(createRandomObj());
  }
  return arr;
};

var randomArr = createArrOfObj(4);
// console.log(randomArr);

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(randomArr[i]));
}
dom.similarListElement.appendChild(fragment);

dom.setupElement.querySelector('.setup-similar').classList.remove('hidden');
