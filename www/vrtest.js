// Empty constructor
function vrtest() {}


vrtest.prototype.show = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'TreasureHuntActivity', 'initializeGvrView', [options]);
}

// Installation constructor that binds ToastyPlugin to window
vrtest.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.vrtest = new vrtest();
  return window.plugins.vrtest;
};
cordova.addConstructor(vrtest.install);
