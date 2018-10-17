function weatherInfo(weatherId, weatherType, healthChange, mileChange, weatherProb) {
  this.weatherId = weatherId;
  this.weatherType = weatherType;
  this.healthChange = healthChange;
  this.mileChange = mileChange;
  this.weatherProb = weatherProb;
}

exports.addWeather = function(weatherId, weatherType, healthChange, mileChange, weatherProb) {
  var weather = new weatherInfo(weatherId, weatherType, healthChange, mileChange, weatherProb));
  return weather;
}
