var gameData = require ('../models/gameData');
var data = gameData.addData();
var professions = require('../models/professions');

var months = ["March", "April", "May", "June", "July"];

exports.getProfession = function(req, res){
  var prof = professions.allProfs[req.params.id];
  data.playerProfession = prof.profName;
  data.playerMoney = prof.profMoney;
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}

exports.getAllPlayerNames = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}

exports.getStartMonth = function(req, res){
  data.startMonth = months[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}
