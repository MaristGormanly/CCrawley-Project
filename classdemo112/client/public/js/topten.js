function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

var topScore1 = {playername: "Chris", playerScore: 10, playerDate: "2018/09/27"}
var topScore2 = {playername: "Chris", playerScore: 9, playerDate: "2018/09/27"}
var topScore3 = {playername: "Chris", playerScore: 8, playerDate: "2018/09/27"}
var topScore4 = {playername: "Chris", playerScore: 7, playerDate: "2018/09/27"}
var topScore5 = {playername: "Chris", playerScore: 6, playerDate: "2018/09/27"}
var topScore6 = {playername: "Chris", playerScore: 5, playerDate: "2018/09/27"}
var topScore7 = {playername: "Chris", playerScore: 4, playerDate: "2018/09/27"}
var topScore8 = {playername: "Chris", playerScore: 3, playerDate: "2018/09/27"}
var topScore9 = {playername: "Chris", playerScore: 2, playerDate: "2018/09/27"}
var topScore10 = {playername: "Chris", playerScore: 1, playerDate: "2018/09/27"}

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

topScores.sort(function(a,b){
  return b.score - a.score;
});

window.addEventListener('load', function(){
  var top = document.getElementById('topTenList');
  for(el in topScores){
    top.innerHTML += "Player Name: " + topScores[el].playerName + "Player Score: " + topScores[el].playerScore + "Date: " + topScores[el].playerDate + "<br />"
  }
});

topScores.forEach((score) => topScores.innerHTML += score.playerName + "<br />");
topScores.forEach((score) => topScores.innerHTML += score.playerScore + "<br />");
topScores.forEach((score) => topScores.innerHTML += score.playerDate + "<br />");

document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){//space
      window.location.href = "mainmenu.html";
    }//if
});//function
