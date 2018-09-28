function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

var topScore1 = new topScore('Opti', 10000, '2018/09/27');
var topScore2 = new topScore('heather', 1, '2018/09/27');
var topScore3 = {playername: "Chris", playerScore: 10, playerDate: "2018/09/27"}

var topScores = [];
topScore.push(topScore1);
topScore.push(topScore2);
topScore.push(topScore3);

window.addEventListener('load', function(){
  var theList = document.getElementById('topTenList');
  for(el in topScore){
    theList.innerHTML += "Player Name: " + topScores[el].playername + "<br />"
  }
});


document.body.onkeyup = function(event){
    if(event.keyCode == 32){
      window.location.href = "mainmenu.html";
    }//if
}//function
