'use strict';

window.initializePins = (function () {
  var tokyo = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  var DATA_URL = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data';
  var similarApartments = [];

  var loadData = function () {
    window.load(DATA_URL, function (data) {
      similarApartments = data;
      renderData();
    });
  };

  var renderData = function () {
    var slicedArr = similarApartments.slice(0, 3);

    slicedArr.forEach(function (item) {
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
      if (activePinNode) {
        activePinNode.classList.remove('pin--active');
      }
    },
    loadData: loadData
  };
})();
