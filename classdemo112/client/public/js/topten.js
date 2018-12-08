function topScore(name, score, date){
  this.playerName = name;
  this.playerScore = score;
  this.playerDate = date;
}

window.addEventListener('load', function(){
  getScores();
});



document.addEventListener("keypress", function(event){
    if(event.keyCode == 32){//space
      window.location.href = "mainmenu.html";
    }//if
});//function

function getScores(){
    fetch('/api/topTen/getTopTen').then(function(response){
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
