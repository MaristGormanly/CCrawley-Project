var gameData = require ('../models/gameData');
var data = gameData.addGameData;

var professions = ["banker", "carpenter", "farmer"];
var months = ["March", "April", "May", "June", "July"];

exports.getProfession = function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.send(professions);
}

/*exports.saveProfession = function(req, res){
  document.addEventListener("keypress", function(event)
    if(event.keyCode == 49){
      data.playerProfession = professions[0];
    }
    if(event.keyCode == 50){
      data.playerProfession = professions[1];
    }
    if(event.keyCode == 51){
      data.playerProfession = professions[2]; //set this up so the input is done by  a form
    }
    res.send(data.playerProfession);
}*/

/*exports.getAllPlayerNames = function(req, res){
  var playerNames = [];

  var x = document.forms[]

  data.playerNames = playerNames;
}*/

exports.getStartMonth = function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.send(months);
}

/*exports.saveStartMonth = function(req, res){
  document.addEventListener("keypress", function(event)
    if(event.keyCode == 49){
      data.startMonth = months[0];
    }
    if(event.keyCode == 50){
      data.startMonth =months[1];
    }
    if(event.keyCode == 51){
      data.startMonth =months[2];
    }
    if(event.keyCode == 52){
      data.startMonth = months[3];
    }
    if(event.keyCode == 53){
      data.startMonth = months[4];//have to change these so the number is input by a forms
    }
    res.send(data.startMonth);
}*/
