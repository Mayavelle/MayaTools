//Menu
function rgTopnav() {
  var x = document.getElementById("rgTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
    document.getElementById("ffxiv").style.display = "none";
  }
}

//Ad
function closeAd() {
	document.getElementById("rgad").style.display = "none";
}