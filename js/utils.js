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
      var pressed = (element.getAttribute('aria-pressed') === 'true');
      if (!pressed !== null) {
        element.setAttribute('aria-pressed', !pressed);
      }
    },

    // нажата клавиша Enter
    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    }
  };
})();
