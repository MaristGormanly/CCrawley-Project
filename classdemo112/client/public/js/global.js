var audio = new Audio('/music/River_Radio_92_3_WBPM.mp3');

var x = document.cookie;

if(x == "musicOff"){
  audio.autoplay = false;
}
else{
  audio.autoplay = true;
}
/*
window.onload = function() {
    audio.play();
}
*/
var currentSong = true;

document.addEventListener("keypress", function(event){
   if(event.keyCode == 52 && currentSong == true){//turn sound off 4
      document.getElementById("offColor").style.color = "red";
      document.getElementById("onColor").style.color = "white";
      audio.pause();
      currentSong = false;
      document.cookie = "musicOn";
    }//if
    else{
      document.getElementById("onColor").style.color = "red";
      document.getElementById("offColor").style.color = "white";
      audio.play();
      currentSong = true;
      document.cookie = "musicOff";
      }//else
});//function
