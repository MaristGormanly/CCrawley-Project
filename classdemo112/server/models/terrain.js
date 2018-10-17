function terrainInfo(terrainName, imageUrl) {
  this.terrainName = terrainName;
  this.imageUrl = imageUrl;
}

exports.addTerrain = function(terrainName, imageUrl) {
  var terrain = new terrainInfo(terrainName, imageUrl));
  return terrain;
}
