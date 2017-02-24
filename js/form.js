'use strict';

(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');

  var noticeForm = document.querySelector('.notice__form');

  var formTime = noticeForm.querySelector('#time');
  var formTimeout = noticeForm.querySelector('#timeout');

  var formType = noticeForm.querySelector('#type');
  var formPrice = noticeForm.querySelector('#price');

  var formRoomNumber = noticeForm.querySelector('#room_number');
  var formCapacity = noticeForm.querySelector('#capacity');


  var formTitle = noticeForm.querySelector('#title');
  var formAddress = noticeForm.querySelector('#address');

  // загружаем данные
  window.initializePins.loadData();

  var onPinKeyDown = function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      var currentPin = evt.target;
      window.initializePins.showPin(function () {
        window.initializePins.disableActivePin();
        currentPin.classList.add('pin--active');
        window.utils.changeAria(currentPin);

        window.showCard(currentPin.data, function () {
          window.initializePins.disableActivePin();
          // возвращаем фокус на пин с которого ушли
          currentPin.focus();
        });
      });
    }
  };
  var onActivatePinClick = function (evt) {
    var closest = window.utils.getClosestElement(evt.target, 'pin', 'tokyo__pin-map');
    window.showCard(closest.data, function () {
      window.initializePins.disableActivePin();
    });
    // проверим что нажатие действительно произошло на pin
    if (closest !== null) {
      window.initializePins.showPin(function () {
        window.initializePins.disableActivePin();
        if (!closest.classList.contains('pin--active')) {
          closest.classList.add('pin--active');
          window.utils.changeAria(closest);
        }
      });
    }
  };
  // обработчик клика по карте
  pinMap.addEventListener('keydown', onPinKeyDown);
  pinMap.addEventListener('click', onActivatePinClick);

  window.synchronizeFields(formTime, formTimeout, ['12', '13', '14'], ['12', '13', '14'], 'value', function (val) {
    formTimeout.value = val;
  });
  window.synchronizeFields(formTimeout, formTime, ['12', '13', '14'], ['12', '13', '14'], 'value', function (val) {
    formTime.value = val;
  });
  window.synchronizeFields(formType, formPrice, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min', function (val) {
    formPrice.min = val;
  });
  window.synchronizeFields(formRoomNumber, formCapacity, ['1', '2', '100'], ['0', '3', '3'], 'value', function (val) {
    formCapacity.value = val;
  });
  window.synchronizeFields(formCapacity, formRoomNumber, ['0', '3', '3'], ['1', '2', '100'], 'value', function (val) {
    formRoomNumber.value = val;
  });

  formTitle.required = true;
  formTitle.minLength = 30;
  formTitle.maxLength = 100;

  formPrice.required = true;
  formPrice.type = 'number';
  formPrice.min = 1000;
  formPrice.max = 1000000;

  formAddress.required = true;

  // Снимаем активный пин по умолчанию
  window.initializePins.disableActivePin();

})();
