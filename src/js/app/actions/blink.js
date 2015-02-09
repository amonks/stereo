define(['app/color', 'app/state'], function(Color, State) {
  console.log("loading blink.js");
  var Blink = {};

  Blink.init = function(side) {
    console.log("initting blink");
    side.fps = 12 || side.fps;
    side.speed = 5 || side.speed;
    side.r = 0 || side.r;
    side.g = 0 || side.g;
    side.b = 0 || side.b;
    State.setSideProperty(side.side, "color", new Color(side.r, side.g, side.b));
    console.log("just set side property", side.color);
  };

  Blink.draw = function(side) {
    side.color.invert();
    side.ctx2d.fillStyle = side.color.to_css();

    side.ctx2d.fillRect(0,0,side.width, side.height);
  };
  return Blink;
});
