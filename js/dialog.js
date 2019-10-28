'use strict';

(function () {

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  window.dom.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.dom.setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  window.dom.setupClose.addEventListener('click', function () {
    closePopup();
  });

  window.dom.setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    window.dom.setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var setupTop = window.getComputedStyle(window.dom.setupElement, null).getPropertyValue('top');
  var setupLeft = window.getComputedStyle(window.dom.setupElement, null).getPropertyValue('left');
  // функция закрытия окна
  var closePopup = function () {
    window.dom.setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    // восстанавливаем начальное положение диалогового окна после его закрытия
    window.dom.setupElement.style.top = setupTop;
    window.dom.setupElement.style.left = setupLeft;
  };

  // если окно открыто и фокус на кнопке "сохранить", то нажатие на ENTER приводит к отправке формы
  window.dom.setupSubmit.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // ставим обработчик события на  нажатие по картинке пользователя
  window.dom.dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // начальные координаты диалогового окна
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.dom.setupElement.style.top = (window.dom.setupElement.offsetTop - shift.y) + 'px';
      window.dom.setupElement.style.left = (window.dom.setupElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (event) {
          event.preventDefault();
          window.dom.dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        window.dom.dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
