define(['app/color', 'app/state'], function(Color, State) {
  console.log("loading fade.js");
  var Fade = {};

  Fade.init = function(side) {
    console.log("initting fade");
    side.fps = side.fps || 12;
    side.speed = side.speed || 5;
    var R = 0 || side.r;
    var G = 0 || side.g;
    var B = 0 || side.b;
    State.setSideProperty(side.side, "color", new Color(R,G,B));
    console.log("just set side property", side.color);
  };
  Fade.draw = function(side) {
    side.color.add({
      r: 0.1 * side.speed,
      g: 0.1 * side.speed,
      b: 0.1 * side.speed
    });
    side.ctx2d.fillStyle = side.color.to_css();

    side.ctx2d.fillRect(0,0,side.width, side.height);
  };
  return Fade;
});
