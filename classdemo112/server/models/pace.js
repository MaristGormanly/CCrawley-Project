function paceInfo(paceName, inMiles, inHealth) {
  this.paceName = paceName;
  this.playerMiles = inMiles;
  this.playerHealth = inHealth;
}

exports.allPaces = []
exports.allPaces.push(new paceInfo('steady', 20,0));
exports.allPaces.push(new paceInfo('strenuous', 25,-3));
exports.allPaces.push(new paceInfo('grueling', 30,-8));
exports.allPaces.push(new paceInfo('resting', 0, 5));


exports.getAllPaces = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.allPaces);
}
