'use strict';
var tmpData = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

// создаем функцию для выбора случайного элемента массива
var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
// var randomName = getRandomElement(tmpData.WIZARD_NAMES);
// var randomSurname = getRandomElement(tmpData.WIZARD_SURNAMES);

// создаем функцию для генерации объекта со случайными значениями
var createRandomObj = function () {
  var randomObj = {}; // создаем пустой объект для записи случайных значений
  randomObj.name = getRandomElement(tmpData.WIZARD_NAMES) + ' ' + getRandomElement(tmpData.WIZARD_SURNAMES);
  randomObj.coatColor = getRandomElement(tmpData.coatColor);
  randomObj.eyesColor = getRandomElement(tmpData.eyesColor);
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
