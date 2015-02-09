define(['vendor/purl', 'jquery'], function(Purl, $) {
  console.log("loading state.js");
  var State = {};
  State.init = function() {
    console.log("initting State");
    var options = decodeObjFromUrl();
    State.left = options.left;
    State.right = options.right;
    console.log("state", State);
  };
  State.setSideProperty = function(side, property, value) {
    console.log("setting side property", side, property, value);
    switch(side) {
      case "left":
        State.left[property] = value;
        break;
      case "right":
        State.right[property] = value;
        break;
    }
  };
  State.setAction = function(side, action) {
    console.log("setting action");
    console.log(action);
    switch(side) {
      case "left":
        console.log("setting left action");
        State.left.action = action;
        break;
      case "right":
        State.right.action = action;
        break;
    }
  };
  State.setSize = function(width, height) {
    State.left.width = width;
    State.left.height = height;
    State.right.width = width;
    State.right.height = height;

    var left = document.getElementById('left');
    left.width = width;
    left.height = height;
    var right = document.getElementById('right');
    right.width = width;
    right.height = height;
  };
  State.setStereo = function(left, right) {
    State.left.canvas = document.getElementById("left");
    State.right.canvas = document.getElementById("right");

    State.left.ctx2d = State.left.canvas.getContext("2d");
    State.right.ctx2d = State.right.canvas.getContext("2d");
  };
  State.initFrameCounts = function() {
    State.left.frameCount = 0;
    State.right.frameCount = 0;
  };
  State.incrementFrameCount = function(side) {
    switch(side) {
      case "left":
        State.left.frameCount += 1;
        break;
      case "right":
        State.right.frameCount += 1;
        break;
    }
  };
  encodeObjForUrl = function(obj) {
    encodeURIComponent(JSON.stringify(obj));
  };
  decodeObjFromUrl = function() {
    console.log("decoding url");
    var queryString =  window.location.href.slice(window.location.href.indexOf('?') + 1);
    var decoded = decodeURIComponent( queryString );
    var parsed = JSON.parse(decoded);
    return parsed;
  };
  return State;
});
