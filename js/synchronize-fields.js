'use strict';
window.synchronizeFields = (function (syncDomElem, syncDomElem2, arrValueSync, arrValueSync2, strNameValue, cb) {
  syncDomElem.addEventListener('change', function () {
    var selectedVal = arrValueSync.indexOf(syncDomElem.value);
    cb(arrValueSync2[selectedVal]);
  });
});
