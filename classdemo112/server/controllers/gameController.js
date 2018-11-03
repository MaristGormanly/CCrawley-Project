var gameData = require ('../models/gameData');
var pace = require ('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');


exports.changePace = function(req, res){
  gameData.gameSettings.paceInfo[req.body.paceInfo] = req.body.paceInfo;
  currPace = pace.resting;
  document.addEventListener("keypress", function(event)
    if(event.keyCode == 49){
      currPace = pace.steady;
    }
    if(event.keyCode == 50){
      currPace = pace.strenuous;
    }
    if(event.keyCode == 51){
      currPace = pace.grueling;
    }
    if(event.keyCode == 52){
      currPace = pace.resting;
    }
});

exports.getWeather = function(req, res){
  var r = Math.random();
  var currWeather = weather.cool;
  if (r < 0.1) {
    currWeather = weather.veryHot
  }
  else if (r < 0.1) {
    currWeather = weather.hot
  }
  else if (r < 0.2) {
    currWeather = weather.warm
  }
  else if (r < 0.1) {
    currWeather = weather.cool
  }
  else if (r < 0.1) {
    currWeather = weather.cold
  }
  else if (r < 0.1) {
    currWeather = weather.veryCold
  }
  else if (r < 0.1) {
    currWeather = weather.rain
  }
  else if (r < 0.05) {
    currWeather = weather.heavyRain
  }
  else if (r < 0.05) {
    currWeather = weather.snow
  }
  else if (r < 0.05) {
    currWeather = weather.blizzard
  }
  else if (r < 0.05) {
    currWeather = weather.heavyFog
  }
}

exports.getTerrain = function(req, res){
  var t = Math.random();
  if(t <= .25){
    currTerrain = terrain.plains;
  }
  else if(t <= .50){
    currTerrain = terrain.mountains;
  }
  else if(t <= .75){
    currTerrain = terrain.desert;
  }
  else if(t <= .100){
    currTerrain = terrain.forest;
  }
}

exports.updateGame = function(req, res){

}

exports.resetGame()

exports.getGameData()
