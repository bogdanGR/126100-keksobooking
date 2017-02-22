'use strict';
window.render = (function () {
  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.element-to-clone');

  return function (data) {
    var newElement = elementToClone.cloneNode(true);
    var pinAvatar = newElement.querySelector('img');
    pinAvatar.src = data.author.avatar;
    newElement.style.top = data.location.y + 'px';
    newElement.style.left = data.location.x + 'px';
    newElement.setAttribute('tabindex', 0);
    newElement.data = data;

    return newElement;
  };
})();
