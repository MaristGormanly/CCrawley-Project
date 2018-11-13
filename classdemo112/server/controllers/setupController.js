var gameData = require('../models/gameData');
var data = gameData.addData();
var professions = require('../models/professions');
var gameController = require('../controllers/gameController')
var getData = gameController.getData();

var months = ["March", "April", "May", "June", "July"];

exports.getProfession = function(req, res){
  var prof = professions.allProfs[req.params.id];
  gameController.getData().playerProfession = prof.profName;
  gameController.getData().playerMoney = prof.profMoney;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().playerProfession);
  res.send(gameController.getData().playerMoney);
}

exports.getAllPlayerNames = function(req, res){
  gameController.getData().playerNames.push(req.params.name);
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().playerNames);
}

exports.getStartMonth = function(req, res){
  gameController.getData().startMonth = months[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().startMonth);
}
