'use strict';
window.synchronizeFields = function (syncDomElem, syncDomElem2, arrValueSync, arrValueSync2, strNameValue) {

  syncDomElem.addEventListener('change', function () {
    var selectedVal = arrValueSync.indexOf(syncDomElem.value);
    syncDomElem2[strNameValue] = arrValueSync2[selectedVal];
  });

  syncDomElem2.addEventListener('change', function () {
    var selectedVal = arrValueSync2.indexOf(syncDomElem2.value);
    syncDomElem[strNameValue] = arrValueSync[selectedVal];
  });
};
