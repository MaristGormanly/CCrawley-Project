function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

var topScore1 = new topScore('Opti', 10000, '2018/09/27');
var topScore2 = new topScore('heather', 64, '2018/09/27');
var topScore3 = new topScore("Chris", 65, "2018/09/27");
var topScore4 = new topScore("James", 32, "2018/09/27");
var topScore5 = new topScore("Emily", 56, "2018/09/27");
var topScore6 = new topScore("Duncan", 36, "2018/09/27");
var topScore7 = new topScore("Sarah", 68, "2018/09/27");
var topScore8 = new topScore("Tom", 34, "2018/09/27");
var topScore9 = new topScore("Campbell", 25, "2018/09/27");
var topScore10 = new topScore("Micheal", 1, "2018/09/27");

var topScores = [topScore1, topScore2, topScore3, topScore4, topScore5, topScore6, topScore7, topScore8, topScore9, topScore10];

topScores.sort(function(a,b){
  return b.score - a.score;
});

document.getElementById("topScore1").innerHTML = topScores[0].name + " " + topScores[0].score + " " + topScores[0].date;
document.getElementById("topScore2").innerHTML += topScores[1].name + " " + topScores[1].score + " " + topScores[1].date;
document.getElementById("topScore3").innerHTML += topScores[2].name + " " + topScores[2].score + " " + topScores[2].date;
document.getElementById("topScore4").innerHTML += topScores[3].name + " " + topScores[3].score + " " + topScores[3].date;
document.getElementById("topScore5").innerHTML += topScores[4].name + " " + topScores[4].score + " " + topScores[4].date;
document.getElementById("topScore6").innerHTML += topScores[5].name + " " + topScores[5].score + " " + topScores[5].date;
document.getElementById("topScore7").innerHTML += topScores[6].name + " " + topScores[6].score + " " + topScores[6].date;
document.getElementById("topScore8").innerHTML += topScores[7].name + " " + topScores[7].score + " " + topScores[7].date;
document.getElementById("topScore9").innerHTML += topScores[8].name + " " + topScores[8].score + " " + topScores[8].date;
document.getElementById("topScore10").innerHTML += topScores[9].name + " " + topScores[9].score + " " + topScores[9].date;


document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){//space
      window.location.href = "mainmenu.html";
    }//if
});//function
