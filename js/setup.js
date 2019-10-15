'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var form = document.querySelector('.form');
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var setupWizardApp = setup.querySelector('.setup-wizard-appearance');

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// функция рандомного выбора элемента массива
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// функция открытия окна и закрытия нажатием на ESC
var openPopup = function () {
  setup.classList.remove('hidden');
  // если окно настройки открыто, то закрытие окна происходит по нажатию на ESC
  document.addEventListener('keydown', onPopupEscPress);
};

// функция закрытия окна
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// при клике на иконку происходит открытие окна настройки
setupOpen.addEventListener('click', function () {
  openPopup();
});

// при клике на кнопку закрытия происходит закрытие окна настройки
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// если иконка в фокусе, то по нажатию на ENTER происходит открытие окна настройки
setupClose.addEventListener('click', function () {
  closePopup();
});

// если окно открыто и фокус находится на кнопке закрытия, то по нажатию на ENTER происходит закрытие окна
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// если окно открыто, то нажатие на кнопку "сохранить" приводит к отправке формы
setupSubmit.addEventListener('click', function () {});

// если окно открыто и фокус на кнопке "сохранить", то нажатие на ENTER приводит к отправке формы
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    form.submit();
  }
});

wizardCoat.addEventListener('click', function () {
  var randomCoatColor = getRandomElement(coatColor);
  wizardCoat.style.fill = randomCoatColor;
  setupWizardApp.querySelectorAll('input')[0].value = randomCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var randomEyesColor = getRandomElement(eyesColor);
  wizardEyes.style.fill = randomEyesColor;
  setupWizardApp.querySelectorAll('input')[1].value = randomEyesColor;
});

wizardFireball.addEventListener('click', function () {
  var randomFireballColor = getRandomElement(fireballColor);
  wizardFireball.style.backgroundColor = randomFireballColor;
  wizardFireball.querySelector('input').value = randomFireballColor;
});
