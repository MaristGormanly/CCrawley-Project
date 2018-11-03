function weatherInfo(weatherId, weatherType, healthChange, mileChange, weatherProb) {
  this.weatherId = weatherId;
  this.weatherType = weatherType;
  this.healthChange = healthChange;
  this.mileChange = mileChange;
  this.weatherProb = weatherProb;
}

var veryHot = new weatherInfo(0, 'Very Hot', -8, .7, .1);
var hot = new weatherInfo(1, 'Hot', -3, .9, .1);
var warm = new weatherInfo(2, 'Warm', 1, 1, .2);
var cool = new weatherInfo(3, 'Cool', 1, .95, .1);
var cold = new weatherInfo(4, 'Cold', -5, .8, .1);
var veryCold = new weatherInfo(5, 'Very Cold', -12, .7, .1);
var rain = new weatherInfo(6, 'Rain', -4, .6, .1);
var heavyRain = new weatherInfo(7, 'Heavy Rain', -8, .4, .05);
var snow= new weatherInfo(8, 'Snow', -15, .3, .05);
var blizzard = new weatherInfo(9, 'Blizzard', -30, .1, .05);
var heavyFog = new weatherInfo(10, 'Heavy Fog', -3, .5, .05);


exports.addWeather = function(weatherId, weatherType, healthChange, mileChange, weatherProb) {
  var weather = new weatherInfo(weatherId, weatherType, healthChange, mileChange, weatherProb);
  return weather;
}
