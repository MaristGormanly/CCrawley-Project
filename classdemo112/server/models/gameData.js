var pace = require ('../models/pace');

function gameData(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages, food) {
  this.playerNames = [];//setupController
  this.playerStatus = [false, false, false, false, false];//game controller
  this.playerProfession = "";//setupController
  this.playerMoney = 0;//setupController
  this.startMonth = "";//setupController
  this.milesTraveled = 0;//gameController
  this.groupHealth = 100;//gameController
  this.currentPace = pace.allPaces[3];//gameController
  this.daysOnTrail = 0;//gameController
  this.currentWeather = "";//gameController
  this.currentTerrain = "";//gameController
  this.messages = [];//gameController
  this.food = 0;
}

exports.addData = function(){
  var data = new gameData();
  return data;
}
