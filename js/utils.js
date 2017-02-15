'use strict';

window.utils = (function () {

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

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
      var pressed = (element.getAttribute('aria-pressed') === 'true');
      if (!pressed) {
        element.setAttribute('aria-pressed', !pressed);
      }
    },

    // нажата клавиша Enter
    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    // нажата клавиша ESC
    isDeactivationEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
    },
  };
})();
