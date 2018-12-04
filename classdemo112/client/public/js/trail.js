window.addEventListener("load", function(event){
  nextDay();
  paceHide();
  foodHide();
  gameOverHide();
});

var paceCon = false;
var huntEat = false;
var gameOver = false;
var goHide = false;

document.addEventListener("keypress", function(event){
    if(event.keyCode === 32){
      nextDay();
    }//if

    if (event.keyCode === 13) {
      if(paceCon === false){
        paceCont();
      }
      else{
        paceHide();
      }
    }

    if(event.keyCode === 69){//e
      if(huntEat === false){
        food();
      }
      else{
        foodHide();
      }
    }

});

document.addEventListener("keypress", function(event){
  if (event.keyCode === 82){
    resetTrail();
  }
});

function gameOverCheck(){
  if(gameOver === true){
    resetOpt();
    if(event.keyCode == 49){
      reset();
    }
    if(event.keyCode == 50){
      location.replace("mainmenu.html");
    }
  }
}

function hunt(){
  fetch('/api/gameCont/hunt',
  {
    method:'Get',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    }
  }).then(function(response){
    if(response.status !== 200){
    console.log('problem with ajax call!' +
    response.status + "msg: " + response.value);
    return;
  }//if
})
}

function eat(){
  fetch('/api/gameCont/eat',
  {
    method:'Get',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    }
  }).then(function(response){
    if(response.status !== 200){
    console.log('problem with ajax call!' +
    response.status + "msg: " + response.value);
    return;
  }//if
})
}

function changePace(pace){
  fetch('/api/getPaces/getAllPaces/' + pace,
  {
    method:'post',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
  },
  body:'{"pace": "'+ pace +'"}'
  }).then(function(response){
    if(response.status !== 200)
    console.log('problem with ajax call!' + response.status + "msg: " + response.value);
    return;
  })
  console.log("pace " + pace + " saved!");
}

document.addEventListener("keypress", function(event){
  if(paceCon === true){
    if(event.keyCode == 49){
      pace = 0;
      changePace(pace);
    }
    if(event.keyCode == 50){
      pace = 1;
      changePace(pace);
    }
    if(event.keyCode == 51){
      pace = 2;
      changePace(pace);
    }
    if(event.keyCode == 52){
      pace = 3;
      changePace(pace);
    }
  }
  if(huntEat === true){
    if(event.keyCode == 49){//hunt
      hunt();
    }
    if(event.keyCode == 50){//eat
      eat();
    }
  }
});

document.addEventListener('click', function(event){
  var x = event.target || event.srcElement;

  if(paceCon === true){
    var steady = document.getElementById("steady");
    if(x === steady){
      pace = 0;
      changePace(pace);
    }
    var strenuous = document.getElementById("strenuous");
    if(x === strenuous){
      pace = 1;
      changePace(pace);
    }
    var grueling = document.getElementById("grueling");
    if(x === grueling){
      pace = 2;
      changePace(pace);
    }
    var resting = document.getElementById("resting");
    if(x === resting){
      pace = 3;
      changePace(pace);
    }
  }
});

function nextDay(){
  //var gamePlayContainer = document.getElementById("gamePlayContainer");
  fetch('/api/gameCont/nextday',
  {
    method:'Get',
    headers:{
      "Content-type":"text/html; charset=UTF-8"
    }
  }).then(function(response){
    if(response.status !== 200){
    console.log('problem with ajax call!' +
    response.status + "msg: " + response.value);
    return;
  }//if
  response.text().then(function(data){
    console.log("received back: " + data);
    info = JSON.parse(data);
    getInfo(info);
    wagonMove(info);
  });
});
}

function resetTrail(){
    fetch('/api/gameCont/reset').then(function(response){
      if(response.status !== 200){
      console.log('problem with ajax call!' +
      response.status + "msg: " + response.value);
      return;
    }
    response.text().then(function(data){
      console.log("received back: " + data);
      info = JSON.parse(data);
      getInfo(info);
      wagonMove(info);
    });
  });
}


