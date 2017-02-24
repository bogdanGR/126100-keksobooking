'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;

  return {
    // поиск ближайшего элемента с селектором
    getClosestElement: function (elem, selector, stopSelector) {
      while (elem && !elem.classList.contains(selector) && !elem.classList.contains(stopSelector)) {
        elem = elem.parentElement;
      }
      return elem;
    },
    // смена свойства нажатой кнопки
    changeAria: function (element) {
      var pins = document.querySelectorAll('.pin:not(.pin__main)');

      if (pins.length > 0) {
        for (var i = 0; i < pins.length; i++) {
          pins[i].setAttribute('aria-pressed', 'false');
        }
      }
      var pressed = (element.getAttribute('aria-pressed') === 'true');
      element.setAttribute('aria-pressed', !pressed);

    },

    // нажата клавиша Enter
    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    }
  };
})();
