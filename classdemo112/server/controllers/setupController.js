var gameData = require('../models/gameData');
var data = gameData.addData();
var professions = require('../models/professions');
var gameController = require('../controllers/gameController')
var getData = gameController.getData();

var months = ["March", "April", "May", "June", "July"];
var setupScreen = [];
/*
function gameSettings(){
  this.profession = "";
  this.pNames = [];
  this.money = 0;
  this.month = "";
}

exports.userSettings = new gameSettings();
*/

exports.getProfession = function(req, res){
  var prof = professions.allProfs[req.params.id];
  gameController.getData().playerProfession = prof.profName;
  gameController.getData().playerMoney = prof.profMoney;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData);
  //res.send(gameController.getData().playerMoney);
}

exports.getAllPlayerNames = function(req, res){
  gameController.getData().playerNames.push(req.params.name);
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData);
}

exports.getStartMonth = function(req, res){
  gameController.getData().startMonth = months[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData);
}

exports.getSetupScreen = function(req, res){
    var screen = setupScreen[req.params.id];
    console.log("setup is working");
    res.setHeader('Content-Type', 'text/html');
    res.send(screen);
}
/*
exports.getSetup = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData);
}*/

var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
+ "<p>You may:</p>"
+"<ol id=\"setupQuestions1\" class = 'center'>"
+"<li id=\"bankerMenuItem\"> Be a Banker from Boston</li>"
+"<li id=\"carpenterMenuItem\"> Be a carpenter from mississippi</li>"
+"<li id=\"farmerMenuItem\"> Be a Farmer from Kansas</li>"
+"<li id=\"differenceMenuItem\"> What are the Differences</li>"
+"</ol>"
+"<div id=\"selectedOption\"> What is your choice</div>";

setupScreen.push(startGame1);

var startGame2 =
"<form>"
+"<p>What is your wagon leaders name</p>"
+"<ol id=\"setupQuestions2\">"
+"<input type ='text' id='p1'><br>"
+"</form>"
+"<button type='button' id='submitButton'>Submit</button>";

setupScreen.push(startGame2);

var startGame3 ="<p></p>"
+"<p>Please enter the other people in our parties names</p>"
+"<form>"
+"<ol id=\"setupQuestions3\">"
+"<p>2 "
+"<input type='text' id='p2'><br>"
+"3 "
+"<input type='text' id='p3'><br>"
+"4 "
+"<input type='text' id='p4'><br>"
+"5 "
+"<input type='text' id='p5'><br>"
+"</form>"
+"<button type='button' id='submitButton'>Submit</button>";

setupScreen.push(startGame3);

var startGame4 = "<p></p>"
+"<p>Which month would you like to start in:</p>"
+"<ol id=\"setupQuestions4\">"
+"<li id=\"marchMenuItem\"> March </li>"
+"<li id=\"aprilMenuItem\"> April </li>"
+"<li id=\"mayMenuItem\"> May </li>"
+"<li id=\"juneMenuItem\"> June </li>"
+"<li id=\"julyMenuItem\"> July </li>"
+"<li id=\"differenceMenuItem\"> What are the Differences?</li>"
+"</ol>"
+"<div id=\"selectOption\"> What is your choice</div>";

setupScreen.push(startGame4);

var startGame5 = "<p></p>"
+"<p>Congratulations, you are now ready to travel the oregon trail</p>"
+"<p>Here is what you have picked</p>"
+"<ul id=\"setupSummary\">"
+"<li id =\"wagonLeader\"></li>"
+"<li id =\"member1\"></li>"
+"<li id =\"member2\"></li>"
+"<li id =\"member3\"></li>"
+"<li id =\"member4\"></li>"
+"<li id =\"profession\"></li>"
+"<li id =\"cash\"></li>"
+"<li id =\"month\"></li>"
+"</ul>"
+"<div id=\"selectOption\"> Press space to continue</div>";
setupScreen.push(startGame5);
