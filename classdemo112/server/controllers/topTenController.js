var topTen = require('../models/topTen');

var topScore1 = {playerName: "Chris ", playerScore: 10, playerDate: "09/27/2018"}
var topScore2 = {playerName: "Chris ", playerScore: 9, playerDate: "09/27/2018"}
var topScore3 = {playerName: "Chris ", playerScore: 8, playerDate: "09/27/2018"}
var topScore4 = {playerName: "Chris ", playerScore: 7, playerDate: "09/27/2018"}
var topScore5 = {playerName: "Chris ", playerScore: 6, playerDate: "09/27/2018"}


var topScores = [];
topScores.push(topScore1);
topScores.push(topScore2);
topScores.push(topScore3);
topScores.push(topScore4);
topScores.push(topScore5);


exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(topScores);
}


exports.saveTopScore = function(req, res) {
	var newTopScore = topTen.addScore(req.body.playerName, req.body.playerScore, req.body.playerDate);
	exports.topScores.push(topScores);
	res.setHeader('Content-Type', 'application/json');
	res.send(exports.topScores);
}
