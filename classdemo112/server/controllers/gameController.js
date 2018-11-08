var gameData = require ('../models/gameData');
var data = gameData.addData();
var pace = require ('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');

exports.updatePace = function(req, res){
    data.currentPace = pace.allPaces[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(gameData.addData.currentPace);
};


exports.updateGame = function(req, res){
  data.daysOnTrail++;

  //data.milesTraveled = data.milesTraveled + gameData.addData.currentPace;

  data.currentWeather = weather.allWeather[3];

  var t = Math.floor(Math.random() * 100);
  if (t >= 0 && t <= 10) {
    data.currentWeather = weather.allWeather[0];
    console.log("you win");
  }
  else if (t >= 11 && t <= 21) {
    data.currentWeather = weather.allWeather[1];
  }
  else if (t >= 21 && t <= 41) {
    data.currentWeather = weather.allWeather[2];
  }
  else if (t >= 41 && t <= 51) {
    data.currentWeather = weather.allWeather[3];
  }
  else if (t >= 51 && t <= 61) {
    data.currentWeather = weather.allWeather[4];
  }
  else if (t >= 61 && t <= 71) {
    data.currentWeather = weather.allWeather[5];
  }
  else if (t >= 71 && t <= 81) {
    data.currentWeather = weather.allWeather[6];
  }
  else if (t >= 81 && t <= 85) {
    data.currentWeather = weather.allWeather[7];
  }
  else if (t >= 85 && t <= 90) {
    data.currentWeather = weather.allWeather[8];
  }
  else if (t >= 91 && t <= 95) {
    data.currentWeather = weather.allWeather[9];
  }
  else if (t >= 96 && t <= 100) {
    data.currentWeather = weather.allWeather[10];
  }

  var t = Math.floor(Math.random() * 100);
  if(t >= 0 && t <= 25){
    data.currentTerrain = terrain.allTerrain[0];
  }
  else if(t >= 26 && t <= 50){
    data.currentTerrain = terrain.allTerrain[1];
  }
  else if(t >= 51 && t <= 75){
    data.currentTerrain = terrain.allTerrain[2];
  }
  else if(t >= 76 && t <= 100){
    data.currentTerrain = terrain.allTerrain[3];
  }

  data.groupHealth = data.groupHealth + data.currentWeather.healthChange;
  data.groupHealth = data.groupHealth + data.currentPace.playerHealth;

  var d = Math.random();
  var i = data.playerStatus[Math.floor(Math.random() * data.playerStatus.length)];

  if (data.groupHealth < 50 && data.groupHealth >= 20){
    if(d < 0.03){
      data.playerStatus[i] = true;
    }
  }
  else if (data.groupHealth < 20 && data.groupHealth > 0){
    if(d < 0.1){
      data.playerStatus[i] = true;
    }
  }

  if(data.milesTraveled = 500 && data.daysOnTrail <= 45){
  }
  if(data.milesTraveled > 500 && data.daysOnTrail > 45) {
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}

exports.resetGame = function(req, res){
data.daysOnTrail = 0;
data.milesTraveled = 0;
data.currentWeather = "";
data.groupHealth = 100;
data.currentPace = pace.allPaces[0];
data.currentTerrain = "";
data.playerStatus = [false, false, false, false, false];
data.playerNames = [ , , , , ];
data.playerProfession = "";
data.playerMoney = 0;
data.startMonth = "";
res.setHeader('Content-Type', 'application/json');
res.send(data);
}
