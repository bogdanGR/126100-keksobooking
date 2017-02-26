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
      var tokyoMap = document.querySelector('.tokyo__pin-map');
      var pin = tokyoMap.querySelector('.pin[aria-pressed=true]');
      if (pin !== null) {
        pin.setAttribute('aria-pressed', 'false');
      }
      var pressed = !(element.getAttribute('aria-pressed') === 'true');
      element.setAttribute('aria-pressed', pressed.toString());
    },
    // нажата клавиша Enter
    isActivateEvent: function (evt) {
      return evt && evt.keyCode === ENTER_KEY_CODE;
    }
  };
})();
