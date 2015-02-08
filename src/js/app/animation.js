define(['app/stereo', 'app/state', 'app/actions'], function(Stereo, State, Actions) {
  console.log("loading animation.js");
  var Animation = {};
  Animation.init = function() {
    frame();
  };
  frame = function() {
    console.log("frame", State.mpf);
    State.incrementFrameCount();

    Actions.draw();

    setTimeout(frame, State.mpf);
  };
  return Animation;
});
