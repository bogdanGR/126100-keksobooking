'use strict';
// копируем шаблон, добавляем пины с данными
window.render = (function () {
  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.element-to-clone');
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;

  return function (data) {
    var newElement = elementToClone.cloneNode(true);
    var pinAvatar = newElement.querySelector('img');
    pinAvatar.src = data.author.avatar;
    newElement.style.left = data.location.x - PIN_WIDTH / 2 + 'px';
    newElement.style.top = data.location.y - PIN_HEIGHT + 'px';
    newElement.setAttribute('tabindex', '0');
    newElement.data = data;

    return newElement;
  };
})();
