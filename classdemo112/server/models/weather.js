function weatherInfo(weatherId, weatherType, healthChange, mileChange, weatherProb) {
  this.weatherId = weatherId;
  this.weatherType = weatherType;
  this.healthChange = healthChange;
  this.mileChange = mileChange;
  this.weatherProb = weatherProb;
}

exports.allWeather = []
exports.allWeather.push(new weatherInfo(0, 'Very Hot', -8, .7, .1));
exports.allWeather.push(new weatherInfo(1, 'Hot', -3, .9, .1));
exports.allWeather.push(new weatherInfo(2, 'Warm', 1, 1, .2));
exports.allWeather.push(new weatherInfo(3, 'Cool', 1, .95, .1));
exports.allWeather.push(new weatherInfo(4, 'Cold', -5, .8, .1));
exports.allWeather.push(new weatherInfo(5, 'Very Cold', -12, .7, .1));
exports.allWeather.push(new weatherInfo(6, 'Rain', -4, .6, .1));
exports.allWeather.push(new weatherInfo(7, 'Heavy Rain', -8, .4, .05));
exports.allWeather.push(new weatherInfo(8, 'Snow', -15, .3, .05));
exports.allWeather.push(new weatherInfo(9, 'Blizzard', -30, .1, .05));
exports.allWeather.push(new weatherInfo(10, 'Heavy Fog', -3, .5, .05));


exports.getAllWeather = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.allWeather)
}
