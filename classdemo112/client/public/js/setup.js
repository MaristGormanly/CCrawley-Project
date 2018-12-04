var screen;
var currGameScreen;

window.addEventListener("load", function(event){
  screen(0);
  currGameScreen = 0;
});

var profession;
var month;
var money;

function gameSettings(profession, pNames, money, month){
  this.profession = "";
  this.pNames = [];
  this.money = 0;
  this.month = "";
}

userSettings = new gameSettings();

document.addEventListener("keypress", function(event){
  if(currGameScreen === 0){
    if(event.keyCode == 32){
      window.location.href = "mainmenu.html";
    }//if
    if (event.keyCode == 49) {
      gameSettings.profession = "Banker";
      gameSettings.money = 200;
      professionSet(0);
      console.log(gameSettings.profession);
    }
    if (event.keyCode == 50) {
      profession = "Carpenter";
      money = 100;
      professionSet(1);
    }
    if (event.keyCode == 51) {
      profession = "Farmer";
      money = 50;
      professionSet(2);
    }
    currGameScreen++;
    screen(currGameScreen);
  }
  if(currGameScreen === 3){
      if(event.keyCode == 32){
        //window.location.href = "mainmenu.html";
      }//if
      if (event.keyCode == 49) {
        gameSettings.month = "March";
        monthSet(0);
      }
      if (event.keyCode == 50) {
        month = "April";
        monthSet(1);
      }
      if (event.keyCode == 51) {
        month = "May";
        monthSet(2);
      }
      if (event.keyCode == 52) {
        month = "June";
        monthSet(3);
      }
      if (event.keyCode == 53) {
        month = "July";
        monthSet(4);
      }
      currGameScreen++;
      screen(currGameScreen);
    }
  if(currGameScreen === 4){
    if(event.keyCode == 32){
      startTrail();
    }
  }
});//function

document.addEventListener('click', function(event){
  var x = event.target || event.srcElement;

  if(currGameScreen === 0){
    var bankerMenuItem = document.getElementById("bankerMenuItem");
    if(x === bankerMenuItem){
      profession = "Banker";
      money = 200;
      professionSet(0);
    }

    var carpenterMenuItem = document.getElementById("carpenterMenuItem");
    if(x === carpenterMenuItem){
      profession = "Carpenter";
      money = 100;
      professionSet(1);
    }

    var farmerMenuItem = document.getElementById("farmerrMenuItem");
    if(x === farmerMenuItem){
      profession = "Farmer";
      money = 50;
      professionSet(2);
    }
    currGameScreen++;
    screen(currGameScreen);
  }


  if(currGameScreen === 1){
    var submitPName = document.getElementById('submitButton');
    if(x === submitPName){
      var p1 = document.getElementById('p1').value;
    playerSet(0, p1);
    console.log("p1 submited");

    currGameScreen++;
    screen(currGameScreen);
    }
  }

  if(currGameScreen === 2){
    var submitP2Name = document.getElementById('submitButton');
    if(x === submitP2Name){
      var p2 = document.getElementById('p2').value;
      var p3 = document.getElementById('p3').value;
      var p4 = document.getElementById('p4').value;
      var p5 = document.getElementById('p5').value;

      playerSet(1, p2);
      playerSet(2, p3);
      playerSet(3, p4);
      playerSet(4, p5);

      console.log("p2 " + p2);

      currGameScreen++;
      screen(currGameScreen);
    }
  }

  if(currGameScreen === 3){
    var march = document.getElementById("marchMenuItem");
    if(x === march){
      month = "March";
      monthSet(0);
      showSettings();
      }

    var april = document.getElementById("aprilMenuItem");
    if(x === april){
      month = "April";
      monthSet(1);
      showSettings();
      }

    var may = document.getElementById("mayMenuItem");
    if(x === may){
      month = "May";
      monthSet(2);
      showSettings();
      }

    var june = document.getElementById("juneMenuItem");
    if(x === june){
      month = "June";
      monthSet(3);
      showSettings();
      }

    var july = document.getElementById("julyMenuItem");
    if(x === july){
      month = "July";
      monthSet(4);
      showSettings();
      }
      currGameScreen++;
      screen(currGameScreen);
  }

  if (currGameScreen === 4){
    var start = document.getElementById('selectOption');
    if(x === start){
      startTrail();
    }
  }
});

function startTrail(){
  location.replace('trail.html');
}

function screen(currGameScreen){
  var gameContainer = document.getElementById("gameContainer");

  fetch('/api/getSetupScreen/' + currGameScreen,
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
      }
      response.text().then(function(data){
        console.log("received back: " + data);
        gameContainer.innerHTML = data;
        console.log("setup display is working");
      });
    });
}

function professionSet(profession){
fetch('/api/getProf/profession/' + profession,
  {
    method:'post',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
    body:'{"profession": "'+ profession +'"}'
  }).then(function(response){
    if(response.status !== 200)
    console.log('problem with ajax call!' + response.status + "msg: " + response.value);
    return;
  })
  console.log("profession " + profession + " saved!");
}

function playerSet(playerID, playerName){
  fetch('/api/setup/player/' + playerName,
    {
      method:'post',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
      body:'{"playerID": "'+ playerID +'" / "'+ playerName +'"}'
    }).then(function(response){
      if(response.status != 200)
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    })
    console.log("playerName " + playerName + " saved!");
}

function monthSet(month){
  fetch('/api/setup/month/' + month,
    {
      method:'post',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
      body:'{"month": "'+ month +'"}'
    }).then(function(response){
      if(response.status != 200)
      console.log('problem with ajax call!' + response.status + "msg: " + response.value);
      return;
    })
    console.log("month " + month + " saved!");
}

function showSettings(){
  fetch('/api/setup/getSetup',
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
      response.text().then(function(data){
        console.log("received back: " + data);
        dataJSON = JSON.parse(data);
        allSettings(dataJSON);
      });//response.text() func
    });//.then
}//showSettings

function allSettings(setting){
  document.getElementById('wagonLeader').innerHTML = "Wagon Leader: " + setting.p1;
  document.getElementById('member1').innerHTML = "Member 1: " + setting.p2;
  document.getElementById('member2').innerHTML = "Member 2: " + setting.p3;
  document.getElementById('member3').innerHTML = "Member 3: " + setting.p4;
  document.getElementById('member4').innerHTML = "Member 4: " + setting.p5;
  document.getElementById('profession').innerHTML = "Profession: " + setting.profession;
  document.getElementById('cash').innerHTML = "Money: " + setting.money;
  document.getElementById('month').innerHTML = "Month: " + setting.month;
}
