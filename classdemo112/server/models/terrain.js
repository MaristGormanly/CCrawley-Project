function terrainInfo(terrainName, imageUrl) {
  this.terrainName = terrainName;
  this.imageUrl = imageUrl;
}

var plains = new terrainInfo('plains', /images/plains.jpg);
var mountains = new terrainInfo('mountains', /images/mountains.jpg);
var desert = new terrainInfo('desert', /images/desert.jpg);
var forest = new terrainInfo('forest', /images/forest.jpg);

exports.addTerrain = function(terrainName, imageUrl) {
  var terrain = new terrainInfo(terrainName, imageUrl);
  return terrain;
}
