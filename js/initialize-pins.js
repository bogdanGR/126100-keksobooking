'use strict';

window.initializePins = function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dialog = document.querySelector('.dialog');
  var disableDialog = dialog.querySelector('.dialog__close');

  var ENTER_KEY_CODE = 13;

  var changeAria = function (element) {
    var pressed = (element.getAttribute('aria-pressed') === 'true');
    if (!pressed) {
      element.setAttribute('aria-pressed', !pressed);
    }
  };

  var disableActivePin = function () {
    var activePinNode = document.querySelector('.pin--active');
    if (activePinNode) {
      activePinNode.classList.remove('pin--active');
    }
  };

  var activatePin = function (evt) {
    var element = evt.target.classList.contains('pin') ? evt.target : evt.target.parentElement;

    disableActivePin();
    element.classList.add('pin--active');
    dialog.style.display = 'block';
  };

  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  var keyActivatePin = function (evt) {
    if (isActivateEvent(evt)) {
      activatePin(evt);
    }
  };

  var closeDialog = function () {
    dialog.style.display = 'none';
    disableActivePin();
    changeAria(disableDialog);
  };
  disableDialog.addEventListener('keydown', function (evt) {
    if (isActivateEvent(evt)) {
      closeDialog();
    }
  });
  pinMap.addEventListener('click', activatePin);
  pinMap.addEventListener('keydown', keyActivatePin);
  disableDialog.addEventListener('click', closeDialog);
};
