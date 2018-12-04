function terrainInfo(terrainName, imageUrl) {
  this.terrainName = terrainName;
  this.imageUrl = imageUrl;
}

exports.allTerrain = []
exports.allTerrain.push(new terrainInfo('plains', "images/plains.jpg"));
exports.allTerrain.push(new terrainInfo('mountains', "images/mountains.jpg"));
exports.allTerrain.push(new terrainInfo('desert', "images/desert.jpg"));
exports.allTerrain.push(new terrainInfo('forest',  "images/forest.jpg"));

exports.getAllTerrain = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.allTerrain)
}
