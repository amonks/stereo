define(['app/stereo', 'app/state', 'app/actions'], function(Stereo, State, Actions) {
  console.log("loading animation.js");
  var Animation = {};
  Animation.init = function() {
    console.log("starting animation");
    State.setSideProperty('left', 'mpf', (1 / State.left.fps) * 1000);
    State.setSideProperty('right', 'mpf', (1 / State.right.fps) * 1000);
    State.initFrameCounts();
    State.right.action.init(State.right);
    console.log("about to call rightFrame");
    rightFrame();
    console.log("about to call leftFrame");
    State.left.action.init(State.left);
    leftFrame();
  };
  leftFrame = function() {
    State.incrementFrameCount('left');
    State.left.action.draw(State.left);
    setTimeout(leftFrame, State.left.mpf);
  };
  rightFrame = function() {
    State.incrementFrameCount('right');
    State.right.action.draw(State.right);
    setTimeout(rightFrame, State.right.mpf);
  };
  return Animation;
});
