// Empty constructor
function vrtest() {}


vrtest.prototype.show = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'TreasureHuntActivity', 'initializeGvrView', [options]);
}

