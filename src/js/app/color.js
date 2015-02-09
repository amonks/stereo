define([], function() {
  console.log("loading color.js");
  Color = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.to_css = function() {
      var out = "rgb(" +
        roundy(this.r, 0) + ", " +
        roundy(this.g, 0) + ", " +
        roundy(this.b, 0) + ")";
      return out;
    };
    this.add = function(delta) {
      this.r += delta.r;
      this.r = modulo(this.r, 255);

      this.g += delta.g;
      this.g = modulo(this.g, 255);

      this.b += delta.b;
      this.b = modulo(this.b, 255);
    };
    this.invert = function() {
      this.r = 255 - this.r;
      this.g = 255 - this.g;
      this.b = 255 - this.b;
    };
  };
  // handle negative modulo like Ruby (-1 % 5  => 4)
  modulo = function(n, mod) {
    return ((n%mod)+mod)%mod;
  };
  roundy = function(num, places) {
    var out = Math.round( num * Math.pow(10, places)) / Math.pow(10, places);
    return out;
  };
  return Color;
});
