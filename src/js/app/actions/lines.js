define(['app/color', 'app/state'], function(Color, State) {
  console.log("loading lines.js");
  var Lines = {};
  Lines.init = function(side) {
    console.log("initting lines");
    side.fps = side.fps || 12;
    side.speed = side.speed || 5;
    side.distance = side.distance || 50;
    side.direction = side.direction || "horizontal";
    side.lineWidth = side.lineWidth || 2;
    var bR = side.br || 0;
    var bG = side.bg || 0;
    var bB = side.bb || 0;
    side.background = new Color(bR, bG, bB);
    // State.setSideProperty(side.side, "background", new Color(bR,bG,bB));
    var R = side.r || 255;
    var G = side.g || 255;
    var B = side.b || 255;
    side.color = new Color(R, G, B);
    // State.setSideProperty(side.side, "color", new Color(R,G,B));
  };
  Lines.draw = function(side) {
    var modifier = ((side.frameCount * side.speed) % side.distance);
    side.ctx2d.rect(0, 0, side.width, side.height);
    side.ctx2d.fillStyle = side.background.to_css();
    side.ctx2d.fill();
    switch(side.direction) {
      case "vertical":
        for (i = 0; i <= side.height; i += side.distance) {
          side.ctx2d.beginPath();
          side.ctx2d.strokeStyle = side.color.to_css();
          side.ctx2d.lineWidth = side.lineWidth;
          side.ctx2d.moveTo(0, i + modifier);
          side.ctx2d.lineTo(side.width, i + modifier);
          side.ctx2d.stroke();
        }
        break;
      case "horizontal":
        for (i = 0; i <= side.width; i += side.distance) {
          side.ctx2d.beginPath();
          side.ctx2d.strokeStyle = side.color.to_css();
          side.ctx2d.lineWidth = side.lineWidth;
          side.ctx2d.moveTo(i + modifier, 0);
          side.ctx2d.lineTo(i + modifier, side.height);
          side.ctx2d.stroke();
        }
        break;
    }
  };
  return Lines;
});
