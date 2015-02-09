define(['app/state', 'jquery'], function(State, $) {
  console.log("loading config.js");
  var Config = {};
  Config.init = function() {
    console.log("binding keyup");
    Config.translate();
    $("#edit").bind("keyup", function(event, ui) {
      console.log("about to bind 4rl tho");
      Config.translate();
    });
  };
  Config.translate = function() {
    console.log("calling keyup");
    var editText = $("#edit").val();
    var outText = "http://ss.cx/~ajm/s/?" + encodeURIComponent(editText);
    $('#show').val(outText);
    $('#go').attr('href', outText);
  };
  return Config;
});
