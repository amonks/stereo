define(['app/state', 'app/animation', 'app/stereo'], function(State, Animation, Stereo) {
  console.log("loading app.coffee");
  var App = {};
  App.init = function() {
    State.init();
    Stereo.init();
    Animation.init();
    console.log(State, Stereo, Animation);
  };
  App.init();
});
