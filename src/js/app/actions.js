define(['app/state', 'app/actions/blink', 'app/actions/fade', 'app/actions/lines'], function(State, Blink, Fade, Lines) {
  console.log("loading actions.js");
  var Actions = {};
  Actions.list = {};
  Actions.init = function() {
    console.log("initting actions");
    switch ( State.left.mode ) {
      case "lines":
        console.log("setting linesleft");
        State.setAction('left', Lines);
        break;
      case "fade":
        console.log("setting fadeleft");
        State.setAction('left', Fade);
        break;
      case "blink":
        console.log("setting blinkleft");
        State.setAction('left', Blink);
        break;
    }
    switch ( State.right.mode ) {
      case "lines":
        console.log("setting linesright");
        State.setAction('right', Lines);
        break;
      case "fade":
        console.log("calling setAction", Fade);
        State.setAction('right', Fade);
        break;
      case "blink":
        console.log("calling setAction", Blink);
        State.setAction('right', Blink);
        break;
    }
  };
  return Actions;
});
