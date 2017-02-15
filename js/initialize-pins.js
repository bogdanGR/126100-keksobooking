'use strict';

window.initializePins = (function () {

  return {
    showPin: function (cb) {
      cb();
    },
    // функция дизактивации активного пина
    disableActivePin: function () {
      var activePinNode = document.querySelector('.pin--active');
      if (activePinNode) {
        activePinNode.classList.remove('pin--active');
      }
    }
  };
})();