function wagonMove(info){
  document.getElementById('wagonContainer').style.left = "1009px";
  if(info.milesTraveled <= 20){
    document.getElementById('wagonContainer').style.left = "979px";
  }
  else if (info.milesTraveled <= 40){
    document.getElementById('wagonContainer').style.left = "949px";
  }
  else if (info.milesTraveled <= 60){
    document.getElementById('wagonContainer').style.left = "919px";
  }
  else if (info.milesTraveled <= 80){
    document.getElementById('wagonContainer').style.left = "889px";
  }
  else if (info.milesTraveled <= 100){
    document.getElementById('wagonContainer').style.left = "859px";
  }
  else if (info.milesTraveled <= 120){
    document.getElementById('wagonContainer').style.left = "829px";
  }
  else if (info.milesTraveled <= 140){
    document.getElementById('wagonContainer').style.left = "789px";
  }
  else if (info.milesTraveled <= 160){
    document.getElementById('wagonContainer').style.left = "759px";
  }
  else if (info.milesTraveled <= 180){
    document.getElementById('wagonContainer').style.left = "729px";
  }
  else if (info.milesTraveled <= 200){
    document.getElementById('wagonContainer').style.left = "699px";
  }
  else if (info.milesTraveled <= 220){
    document.getElementById('wagonContainer').style.left = "669px";
  }
  else if (info.milesTraveled <= 240){
    document.getElementById('wagonContainer').style.left = "639px";
  }
  else if (info.milesTraveled <= 260){
    document.getElementById('wagonContainer').style.left = "609px";
  }
  else if (info.milesTraveled <= 280){
    document.getElementById('wagonContainer').style.left = "579px";
  }
  else if (info.milesTraveled <= 300){
    document.getElementById('wagonContainer').style.left = "549px";
  }
  else if (info.milesTraveled <= 320){
    document.getElementById('wagonContainer').style.left = "519px";
  }
  else if (info.milesTraveled <= 340){
    document.getElementById('wagonContainer').style.left = "489px";
  }
  else if (info.milesTraveled <= 360){
    document.getElementById('wagonContainer').style.left = "459px";
  }
  else if (info.milesTraveled <= 380){
    document.getElementById('wagonContainer').style.left = "429px";
  }
  else if (info.milesTraveled <= 400){
    document.getElementById('wagonContainer').style.left = "399px";
  }
  else if (info.milesTraveled <= 420){
    document.getElementById('wagonContainer').style.left = "369px";
  }
  else if (info.milesTraveled <= 440){
    document.getElementById('wagonContainer').style.left = "339px";
  }
  else if (info.milesTraveled <= 460){
    document.getElementById('wagonContainer').style.left = "309px";
  }
  else if (info.milesTraveled <= 480){
    document.getElementById('wagonContainer').style.left = "279px";
  }
  else if (info.milesTraveled <= 500){
    document.getElementById('wagonContainer').style.left = "240px";
  }
}


function getInfo(info){
  document.getElementById('daysOnTrail').innerHTML = "Days On Trail: " + info.daysOnTrail;
  document.getElementById('milesTraveled').innerHTML = "Miles Traveled: " + info.milesTraveled;
  document.getElementById('groupHealth').innerHTML = "Group Health: " + info.groupHealth;
  document.getElementById('currentTerrain').innerHTML = "Current Terrain: " + JSON.stringify(info.currentTerrain.terrainName);
  document.getElementById('currentWeather').innerHTML = "Current Weather: " + JSON.stringify(info.currentWeather.weatherType);
  document.getElementById('currentPace').innerHTML = "Current Pace: " + JSON.stringify(info.currentPace.paceName);
  document.getElementById('currentMoney').innerHTML = "Money: " + info.playerMoney;
  document.getElementById('playersLeft').innerHTML = "# of Players Left: " + info.playerNames;
  document.getElementById('foodLeft').innerHTML = "Food Left: " + info.food;
  document.getElementById('instruct').innerHTML = "Press space to move forward one day, enter to change pace, r to reset, e to open food menu";
}


function paceCont(){
  if(paceCon === false){
    document.getElementById('hidePace').style.display = "block";
    paceCon = true;
  }
  else{
    paceHide();
  }
}

function paceHide(){
  document.getElementById('hidePace').style.display = "none";
  paceCon = false;
}

function food(){
  if(huntEat === false){
    document.getElementById('hideFood').style.display = "block";
    huntEat = true;
  }
  else{
    foodHide();
  }
}

function foodHide(){
  document.getElementById('hideFood').style.display = "none";
  huntEat = false;
}

function resetOpt(){
  if(goHide === false){
  document.getElementById('GO').style.display = "block";
  goHide = true;
  }
  else{
    gameOverHide();
  }
}

function gameOverHide(){
  document.getElementById('GO').style.display = "none";
  goHide = false;
}
