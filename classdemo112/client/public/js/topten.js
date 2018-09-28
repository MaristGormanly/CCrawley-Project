document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){
      window.location.href = "mainmenu.html";
    }//if
});//function

function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

var topScore1 = new topScore('Opti', 10000, '2018/09/27');
var topScore2 = new topScore('heather', 64, '2018/09/27');
var topScore3 = {playername: "Chris", playerScore: 65, playerDate: "2018/09/27"}
var topScore4 = {playername: "James", playerScore: 32, playerDate: "2018/09/27"}
var topScore5 = {playername: "Emily", playerScore: 56, playerDate: "2018/09/27"}
var topScore6 = {playername: "Duncan", playerScore: 36, playerDate: "2018/09/27"}
var topScore7 = {playername: "Sarah", playerScore: 68, playerDate: "2018/09/27"}
var topScore8 = {playername: "Tom", playerScore: 34, playerDate: "2018/09/27"}
var topScore9 = {playername: "Campbell", playerScore: 25, playerDate: "2018/09/27"}
var topScore10 = {playername: "Micheal", playerScore: 1, playerDate: "2018/09/27"}

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

window.addEventListener('load', function(){
  var theList = document.getElementById('topTenList');

  for(el in topScores){
    topScore[el].playerScore.sort(function(a, b){return a - b});
    topTenList.innerHTML += "Player Name: " + topScore[el].playername + "Score: " + topScore[el].playerScore + "Date: " + topScore[el].playerDate "<br />"
  }
});
