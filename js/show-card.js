'use strict';

window.showCard = (function () {

  var dialog = document.querySelector('.dialog');
  var disableDialog = dialog.querySelector('.dialog__close');
  var onDialogClose = null;

  // Скрываем диалоговое окно по умолчанию
  dialog.style.display = 'none';

  var openDialog = function () {
    dialog.style.display = 'block';
  };

  var closeDialog = function (evt) {
    dialog.style.display = 'none';
    window.utils.changeAria(disableDialog);
    disableDialog.removeEventListener('keydown', onKeyDown);

    if (typeof onDialogClose === 'function') {
      onDialogClose();
    }
  };

  var onKeyDown = function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      closeDialog(evt);
    }
  };

  return function (cb) {
    openDialog();

    disableDialog.addEventListener('keydown', onKeyDown);
    disableDialog.addEventListener('click', closeDialog);

    onDialogClose = cb;
  };

})();
