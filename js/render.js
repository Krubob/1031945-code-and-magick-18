'use strict';

(function () {

  var renderWizard = function (wizard) {
    var element = window.dom.wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length; // записываем кол-во загруженных элементов через тернарный оператор
    window.dom.similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      window.dom.similarListElement.appendChild(renderWizard(data[i]));
    }

    window.dom.setupSimilar.classList.remove('hidden');
  };
})();
