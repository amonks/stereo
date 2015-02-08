define(['vendor/purl', 'jquery'], function(Purl, $) {
  console.log("loading state.coffee");
  var State = {};
  State.init = function() {
    var options = decodeObjFromUrl();
    // add sensible defaults
  };
  State.setSize = function(width, height) {
    State.width = width;
    State.height = height;
  };
  State.incrementFrameCount = function() {
    State.frameCount += State.speed;
  };
  encodeObjForUrl = function(obj) {
    $.param(obj);
  };
  decodeObjFromUrl = function() {
    var queryString =  window.location.href.slice(window.location.href.indexOf('?') + 1);
    return decodeURIComponent( queryString );
  };
  return State;
});
