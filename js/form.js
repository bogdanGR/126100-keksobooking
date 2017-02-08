'use strict';
(function () {
  var noticeForm = document.querySelector('.notice__form');

  var formTime = noticeForm.querySelector('#time');
  var formTimeout = noticeForm.querySelector('#timeout');

  var formType = noticeForm.querySelector('#type');
  var formPrice = noticeForm.querySelector('#price');

  var formRoomNumber = noticeForm.querySelector('#room_number');
  var formCapacity = noticeForm.querySelector('#capacity');


  var formTitle = noticeForm.querySelector('#title');
  var formAddress = noticeForm.querySelector('#address');

  window.initializePins();

  window.synchronizeFields(formTime, formTimeout, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(formTimeout, formTime, ['12', '13', '14'], ['12', '13', '14'], 'value');
  window.synchronizeFields(formType, formPrice, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min');
  window.synchronizeFields(formRoomNumber, formCapacity, ['1', '2', '100'], ['0', '3', '3'], 'value');


  formTitle.required = true;
  formTitle.minLength = 30;
  formTitle.maxLength = 100;

  formPrice.required = true;
  formPrice.type = 'number';
  formPrice.min = 1000;
  formPrice.max = 1000000;

  formAddress.required = true;

})();
