function profInfo(profName, profMoney) {
  this.profName = profName;
  this.profMoney = profMoney;
}

exports.allProfs = []
exports.allProfs.push(new profInfo('banker', 200));
exports.allProfs.push(new profInfo('carpenter', 100));
exports.allProfs.push(new profInfo('farmer', 10));


exports.getAllProfs = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.allProfs);
}
