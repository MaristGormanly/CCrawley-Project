var audio = document.getElementById("/music/River_Radio_92_3_WBPM.mp3");
document.getElementById("/music/River_Radio_92_3_WBPM.mp3").loop = true;

function play(){
  timeTrack  = localStorage.getItem(currMusicSound);
  document.getElementById("/music/River_Radio_92_3_WBPM.mp3").currentTime = timeTrack;
  audio.play();
}

function pause(){
  timeTrack = document.getElementById("/music/River_Radio_92_3_WBPM.mp3").currentTime();
  localStorage.setItem("currMusicSound, timeTrack");
  audio.pause();
}
