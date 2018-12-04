var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ttuser",
  password: "12345"
  });

con.connect(function(err){
  if(err) throw err;
  console.log("MYSQL DB Connected!");
  var sql = "user otTopTen;";
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
    currentTopScores[i] = topTen.addScore(row[i].playerName, rows[i].playerScore, rows[i].dateEarned)
    }
    res.serHeader('application/JSON');
  })
}

req.body.playerName + "' , '" + playerScore + "' , '" + dateEarned;
