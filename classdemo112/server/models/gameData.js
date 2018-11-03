function gameData(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages) {
  this.playerNames = playerNames;
  this.playerStatus = playerStatus;
  this.playerProfession = playerProfession;
  this.playerMoney = playerMoney;
  this.startMonth = startMonth;
  this.milesTraveled = milesTraveled;
  this.groupHealth = groupHealth;
  this.currentPace = currentPace;
  this.daysOnTrail = daysOnTrail;
  this.currentWeather = currentWeather;
  this.currentTerrain = currentTerrain;
  this.messages = messages;
}

exports.addGameData = function(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages) {
  var gameInfo = new gameData(playerNames, playerStatus, playerProfession, playerMoney, startMonth, milesTraveled, groupHealth, currentPace, daysOnTrail, currentWeather, currentTerrain, messages);
  return gameInfo;
}
