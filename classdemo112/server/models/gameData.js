var pace = require ('../models/pace');

function gameData(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages) {
  this.playerNames = [];//setupController
  this.playerStatus = [false, false, false, false, false];//game controller
  this.playerProfession = "";//setupController
  this.playerMoney = 0;//setupController
  this.startMonth = "";//setupController
  this.milesTraveled = 0;//gameController
  this.groupHealth = 100;//gameController
  this.currentPace = pace.allPaces[0];//gameController
  this.daysOnTrail = 0;//gameController
  this.currentWeather = "";//gameController
  this.currentTerrain = "";//gameController
  this.messages = [];//gameController
}

exports.addData = function(){
  var data = new gameData();
  return data;
}
