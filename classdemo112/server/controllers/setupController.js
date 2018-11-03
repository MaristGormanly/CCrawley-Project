var viewSetup = require('../client/views/setup.html')


var professions = ["banker", "carpenter", "farmer"];
var months = ["March", "April", "May", "June", "July"];

exports.getProfession = function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.send(professions);
}

exports.saveProfession = function(req, res){

}

exports.getAllPlayerNames = function(req, res){

}

exports.savePLayerName = function(req, res){

}

exports.getStartMonth = function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.send(months);
}

exports.saveStartMonth = function(req, res){

}
