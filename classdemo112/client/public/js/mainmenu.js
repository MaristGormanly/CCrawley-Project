document.addEventListener("keypress", function(event){
    if(event.keyCode == 49){//1
      window.location.href = "trail.html";
    }//if
});//function

//document.addEventListener("keypress", function(event){
  //  if(event.keyCode == 50){//2
    //  window.location.href = ".html";
    //}//if
//});//function

document.addEventListener("keypress", function(event){
    if(event.keyCode == 51){//3
      window.location.href = "topten.html";
    }//if
});//function

document.getElementById("onColor").style.color = "red";
document.getElementById().muted = false;

document.addEventListener("keypress", function(event){
    if(event.keyCode == 52){//turn sound off 4
      if(document.getElementById().muted = false){
        document.getElementById().muted = true;
        document.getElementById("offColor").style.color = "red";
      }//if
      else{
        document.getElementById().muted = false;
        document.getElementById("onColor").style.color = "red";
      }//else
    }//if
});//function
