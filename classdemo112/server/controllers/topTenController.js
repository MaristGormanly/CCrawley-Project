var topTen = require('../models/topTen');

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

/*
var mysql = require('../sql/database.sql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ttuser",
  password: "12345"
  });

con.connect(function(err){
  if(err) throw err;
  console.log("MYSQL DB Connected!");
  var sql = "use otTopTen;";
  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("Database created");
  });
});

exports.getTopScores = function(req, res){
  var currentTopScores = [];

  var sql = "select playerName, playerScore, dateEarned from otTopTen;";
  con.query(sql, function(err, rows, fields){
    if(err) throw err;
    for(var i = 0; i < rows.length; i++){
    currentTopScores[i] = otTopTen.addScore(row[i].playerName, rows[i].playerScore, rows[i].dateEarned)
    }
    res.serHeader('Content-Type', 'application/JSON');
    res.send(currentTopScores);
  })
}

exports.insertTopScores = function(req, res){
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO otTopTen (playerName, playerScore, dateEarned) VALUES (req.body.playerName, req.body.playerScore, req.body.playerDate)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

}
*/
