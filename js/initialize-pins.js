'use strict';

window.initializePins = function () {
  window.utils = (function () {

    var ENTER_KEY_CODE = 13;

    return {
      changeAria: function (element) {

        var pressed = (element.getAttribute('aria-pressed') === 'true');
        if (!pressed) {
          element.setAttribute('aria-pressed', !pressed);
        }
      },
      isActivateEvent: function (evt) {
        return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
      }
    };
  })();

  (function () {
    var pinMap = document.querySelector('.tokyo__pin-map');
    var dialog = document.querySelector('.dialog');
    var disableDialog = dialog.querySelector('.dialog__close');

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
    var keyActivatePin = function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        activatePin(evt);
      }
    };

    var closeDialog = function () {
      dialog.style.display = 'none';
      disableActivePin();
      window.utils.changeAria(disableDialog);
    };
    disableDialog.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        closeDialog();
      }
    });
    pinMap.addEventListener('click', activatePin);
    pinMap.addEventListener('keydown', keyActivatePin);
    disableDialog.addEventListener('click', closeDialog);
  })();
};
