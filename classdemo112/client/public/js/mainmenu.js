document.addEventListener("keypress", function(event){
    if(event.keyCode == 49){//1
      window.location.href = "setup.html";
    }//if
});//function

document.addEventListener("keypress", function(event){
    if(event.keyCode == 50){//2
      window.location.href = "desc.html";
    }//if
});//function

document.addEventListener("keypress", function(event){
    if(event.keyCode == 51){//3
      window.location.href = "topten.html";
    }//if
});//function

document.getElementById("onColor").style.color = "red";

document.addEventListener('click', function(event){
  var x = event.target || event.srcElement;

  var trail = document.getElementById('TravelTheTrail')
  if(x === trail){
    window.location.href = "setup.html";
  }

  var desc = document.getElementById('LearnAboutTrail')
  if(x === desc){
    window.location.href = "desc.html";
  }

  var tt = document.getElementById('TT')
  if(x === tt){
    window.location.href = "topten.html";
  }
})
