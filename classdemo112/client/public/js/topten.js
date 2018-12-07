function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

/*
var topScore1 = {playerName: "Chris ", playerScore: 10, playerDate: "09/27/2018"}
var topScore2 = {playerName: "Chris ", playerScore: 9, playerDate: "09/27/2018"}
var topScore3 = {playerName: "Chris ", playerScore: 8, playerDate: "09/27/2018"}
var topScore4 = {playerName: "Chris ", playerScore: 7, playerDate: "09/27/2018"}
var topScore5 = {playerName: "Chris ", playerScore: 6, playerDate: "09/27/2018"}
var topScore6 = {playerName: "Chris ", playerScore: 5, playerDate: "09/27/2018"}
var topScore7 = {playerName: "Chris ", playerScore: 4, playerDate: "09/27/2018"}
var topScore8 = {playerName: "Chris ", playerScore: 3, playerDate: "09/27/2018"}
var topScore9 = {playerName: "Chris ", playerScore: 2, playerDate: "09/27/2018"}
var topScore10 = {playerName: "Chris ", playerScore: 1, playerDate: "09/27/2018"}


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
  var i = 1;
  for(el in getScores.currentTopScores){
    top.innerHTML += [i] +") " + getScores.playerName + " ... " + getScores.playerScore + " ... " + getScores.playerDate + "<br />"
    i++;
  }
});
*/


window.addEventListener('load', function(){
  getScores();
});



document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){//space
      window.location.href = "mainmenu.html";
    }//if
});//function

function getScores(){
    fetch('/api/topTen').then(function(response){
      if(response.status != 200){
        console.log('problem with ajax call!' + response.status + "msg: " + response.value);
        return;
    }
    response.text().then(function(data){
      console.log("received back: " + data);
      printTopTen(data);
    });
  });
}


function scoreSet(playerName, playerScore, playerDate){
fetch('/api/getTopTen/' + playerName + playerScore + playerDate,
  {
    method:'post',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
    body:'{"sql": "'+ playerName + playerScore + playerDate +'"}'
  }).then(function(response){
    if(response.status !== 200)
    console.log('problem with ajax call!' + response.status + "msg: " + response.value);
    return;
  })
  console.log("sql:" + playerName + playerScore + playerDate + "saved!");
}

function printTopTen(array){
  var jsonData = JSON.parse(array);
  console.log("jsonData " + jsonData);
  var topScores = [];

  for(var x in jsonData){
    topScores.push(jsonData[x]);
  }

  sort(topScores);

  if(topScores.length > 10){
      for(var i = 0; i < 10; i++){
        var currentScore = topScores[i];
        document.getElementById('nameId').innerHTML += JSON.stringify(currentScore);
        }
    }
    else{
      for(var i = 0; i < topScores.length; i++){
        var currentScore = topScores[i];
        document.getElementById('nameId').innerHTML += JSON.stringify(currentScore);
    }
  }
}

function sort(topScores){
  topScores.sort(function(a,b){return b-a});
}
