'use strict';

window.initializePins = (function () {
  var tokyo = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  var DATA_URL = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data';
  var similarApartments = [];

  // переменные для фильтации
  var formFilters = document.querySelector('.tokyo__filters');
  var filterType = formFilters.querySelector('#housing_type');
  var housingPrice = formFilters.querySelector('#housing_price');
  var filterRooms = formFilters.querySelector('#housing_room-number');
  var filterGuests = formFilters.querySelector('#housing_guests-number');
  var filtersContainer = formFilters.querySelector('#housing_features');
  var filterFeatures = filtersContainer.querySelectorAll('input[type=checkbox]');

  var ANY_VALUE = 'any';
  var MIN_PRICE_VALUE = 10000;
  var MAX_PRICE_VALUE = 50000;

  var isInRangeType = function (dataApartment) {
    return (filterType.value === ANY_VALUE) || (filterType.value === dataApartment.offer.type);
  };

  // Проверка на соответствие ценовому диапазону
  var isInRangePrice = function (item) {
    switch (housingPrice.value) {
      case 'low':
        return item.offer.price < MIN_PRICE_VALUE;
      case 'middle':
        return item.offer.price >= MIN_PRICE_VALUE && item.offer.price <= MAX_PRICE_VALUE;
      case 'hight':
        return item.offer.price > MAX_PRICE_VALUE;
    }
    return false;
  };

  var isInRangeRooms = function (dataApartment) {
    return (filterRooms.value === ANY_VALUE) || (dataApartment.offer.rooms === +filterRooms.value);
  };

  var isInRangeGuests = function (dataApartment) {
    return (filterGuests.value === ANY_VALUE) || (dataApartment.offer.guests === +filterGuests.value);
  };

  var isInRangeFeatures = function (dataApartment) {

    var isFeatureChecked = function (feature) {
      return feature.checked;
    };

    var getNameFeature = function (feature) {
      return feature.value;
    };

    var checkedFeatures = [].filter.call(filterFeatures, isFeatureChecked).map(getNameFeature);
    var apartmentFeatures = dataApartment.offer.features;

    var checkFeatures = function (feature) {
      return apartmentFeatures.indexOf(feature) !== -1;
    };

    return (checkedFeatures.length === 0) || (checkedFeatures.every(checkFeatures));
  };
  var filterApartments = function (item) {
    return isInRangeType(item) &&
      isInRangePrice(item) &&
      isInRangeRooms(item) &&
      isInRangeGuests(item) &&
      isInRangeFeatures(item);
  };
   // грузим данные с сервера
  var loadData = function () {
    window.load(DATA_URL, function (data) {
      similarApartments = data;
      var slicedArr = similarApartments.slice(0, 3);
      renderData(slicedArr);
    });
  };

  // Удаление меток на карте и скрытие карточки жилья, если она была открыта
  var clearMap = function () {
    window.onCloseDialogClick();

    var pins = tokyo.querySelectorAll('.pin');

    for (var i = 0; i < pins.length; i++) {
      if (!pins[i].classList.contains('pin__main')) {
        tokyo.removeChild(pins[i]);
      }
    }
  };
  // Обновление меток при изменении значений в фильтре
  formFilters.addEventListener('change', function () {
    clearMap();
    renderData(similarApartments.filter(filterApartments));
  });

  var renderData = function (arr) {
    arr.forEach(function (item) {
      fragment.appendChild(window.render(item));
    });
    tokyo.appendChild(fragment);
  };
  return {
    showPin: function (cb) {
      cb();
    },
    // функция дизактивации активного пина
    disableActivePin: function () {
      var activePinNode = document.querySelector('.pin--active');
      if (activePinNode !== null) {
        activePinNode.classList.remove('pin--active');
      }
    },
    loadData: loadData
  };
})();
