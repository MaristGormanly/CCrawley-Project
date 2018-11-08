var topTen = require('../models/topTen');

var topScore1 = {playerName: "Chris ", playerScore: 10, playerDate: "09/27/2018"}
var topScore2 = {playerName: "Chris ", playerScore: 9, playerDate: "09/27/2018"}
var topScore3 = {playerName: "Chris ", playerScore: 8, playerDate: "09/27/2018"}
var topScore4 = {playerName: "Chris ", playerScore: 7, playerDate: "09/27/2018"}
var topScore5 = {playerName: "Chris ", playerScore: 6, playerDate: "09/27/2018"}
var topScore6 = {playerName: "Chris ", playerScore: 5, playerDate: "09/27/2018"}
var topScore7 = {playerName: "Chris ", playerScore: 4, playerDate: "09/27/2018"}
var topScore8 = {playerName: "Chris ", playerScore: 3, playerDate: "09/27/2018"}
var topScore9 = {playerName: "Chris ", playerScore: 2, playerDate: "09/27/2018"}
var topScore10 = {playerName: "Chris ", playerScore: 1, playerDate: "09/27/2018"}

var topScores = [];
topScores.push(topScore1);
topScores.push(topScore2);
topScores.push(topScore3);
topScores.push(topScore4);
topScores.push(topScore5);
topScores.push(topScore6);
topScores.push(topScore7);
topScores.push(topScore8);
topScores.push(topScore9);
topScores.push(topScore10);

exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(topScores);
}

topScores.sort(function(a,b){
  return b.score - a.score;
});

/*exports.updateUser() = function(req, res){
  var updatedUser = topScores[req.params.userID];
  var top = document.getElementById('topTenList');
  var i = 1;
  for(el in topScores){
    top.innerHTML += [i] +") " + topScores[el].playerName + " ... " + topScores[el].playerScore + " ... " + topScores[el].playerDate + "<br />"
    i++;
  }
}*/
