'use strict';

window.showCard = (function () {
  var onDialogClose = null;
  var tokyoElement = document.querySelector('.tokyo');
  var dialogTemplate = document.querySelector('#dialog-template');
  var dialogElement = dialogTemplate.content.querySelector('.dialog');
  var dialogClone = dialogElement.cloneNode(true);
  var disableDialog = dialogClone.querySelector('.dialog__close');
  var offerTitleElement = dialogClone.querySelector('.lodge__title');
  var userAvatar = dialogClone.querySelector('img');
  var offerAddressElement = dialogClone.querySelector('.lodge__address');
  var offerPriceElement = dialogClone.querySelector('.lodge__price');
  var offerTypeElement = dialogClone.querySelector('.lodge__type');
  var offerRoomsAndGuestsElement = dialogClone.querySelector('.lodge__rooms-and-guests');
  var offerCheckinTimeElement = dialogClone.querySelector('.lodge__checkin-time');
  var offerDescriptionElement = dialogClone.querySelector('.lodge__description');
  var offerPhotosElement = dialogClone.querySelector('.lodge__photos');
  var offerFeaturesElement = dialogClone.querySelector('.lodge__features');

  // Скрываем диалоговое окно по умолчанию
  dialogClone.style.display = 'none';
  // Открываем диалог с данными выбраного пина
  var openDialog = function (data) {
    dialogClone.style.display = 'block';

    offerPhotosElement.innerHTML = '';
    offerFeaturesElement.innerHTML = '';
    offerTitleElement.innerText = data.offer.title;
    userAvatar.setAttribute('src', data.author.avatar);
    userAvatar.setAttribute('alt', 'Avatar');
    offerAddressElement.innerText = data.offer.address;
    offerPriceElement.innerText = data.offer.price + ' ₽/ночь';
    offerTypeElement.innerText = data.offer.type;
    offerRoomsAndGuestsElement.innerText = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
    offerCheckinTimeElement.innerText = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    offerDescriptionElement.innerText = data.offer.description;

    data.offer.features.forEach(function (item) {
      var featureElement = document.createElement('span');

      featureElement.classList.add('feature__image');
      featureElement.classList.add('feature__image--' + item);
      offerFeaturesElement.appendChild(featureElement);
    });

    data.offer.photos.forEach(function (item) {
      var image = new Image(52, 42);

      image.src = item;
      offerPhotosElement.appendChild(image);
    });
    tokyoElement.appendChild(dialogClone);
  };
  // фунция закрытия диалога
  window.onCloseDialogClick = function () {
    dialogClone.style.display = 'none';
    window.utils.changeAria(disableDialog);
    disableDialog.removeEventListener('keydown', onKeyDown);

    if (typeof onDialogClose === 'function') {
      onDialogClose();
    }
  };
  // открытия диалога с клавиатуры
  var onKeyDown = function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      window.onCloseDialogClick();
    }
  };

  return function (data, cb) {
    openDialog(data);

    disableDialog.addEventListener('keydown', onKeyDown);
    disableDialog.addEventListener('click', window.onCloseDialogClick);

    onDialogClose = cb;
  };

})();
