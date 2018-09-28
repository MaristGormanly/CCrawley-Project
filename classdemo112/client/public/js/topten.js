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
topScore.push(topScore1);
topScore.push(topScore2);
topScore.push(topScore3);
topScore.push(topScore4);
topScore.push(topScore5);
topScore.push(topScore6);
topScore.push(topScore7);
topScore.push(topScore8);
topScore.push(topScore9);
topScore.push(topScore10);

var listContainer = document.createElement("div");
var listElement = document.createElement("ul");

document.getElemnentByTagName("body")[0].appendChild(listContainer);
listContainer.appendChild(listElement);

window.addEventListener('load', function(){
  var theList = document.getElementById('topTenList');

  for(el in topScore){
    theList.innerHTML += "Player Name: " + topScore[el].playername + "Score: " + topScore[el].playerScore + "Date: " + topScore[el].playerDate "<br />"
  }
});

document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){
      window.location.href = "mainmenu.html";
    }//if
});//function

topScore();
