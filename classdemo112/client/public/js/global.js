var audio = document.getElementById('River_Radio_92_3_WBPM.mp3');

audio.addEventListener('ended', function(){
  this.currentTime = 0;
  this.play();
}, false);

audio.play();
