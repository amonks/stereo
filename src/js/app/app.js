define(['app/state', 'app/actions', 'app/animation', 'app/stereo'], function(State, Actions, Animation, Stereo) {
  console.log("loading app.js");
  var App = {};
  App.init = function() {
    console.log("calling State.init()");
    State.init();
    console.log("calling Actions.init()");
    Actions.init();
    Stereo.init();
    Animation.init();
    console.log(State, Stereo, Animation);
  };
  return App;
});
