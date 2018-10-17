var topTen = require('../models/topTen');


exports.currentTopScores = [];
exports.currentTopScores.push(topTen.addScore("Micheal", -5, "10/03/2019"));
exports.currentTopScores.push(topTen.addScore("Micheal", -5, "10/03/2019"));
exports.currentTopScores.push(topTen.addScore("Micheal", -5, "10/03/2019"));


exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}
