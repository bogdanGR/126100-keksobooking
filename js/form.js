'use strict';

var pins = document.querySelectorAll('.pin');
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

var disableActivePin = function () {
  var activePinNode = document.querySelector('.pin--active');
  if (activePinNode) {
    activePinNode.classList.remove('pin--active');
  }
};
var activePin = function (pin) {
  disableActivePin();
  pin.classList.add('pin--active');
  dialog.style.display = 'block';
};

for (var i = 0; i < pins.length; i++) {
  pins[i].addEventListener('click', function (e) {
    activePin(e.currentTarget);
  });
}

var closeDialog = function () {
  dialog.style.display = 'none';
  disableActivePin();
};

disableDialog.addEventListener('click', closeDialog);

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
