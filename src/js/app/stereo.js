define(['jquery', 'app/state'], function($, State) {
  console.log("loading stereo.coffee");
  var Stereo = {};
  Stereo.init = function() {
    $('body').append('<canvas id="left">');
    $('body').append('<canvas id="right">');
    State.setStereo();

    console.log(window.innerWidth / 2, window.innerHeight);
    State.setSize(window.innerWidth / 2, window.innerHeight);
  };
  return Stereo;
});
