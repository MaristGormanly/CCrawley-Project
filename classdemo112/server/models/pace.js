function paceInfo(paceName, inMiles, inHealth) {
  this.paceName = paceName;
  this.playerMiles = inMiles;
  this.playerHealth = inHealth;
}

var steady = new paceInfo('steady', 20,0);
var strenuous = new paceInfo('strenuous', 25,-3);
var grueling = new paceInfo('grueling', 30,-8);
var resting = new paceInfo('resting', 0,5);

exports.addPace = function(inName, inScore, inDate) {
  var pace = new paceInfo(paceName, inMiles, inHealth);
  return pace;
}
