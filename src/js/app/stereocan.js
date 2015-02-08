define(['jquery', 'app/state'], function($, State) {
  console.log("loading canvases.coffee");
  var Stereo = {};
  Stereo.init = function() {
    State.setSize(window.innerHeight, window.innerWidth / 2);

    Stereo.left.element = $('body').append('<canvas id="left">');
    Stereo.left.element.height = State.height;
    Stereo.left.element.width = State.width;
    Stereo.left.context2d = Stereo.left.element.getContext("2d");

    Stereo.right = $('body').append('<canvas id="right">');
    Stereo.right.element.height = State.height;
    Stereo.right.element.width = State.width;
    Stereo.right.context2d = Stereo.right.element.getContext("2d");
  };

  return Stereo;
});
