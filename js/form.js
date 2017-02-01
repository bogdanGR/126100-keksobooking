'use strict';

var pinMap = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var disableDialog = dialog.querySelector('.dialog__close');

var noticeForm = document.querySelector('.notice__form');
var formTitle = noticeForm.querySelector('#title');
var formPrice = noticeForm.querySelector('#price');
var formAddress = noticeForm.querySelector('#address');
var formTime = noticeForm.querySelector('#time');
var formTimeout = noticeForm.querySelector('#timeout');
var formType = noticeForm.querySelector('#type');
var formRoomNumber = noticeForm.querySelector('#room_number');
var formCapacity = noticeForm.querySelector('#capacity');

var ENTER_KEY_CODE = 13;

var changeAria = function (element) {
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  if (!pressed) {
    element.setAttribute('aria-pressed', !pressed);
  }
};
var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};
pinMap.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    var element = evt.target.classList.contains('pin') ? evt.target : evt.target.parentElement;

    disableActivePin();
    element.classList.add('pin--active');
    dialog.style.display = 'block';
  }
});

var disableActivePin = function () {
  var activePinNode = document.querySelector('.pin--active');
  if (activePinNode) {
    activePinNode.classList.remove('pin--active');
  }
};
pinMap.addEventListener('click', function (evt) {
  var element = evt.target.classList.contains('pin') ? evt.target : evt.target.parentElement;

  disableActivePin();
  element.classList.add('pin--active');
  dialog.style.display = 'block';
});

var closeDialog = function () {
  dialog.style.display = 'none';
  disableActivePin();
  changeAria(disableDialog);
};
disableDialog.addEventListener('click', closeDialog);

disableDialog.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeDialog();
  }
});

formTime.addEventListener('change', function () {
  formTimeout.value = formTime.value;
});
formTimeout.addEventListener('change', function () {
  formTime.value = formTimeout.value;
});

formType.addEventListener('change', function () {
  formPrice.min = formType.value;
});
formRoomNumber.addEventListener('change', function () {
  formCapacity.value = +formRoomNumber.value === 2 || +formRoomNumber.value === 100 ? 3 : 0;
});

formTitle.required = true;
formTitle.minLength = 30;
formTitle.maxLength = 100;

formPrice.required = true;
formPrice.type = 'number';
formPrice.min = 1000;
formPrice.max = 1000000;

formAddress.required = true;
