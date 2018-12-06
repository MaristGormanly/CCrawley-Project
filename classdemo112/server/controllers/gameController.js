var gameData = require ('../models/gameData');
var data = gameData.addData();
var pace = require ('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');
var setup = require('../controllers/setupController');

exports.getPace = function(req, res){
    data.currentPace = pace.allPaces[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
}


exports.hunt = function(req, res){
  var f = Math.floor(Math.random() * 10);
  if(f >= 3 && f <= 6){
    data.food++;
    console.log('caught 1 food while hunting');
  }//if
  if(f >= 7 && f <= 10){
    data.food = data.food + 2;
    console.log('caught 2 food while hunting');
  }//if
}

exports.eat = function(req, res){
  if(data.food > 0 && data.currentPace == pace.allPaces[3]){
    data.groupHealth++;
    data.food--;
    console.log('ate 1 food');
  }
  if(data.food < 0 && data.currentPace == pace.allPaces[3]){
    data.messages.push('you have no food');
    console.log('no food to eat');
  }
  if(data.currentPace == pace.allPaces[0] || data.currentPace == pace.allPaces[1] || data.currentPace == pace.allPaces[2]){
    data.messages.push('you can not eat while you are not resting');
    console.log('could not eat on move');
  }
}

exports.updateGame = function(req, res){
  var daysOnTrails = data.daysOnTrail++;

  data.currentWeather = weather.allWeather[3];

  data.milesTraveled += Math.floor(data.currentPace.playerMiles * data.currentWeather.mileChange);

  var t = Math.floor(Math.random() * 100);

  if (t >= 0 && t <= 10) {
    data.currentWeather = weather.allWeather[0];
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
  //currentWeather

  var t = Math.floor(Math.random() * 100);
  //data.currentTerrain = terrain.allTerrain[t];
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
  //currentTerrain

  data.groupHealth = data.groupHealth + data.currentWeather.healthChange;
  data.groupHealth = data.groupHealth + data.currentPace.playerHealth;

  var d = Math.random();
  var i = Math.floor(Math.random() * data.playerStatus.length);

  if (data.groupHealth < 50 && data.groupHealth >= 20){
    if(d <= 0.03){
      data.playerStatus[i] = true;
      data.messages.push(data.playerNames[i] + " has died");
    }
  }
  else if (data.groupHealth < 20 && data.groupHealth > 0){
    if(d <= 0.1){
      data.playerStatus[i] = true;
      data.messages.push(data.playerNames[i] + " has died");
    }
  }

  if(data.milesTraveled >= 500 && data.daysOnTrail <= 45){
    data.messages.push("you win");
  }
  if(data.daysOnTrail > 45 || data.groupHealth <= 0) {
    data.messages.push("you lose");
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
//data.playerNames = [];
//data.playerProfession = "";
//data.playerMoney = 0;
//data.startMonth = "";
data.food = 0;
data.messages = [];
res.setHeader('Content-Type', 'application/json');
res.send(data);
}

exports.getData = function(){
  return data;
}

exports.getGameData = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}
