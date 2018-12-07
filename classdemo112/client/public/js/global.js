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


document.addEventListener("keypress", function(event){
   if(event.keyCode == 52 && audio.play){//turn sound off 4
      document.getElementById("offColor").style.color = "red";
      document.getElementById("onColor").style.color = "white";
      audio.pause();

      document.cookie = "musicOn";
    }//if
    else{
      document.getElementById("onColor").style.color = "red";
      document.getElementById("offColor").style.color = "white";
      audio.play();
      document.cookie = "musicOff";
      }//else
});//function
