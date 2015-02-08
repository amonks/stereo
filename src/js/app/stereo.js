define(['jquery'], function($) {
  console.log("loading canvases.coffee");
  var Stereo = {};
  Stereo.init = function() {
    Stereo.left = $('body').append('<canvas id="left">');
    Stereo.right = $('body').append('<canvas id="right">');
  };
  return Stereo;
});
