define(['app/state', 'app/actions/blink'], function(State, Blink) {
  console.log("loading actions.js");
  var Actions = {};
  Actions.list = {};
  Actions.draw = function(side) {
    switch ( side.mode ) {
      case "blink":
        Blink.draw(side);
        break;
    }
  };
  return Actions;
});
