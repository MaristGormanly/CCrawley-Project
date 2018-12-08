var topTen = require('../models/topTen');
/*
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
*/

var mysql = require('MYSQL');

var con = mysql.createConnection({
  host: "localhost",
  user: "ttuser",
  password: "12345",
  database: "otTopTen"
  });

con.connect(function(err){
  if(err) throw err;
  console.log("MYSQL DB Connected!");
  var sql = "use otTopTen;";
  con.query(sql, function(err, result){
    if(err) throw err;
  });
});

exports.getTopScores = function(req, res){
  var currentTopScores = [];

  var sql = "select playerName, playerScore, dateEarned from topTen;";
  con.query(sql, function(err, rows, fields){
    if(err) throw err;
    for(var i = 0; i < rows.length; i++){
      currentTopScores[i] = topTen.addScore(rows[i].playerName, rows[i].playerScore, rows[i].dateEarned);
    }
    res.setHeader('Content-Type', 'application/JSON');
    res.send(currentTopScores);
  })
}

exports.insertTopScores = function(req, res){

  var sql = "insert into topTen (playerName, playerScore, dateEarned) VALUES ('"+req.body.playerName+"','"+req.body.playerScore+"','"+req.body.playerDate+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.setHeader('Content-Type', 'application/JSON');
  res.send(req.body.playerName);
}
