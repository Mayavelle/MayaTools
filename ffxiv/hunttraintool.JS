/* Variables */
var ddxpac = document.getElementsByClassName('dropdownxpac');
var zone = document.getElementsByClassName('zone');
var mol = document.getElementsByClassName('mol');
var zonecnt = document.getElementsByClassName('zonecnt');

/*Modular Functions*/
function hidemenu2() {
  for (let i = 0; i < ddxpac.length; i++) {
    ddxpac[i].style.display = "none";
  }
}

function zoomlmt(zoom) {
  /*zonecnt[0].style.width = zoom;
  zone[0].style.width = zoom;
  mol[0].style.width = zoom;
  for (let i = 0; i < zonecnt.length; i++) {
    zone[i].style.width = zoom;
    mol[i].style.width = zoom;
  }*/
}

/*function hidemenu2() {
  //document.getElementsByClassName("dropdownxpac").style.display = "none";
  document.getElementById("dropdownzoom").style.display = "none";
  document.getElementById("dropdownarr").style.display = "none";
  document.getElementById("dropdownhw").style.display = "none";
  document.getElementById("dropdownsb").style.display = "none";
  document.getElementById("dropdownsh").style.display = "none";
  document.getElementById("dropdownend").style.display = "none";
}*/

function endToggle(){
  document.getElementById("endbtn").style.borderColor = "#ccc";
  document.getElementById("shbbtn").style.borderColor = "#666";
  document.getElementById("httend").style.display = "block";
  document.getElementById("httshb").style.display = "none";
}

function shbToggle(){
  document.getElementById("shbbtn").style.borderColor = "#ccc";
  document.getElementById("endbtn").style.borderColor = "#666";
  document.getElementById("httshb").style.display = "block";
  document.getElementById("httend").style.display = "none";
}

function zoom100b() {
  document.getElementsByClassName("zonecnt").style.width = "1024px";
  hidemenu2();
}
function zoom075b() {
  document.getElementsByClassName("zonecnt").style.width = "768px";
  hidemenu2();
}
function zoom050b() {
  document.getElementsByClassName("zonecnt").style.width = "512px";
  hidemenu2();
}
function zoom025b() {
  document.getElementsByClassName("zonecnt").style.width = "256px";
  hidemenu2();
}

function garlToggle() {
  document.getElementbyId("garlemald").style.display =        "block";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function garl2Toggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "block";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function garl3Toggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "block";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ultimaToggle() {
  document.getElementsByClassName('zonecnt').style.display = "none";
  //hidemenu2();
}
/*function ultimaToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "block";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}*/
function ultima2Toggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "block";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ultima3Toggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "block";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ahmToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "block";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function mhegToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "block";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function yanxiaToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "block";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function azimToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "block";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function cwhToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "block";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ulnToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "block";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ctToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "block";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function llnToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "block";
  document.getElementbyId("southshroud").style.display =      "none";
  hidemenu2();
}
function ssToggle() {
  document.getElementbyId("garlemald").style.display =        "none";
  document.getElementbyId("garlemald2").style.display =       "none";
  document.getElementbyId("garlemald3").style.display =       "none";
  document.getElementbyId("ultimathule").style.display =      "none";
  document.getElementbyId("ultimathule2").style.display =     "none";
  document.getElementbyId("ultimathule3").style.display =     "none";
  document.getElementbyId("ilmheg").style.display =           "none";
  document.getElementbyId("ahmaraeng").style.display =        "none";
  document.getElementbyId("theazimsteppe").style.display =    "none";
  document.getElementbyId("yanxia").style.display =           "none";
  document.getElementbyId("coerthaswesternhighlands").style.display = "none";
  document.getElementbyId("upperlanoscea").style.display =    "none";
  document.getElementbyId("centralthanalan").style.display =  "none";
  document.getElementbyId("lowerlanoscea").style.display =    "none";
  document.getElementbyId("southshroud").style.display =      "block";
  hidemenu2();
}

function copy5(){
  var copyText = document.getElementById("sharemarks5");
  copyText.select();
  copyText.setSelectionRange(0,99999);
  document.execCommand("copy");
  var toast = document.getElementById("copytoast");
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

function copy6(){
  var copyText = document.getElementById("sharemarks6");
  copyText.select();
  copyText.setSelectionRange(0,99999);
  document.execCommand("copy");
  var toast = document.getElementById("copytoast");
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

/*function clearLoad(){document.getElementById("loadmarks").value = "";}*/

function toggle(){
  var str = event.target.src;
  var pos = str.search("/ffxiv/images/");
  var state = str.substr(pos);
  var off = "/ffxiv/images/offcircle.png";
  var on1 = "/ffxiv/images/on1circle.png";
  var on2 = "/ffxiv/images/on2circle.png";
  switch (state) {
    case off:
      var toggle = str.replace(state,on1);
      event.target.src = toggle;
      break;
    case on1:
      var toggle = str.replace(state,on2);
      event.target.src = toggle;
      break;
    case on2:
      var toggle = str.replace(state,off);
      event.target.src = toggle;
      break;
  }
}

/*function loadmarks(){
  var load = document.getElementById("loadmarks").value;
  var expac = document.getElementById("expansioncheck");
  var off = document.getElementById("offc").src;
  var on1 = document.getElementById("on1c").src;
  var on2 = document.getElementById("on2c").src;
  var exp = load.charAt(0);
  var sh0 = load.charAt(1);
  var sh1 = load.charAt(2);
  var sh2 = load.charAt(3);
  var sh3 = load.charAt(4);
  var sh4 = load.charAt(5);
  var sh5 = load.charAt(6);
  var sh6 = load.charAt(7);
  var sh7 = load.charAt(8);
  var sh8 = load.charAt(9);
  var sh9 = load.charAt(10);
  var sh10 = load.charAt(11);
  var sh11 = load.charAt(12);
  document.getElementById("ak0").src = off;
  document.getElementById("ak1").src = off;
  document.getElementById("ak2").src = off;
  document.getElementById("ak3").src = off;
  document.getElementById("ak4").src = off;
  document.getElementById("ak5").src = off;
  document.getElementById("ak6").src = off;
  document.getElementById("ak7").src = off;
  document.getElementById("ak8").src = off;
  document.getElementById("ak9").src = off;
  document.getElementById("ak10").src = off;
  document.getElementById("ak11").src = off;
  document.getElementById("ak12").src = off;
  document.getElementById("ak13").src = off;
  document.getElementById("ak14").src = off;
  document.getElementById("ak15").src = off;
  document.getElementById("ak16").src = off;
  document.getElementById("ak17").src = off;
  document.getElementById("al0").src = off;
  document.getElementById("al1").src = off;
  document.getElementById("al2").src = off;
  document.getElementById("al3").src = off;
  document.getElementById("al4").src = off;
  document.getElementById("al5").src = off;
  document.getElementById("al6").src = off;
  document.getElementById("al7").src = off;
  document.getElementById("al8").src = off;
  document.getElementById("al9").src = off;
  document.getElementById("al10").src = off;
  document.getElementById("al11").src = off;
  document.getElementById("al12").src = off;
  document.getElementById("al13").src = off;
  document.getElementById("al14").src = off;
  document.getElementById("al15").src = off;
  document.getElementById("al16").src = off;
  document.getElementById("am0").src = off;
  document.getElementById("am1").src = off;
  document.getElementById("am2").src = off;
  document.getElementById("am3").src = off;
  document.getElementById("am4").src = off;
  document.getElementById("am5").src = off;
  document.getElementById("am6").src = off;
  document.getElementById("am7").src = off;
  document.getElementById("am8").src = off;
  document.getElementById("am9").src = off;
  document.getElementById("am10").src = off;
  document.getElementById("am11").src = off;
  document.getElementById("am12").src = off;
  document.getElementById("am13").src = off;
  document.getElementById("am14").src = off;
  document.getElementById("am15").src = off;
  document.getElementById("am16").src = off;
  document.getElementById("an0").src = off;
  document.getElementById("an1").src = off;
  document.getElementById("an2").src = off;
  document.getElementById("an3").src = off;
  document.getElementById("an4").src = off;
  document.getElementById("an5").src = off;
  document.getElementById("an6").src = off;
  document.getElementById("an7").src = off;
  document.getElementById("an8").src = off;
  document.getElementById("an9").src = off;
  document.getElementById("an10").src = off;
  document.getElementById("an11").src = off;
  document.getElementById("an12").src = off;
  document.getElementById("an13").src = off;
  document.getElementById("an14").src = off;
  document.getElementById("an15").src = off;
  document.getElementById("an16").src = off;
  document.getElementById("ao0").src = off;
  document.getElementById("ao1").src = off;
  document.getElementById("ao2").src = off;
  document.getElementById("ao3").src = off;
  document.getElementById("ao4").src = off;
  document.getElementById("ao5").src = off;
  document.getElementById("ao6").src = off;
  document.getElementById("ao7").src = off;
  document.getElementById("ao8").src = off;
  document.getElementById("ao9").src = off;
  document.getElementById("ao10").src = off;
  document.getElementById("ao11").src = off;
  document.getElementById("ao12").src = off;
  document.getElementById("ao13").src = off;
  document.getElementById("ao14").src = off;
  document.getElementById("ap0").src = off;
  document.getElementById("ap1").src = off;
  document.getElementById("ap2").src = off;
  document.getElementById("ap3").src = off;
  document.getElementById("ap4").src = off;
  document.getElementById("ap5").src = off;
  document.getElementById("ap6").src = off;
  document.getElementById("ap7").src = off;
  document.getElementById("ap8").src = off;
  document.getElementById("ap9").src = off;
  document.getElementById("ap10").src = off;
  document.getElementById("ap11").src = off;
  document.getElementById("ap12").src = off;
  document.getElementById("ap13").src = off;
  document.getElementById("ap14").src = off;
  document.getElementById("ap15").src = off;
  document.getElementById("ap16").src = off;
  if (sh0 == "A") {document.getElementById("ak0").src = on1;}
  if (sh0 == "B") {document.getElementById("ak1").src = on1;}
  if (sh0 == "C") {document.getElementById("ak2").src = on1;}
  if (sh0 == "D") {document.getElementById("ak3").src = on1;}
  if (sh0 == "E") {document.getElementById("ak4").src = on1;}
  if (sh0 == "F") {document.getElementById("ak5").src = on1;}
  if (sh0 == "G") {document.getElementById("ak6").src = on1;}
  if (sh0 == "H") {document.getElementById("ak7").src = on1;}
  if (sh0 == "I") {document.getElementById("ak8").src = on1;}
  if (sh0 == "J") {document.getElementById("ak9").src = on1;}
  if (sh0 == "K") {document.getElementById("ak10").src = on1;}
  if (sh0 == "L") {document.getElementById("ak11").src = on1;}
  if (sh0 == "M") {document.getElementById("ak12").src = on1;}
  if (sh0 == "N") {document.getElementById("ak13").src = on1;}
  if (sh0 == "O") {document.getElementById("ak14").src = on1;}
  if (sh0 == "P") {document.getElementById("ak15").src = on1;}
  if (sh0 == "Q") {document.getElementById("ak16").src = on1;}
  if (sh0 == "R") {document.getElementById("ak17").src = on1;}
  if (sh1 == "A") {document.getElementById("ak0").src = on2;}
  if (sh1 == "B") {document.getElementById("ak1").src = on2;}
  if (sh1 == "C") {document.getElementById("ak2").src = on2;}
  if (sh1 == "D") {document.getElementById("ak3").src = on2;}
  if (sh1 == "E") {document.getElementById("ak4").src = on2;}
  if (sh1 == "F") {document.getElementById("ak5").src = on2;}
  if (sh1 == "G") {document.getElementById("ak6").src = on2;}
  if (sh1 == "H") {document.getElementById("ak7").src = on2;}
  if (sh1 == "I") {document.getElementById("ak8").src = on2;}
  if (sh1 == "J") {document.getElementById("ak9").src = on2;}
  if (sh1 == "K") {document.getElementById("ak10").src = on2;}
  if (sh1 == "L") {document.getElementById("ak11").src = on2;}
  if (sh1 == "M") {document.getElementById("ak12").src = on2;}
  if (sh1 == "N") {document.getElementById("ak13").src = on2;}
  if (sh1 == "O") {document.getElementById("ak14").src = on2;}
  if (sh1 == "P") {document.getElementById("ak15").src = on2;}
  if (sh1 == "Q") {document.getElementById("ak16").src = on2;}
  if (sh1 == "R") {document.getElementById("ak17").src = on2;}
  if (sh2 == "A") {document.getElementById("al0").src = on1;}
  if (sh2 == "B") {document.getElementById("al1").src = on1;}
  if (sh2 == "C") {document.getElementById("al2").src = on1;}
  if (sh2 == "D") {document.getElementById("al3").src = on1;}
  if (sh2 == "E") {document.getElementById("al4").src = on1;}
  if (sh2 == "F") {document.getElementById("al5").src = on1;}
  if (sh2 == "G") {document.getElementById("al6").src = on1;}
  if (sh2 == "H") {document.getElementById("al7").src = on1;}
  if (sh2 == "I") {document.getElementById("al8").src = on1;}
  if (sh2 == "J") {document.getElementById("al9").src = on1;}
  if (sh2 == "K") {document.getElementById("al10").src = on1;}
  if (sh2 == "L") {document.getElementById("al11").src = on1;}
  if (sh2 == "M") {document.getElementById("al12").src = on1;}
  if (sh2 == "N") {document.getElementById("al13").src = on1;}
  if (sh2 == "O") {document.getElementById("al14").src = on1;}
  if (sh2 == "P") {document.getElementById("al15").src = on1;}
  if (sh2 == "Q") {document.getElementById("al16").src = on1;}
  if (sh3 == "A") {document.getElementById("al0").src = on2;}
  if (sh3 == "B") {document.getElementById("al1").src = on2;}
  if (sh3 == "C") {document.getElementById("al2").src = on2;}
  if (sh3 == "D") {document.getElementById("al3").src = on2;}
  if (sh3 == "E") {document.getElementById("al4").src = on2;}
  if (sh3 == "F") {document.getElementById("al5").src = on2;}
  if (sh3 == "G") {document.getElementById("al6").src = on2;}
  if (sh3 == "H") {document.getElementById("al7").src = on2;}
  if (sh3 == "I") {document.getElementById("al8").src = on2;}
  if (sh3 == "J") {document.getElementById("al9").src = on2;}
  if (sh3 == "K") {document.getElementById("al10").src = on2;}
  if (sh3 == "L") {document.getElementById("al11").src = on2;}
  if (sh3 == "M") {document.getElementById("al12").src = on2;}
  if (sh3 == "N") {document.getElementById("al13").src = on2;}
  if (sh3 == "O") {document.getElementById("al14").src = on2;}
  if (sh3 == "P") {document.getElementById("al15").src = on2;}
  if (sh3 == "Q") {document.getElementById("al16").src = on2;}
  if (sh4 == "A") {document.getElementById("am0").src = on1;}
  if (sh4 == "B") {document.getElementById("am1").src = on1;}
  if (sh4 == "C") {document.getElementById("am2").src = on1;}
  if (sh4 == "D") {document.getElementById("am3").src = on1;}
  if (sh4 == "E") {document.getElementById("am4").src = on1;}
  if (sh4 == "F") {document.getElementById("am5").src = on1;}
  if (sh4 == "G") {document.getElementById("am6").src = on1;}
  if (sh4 == "H") {document.getElementById("am7").src = on1;}
  if (sh4 == "I") {document.getElementById("am8").src = on1;}
  if (sh4 == "J") {document.getElementById("am9").src = on1;}
  if (sh4 == "K") {document.getElementById("am10").src = on1;}
  if (sh4 == "L") {document.getElementById("am11").src = on1;}
  if (sh4 == "M") {document.getElementById("am12").src = on1;}
  if (sh4 == "N") {document.getElementById("am13").src = on1;}
  if (sh4 == "O") {document.getElementById("am14").src = on1;}
  if (sh4 == "P") {document.getElementById("am15").src = on1;}
  if (sh4 == "Q") {document.getElementById("am16").src = on1;}
  if (sh5 == "A") {document.getElementById("am0").src = on2;}
  if (sh5 == "B") {document.getElementById("am1").src = on2;}
  if (sh5 == "C") {document.getElementById("am2").src = on2;}
  if (sh5 == "D") {document.getElementById("am3").src = on2;}
  if (sh5 == "E") {document.getElementById("am4").src = on2;}
  if (sh5 == "F") {document.getElementById("am5").src = on2;}
  if (sh5 == "G") {document.getElementById("am6").src = on2;}
  if (sh5 == "H") {document.getElementById("am7").src = on2;}
  if (sh5 == "I") {document.getElementById("am8").src = on2;}
  if (sh5 == "J") {document.getElementById("am9").src = on2;}
  if (sh5 == "K") {document.getElementById("am10").src = on2;}
  if (sh5 == "L") {document.getElementById("am11").src = on2;}
  if (sh5 == "M") {document.getElementById("am12").src = on2;}
  if (sh5 == "N") {document.getElementById("am13").src = on2;}
  if (sh5 == "O") {document.getElementById("am14").src = on2;}
  if (sh5 == "P") {document.getElementById("am15").src = on2;}
  if (sh5 == "Q") {document.getElementById("am16").src = on2;}
  if (sh6 == "A") {document.getElementById("an0").src = on1;}
  if (sh6 == "B") {document.getElementById("an1").src = on1;}
  if (sh6 == "C") {document.getElementById("an2").src = on1;}
  if (sh6 == "D") {document.getElementById("an3").src = on1;}
  if (sh6 == "E") {document.getElementById("an4").src = on1;}
  if (sh6 == "F") {document.getElementById("an5").src = on1;}
  if (sh6 == "G") {document.getElementById("an6").src = on1;}
  if (sh6 == "H") {document.getElementById("an7").src = on1;}
  if (sh6 == "I") {document.getElementById("an8").src = on1;}
  if (sh6 == "J") {document.getElementById("an9").src = on1;}
  if (sh6 == "K") {document.getElementById("an10").src = on1;}
  if (sh6 == "L") {document.getElementById("an11").src = on1;}
  if (sh6 == "M") {document.getElementById("an12").src = on1;}
  if (sh6 == "N") {document.getElementById("an13").src = on1;}
  if (sh6 == "O") {document.getElementById("an14").src = on1;}
  if (sh6 == "P") {document.getElementById("an15").src = on1;}
  if (sh6 == "Q") {document.getElementById("an16").src = on1;}
  if (sh7 == "A") {document.getElementById("an0").src = on2;}
  if (sh7 == "B") {document.getElementById("an1").src = on2;}
  if (sh7 == "C") {document.getElementById("an2").src = on2;}
  if (sh7 == "D") {document.getElementById("an3").src = on2;}
  if (sh7 == "E") {document.getElementById("an4").src = on2;}
  if (sh7 == "F") {document.getElementById("an5").src = on2;}
  if (sh7 == "G") {document.getElementById("an6").src = on2;}
  if (sh7 == "H") {document.getElementById("an7").src = on2;}
  if (sh7 == "I") {document.getElementById("an8").src = on2;}
  if (sh7 == "J") {document.getElementById("an9").src = on2;}
  if (sh7 == "K") {document.getElementById("an10").src = on2;}
  if (sh7 == "L") {document.getElementById("an11").src = on2;}
  if (sh7 == "M") {document.getElementById("an12").src = on2;}
  if (sh7 == "N") {document.getElementById("an13").src = on2;}
  if (sh7 == "O") {document.getElementById("an14").src = on2;}
  if (sh7 == "P") {document.getElementById("an15").src = on2;}
  if (sh7 == "Q") {document.getElementById("an16").src = on2;}
  if (sh8 == "A") {document.getElementById("ao0").src = on1;}
  if (sh8 == "B") {document.getElementById("ao1").src = on1;}
  if (sh8 == "C") {document.getElementById("ao2").src = on1;}
  if (sh8 == "D") {document.getElementById("ao3").src = on1;}
  if (sh8 == "E") {document.getElementById("ao4").src = on1;}
  if (sh8 == "F") {document.getElementById("ao5").src = on1;}
  if (sh8 == "G") {document.getElementById("ao6").src = on1;}
  if (sh8 == "H") {document.getElementById("ao7").src = on1;}
  if (sh8 == "I") {document.getElementById("ao8").src = on1;}
  if (sh8 == "J") {document.getElementById("ao9").src = on1;}
  if (sh8 == "K") {document.getElementById("ao10").src = on1;}
  if (sh8 == "L") {document.getElementById("ao11").src = on1;}
  if (sh8 == "M") {document.getElementById("ao12").src = on1;}
  if (sh8 == "N") {document.getElementById("ao13").src = on1;}
  if (sh8 == "O") {document.getElementById("ao14").src = on1;}
  if (sh9 == "A") {document.getElementById("ao0").src = on2;}
  if (sh9 == "B") {document.getElementById("ao1").src = on2;}
  if (sh9 == "C") {document.getElementById("ao2").src = on2;}
  if (sh9 == "D") {document.getElementById("ao3").src = on2;}
  if (sh9 == "E") {document.getElementById("ao4").src = on2;}
  if (sh9 == "F") {document.getElementById("ao5").src = on2;}
  if (sh9 == "G") {document.getElementById("ao6").src = on2;}
  if (sh9 == "H") {document.getElementById("ao7").src = on2;}
  if (sh9 == "I") {document.getElementById("ao8").src = on2;}
  if (sh9 == "J") {document.getElementById("ao9").src = on2;}
  if (sh9 == "K") {document.getElementById("ao10").src = on2;}
  if (sh9 == "L") {document.getElementById("ao11").src = on2;}
  if (sh9 == "M") {document.getElementById("ao12").src = on2;}
  if (sh9 == "N") {document.getElementById("ao13").src = on2;}
  if (sh9 == "O") {document.getElementById("ao14").src = on2;}
  if (sh10 == "A") {document.getElementById("ap0").src = on1;}
  if (sh10 == "B") {document.getElementById("ap1").src = on1;}
  if (sh10 == "C") {document.getElementById("ap2").src = on1;}
  if (sh10 == "D") {document.getElementById("ap3").src = on1;}
  if (sh10 == "E") {document.getElementById("ap4").src = on1;}
  if (sh10 == "F") {document.getElementById("ap5").src = on1;}
  if (sh10 == "G") {document.getElementById("ap6").src = on1;}
  if (sh10 == "H") {document.getElementById("ap7").src = on1;}
  if (sh10 == "I") {document.getElementById("ap8").src = on1;}
  if (sh10 == "J") {document.getElementById("ap9").src = on1;}
  if (sh10 == "K") {document.getElementById("ap10").src = on1;}
  if (sh10 == "L") {document.getElementById("ap11").src = on1;}
  if (sh10 == "M") {document.getElementById("ap12").src = on1;}
  if (sh10 == "N") {document.getElementById("ap13").src = on1;}
  if (sh10 == "O") {document.getElementById("ap14").src = on1;}
  if (sh10 == "P") {document.getElementById("ap15").src = on1;}
  if (sh10 == "Q") {document.getElementById("ap16").src = on1;}
  if (sh11 == "A") {document.getElementById("ap0").src = on2;}
  if (sh11 == "B") {document.getElementById("ap1").src = on2;}
  if (sh11 == "C") {document.getElementById("ap2").src = on2;}
  if (sh11 == "D") {document.getElementById("ap3").src = on2;}
  if (sh11 == "E") {document.getElementById("ap4").src = on2;}
  if (sh11 == "F") {document.getElementById("ap5").src = on2;}
  if (sh11 == "G") {document.getElementById("ap6").src = on2;}
  if (sh11 == "H") {document.getElementById("ap7").src = on2;}
  if (sh11 == "I") {document.getElementById("ap8").src = on2;}
  if (sh11 == "J") {document.getElementById("ap9").src = on2;}
  if (sh11 == "K") {document.getElementById("ap10").src = on2;}
  if (sh11 == "L") {document.getElementById("ap11").src = on2;}
  if (sh11 == "M") {document.getElementById("ap12").src = on2;}
  if (sh11 == "N") {document.getElementById("ap13").src = on2;}
  if (sh11 == "O") {document.getElementById("ap14").src = on2;}
  if (sh11 == "P") {document.getElementById("ap15").src = on2;}
  if (sh11 == "Q") {document.getElementById("ap16").src = on2;}
  if (exp == "5") {expac.value = "5";}
  if (exp == "6") {expac.value = "6";}
}*/

/*function sharemarks() {
  var exp = document.getElementById("expansioncheck").value;
  var off = "/ffxiv/images/offcircle.png";
  var on1 = "/ffxiv/images/on1circle.png";
  var on2 = "/ffxiv/images/on2circle.png";
}*/

function sharemarks5() {
  var exp = "5";
  var off = "/ffxiv/images/offcircle.png";
  var on1 = "/ffxiv/images/on1circle.png";
  var on2 = "/ffxiv/images/on2circle.png";
  var ae0x = document.getElementById("ae0").src;
  var ae1x = document.getElementById("ae1").src;
  var ae2x = document.getElementById("ae2").src;
  var ae3x = document.getElementById("ae3").src;
  var ae4x = document.getElementById("ae4").src;
  var ae5x = document.getElementById("ae5").src;
  var ae6x = document.getElementById("ae6").src;
  var ae7x = document.getElementById("ae7").src;
  var ae8x = document.getElementById("ae8").src;
  var ae9x = document.getElementById("ae9").src;
  var ae10x = document.getElementById("ae10").src;
  var ae11x = document.getElementById("ae11").src;
  var ae12x = document.getElementById("ae12").src;
  var ae13x = document.getElementById("ae13").src;
  var ae14x = document.getElementById("ae14").src;
  var ae15x = document.getElementById("ae15").src;
  var ae16x = document.getElementById("ae16").src;
  var ae17x = document.getElementById("ae17").src;
  var af0x = document.getElementById("af0").src;
  var af1x = document.getElementById("af1").src;
  var af2x = document.getElementById("af2").src;
  var af3x = document.getElementById("af3").src;
  var af4x = document.getElementById("af4").src;
  var af5x = document.getElementById("af5").src;
  var af6x = document.getElementById("af6").src;
  var af7x = document.getElementById("af7").src;
  var af8x = document.getElementById("af8").src;
  var af9x = document.getElementById("af9").src;
  var af10x = document.getElementById("af10").src;
  var af11x = document.getElementById("af11").src;
  var af12x = document.getElementById("af12").src;
  var af13x = document.getElementById("af13").src;
  var af14x = document.getElementById("af14").src;
  var af15x = document.getElementById("af15").src;
  var af16x = document.getElementById("af16").src;
  var ag0x = document.getElementById("ag0").src;
  var ag1x = document.getElementById("ag1").src;
  var ag2x = document.getElementById("ag2").src;
  var ag3x = document.getElementById("ag3").src;
  var ag4x = document.getElementById("ag4").src;
  var ag5x = document.getElementById("ag5").src;
  var ag6x = document.getElementById("ag6").src;
  var ag7x = document.getElementById("ag7").src;
  var ag8x = document.getElementById("ag8").src;
  var ag9x = document.getElementById("ag9").src;
  var ag10x = document.getElementById("ag10").src;
  var ag11x = document.getElementById("ag11").src;
  var ag12x = document.getElementById("ag12").src;
  var ag13x = document.getElementById("ag13").src;
  var ag14x = document.getElementById("ag14").src;
  var ag15x = document.getElementById("ag15").src;
  var ag16x = document.getElementById("ag16").src;
  var ah0x = document.getElementById("ah0").src;
  var ah1x = document.getElementById("ah1").src;
  var ah2x = document.getElementById("ah2").src;
  var ah3x = document.getElementById("ah3").src;
  var ah4x = document.getElementById("ah4").src;
  var ah5x = document.getElementById("ah5").src;
  var ah6x = document.getElementById("ah6").src;
  var ah7x = document.getElementById("ah7").src;
  var ah8x = document.getElementById("ah8").src;
  var ah9x = document.getElementById("ah9").src;
  var ah10x = document.getElementById("ah10").src;
  var ah11x = document.getElementById("ah11").src;
  var ah12x = document.getElementById("ah12").src;
  var ah13x = document.getElementById("ah13").src;
  var ah14x = document.getElementById("ah14").src;
  var ah15x = document.getElementById("ah15").src;
  var ah16x = document.getElementById("ah16").src;
  var ai0x = document.getElementById("ai0").src;
  var ai1x = document.getElementById("ai1").src;
  var ai2x = document.getElementById("ai2").src;
  var ai3x = document.getElementById("ai3").src;
  var ai4x = document.getElementById("ai4").src;
  var ai5x = document.getElementById("ai5").src;
  var ai6x = document.getElementById("ai6").src;
  var ai7x = document.getElementById("ai7").src;
  var ai8x = document.getElementById("ai8").src;
  var ai9x = document.getElementById("ai9").src;
  var ai10x = document.getElementById("ai10").src;
  var ai11x = document.getElementById("ai11").src;
  var ai12x = document.getElementById("ai12").src;
  var ai13x = document.getElementById("ai13").src;
  var ai14x = document.getElementById("ai14").src;
  var aj0x = document.getElementById("aj0").src;
  var aj1x = document.getElementById("aj1").src;
  var aj2x = document.getElementById("aj2").src;
  var aj3x = document.getElementById("aj3").src;
  var aj4x = document.getElementById("aj4").src;
  var aj5x = document.getElementById("aj5").src;
  var aj6x = document.getElementById("aj6").src;
  var aj7x = document.getElementById("aj7").src;
  var aj8x = document.getElementById("aj8").src;
  var aj9x = document.getElementById("aj9").src;
  var aj10x = document.getElementById("aj10").src;
  var aj11x = document.getElementById("aj11").src;
  var aj12x = document.getElementById("aj12").src;
  var aj13x = document.getElementById("aj13").src;
  var aj14x = document.getElementById("aj14").src;
  var aj15x = document.getElementById("aj15").src;
  var aj16x = document.getElementById("aj16").src;
  var offc = document.getElementById("offc").src;
  var pos = offc.search("/ffxiv/images/");
  switch (ae0x.substr(pos)) {case off: var ae0 = 0; break; case on1: var ae0 = 1; break; case on2: var ae0 = 2;}
  switch (ae1x.substr(pos)) {case off: var ae1 = 0; break; case on1: var ae1 = 1; break; case on2: var ae1 = 2;}
  switch (ae2x.substr(pos)) {case off: var ae2 = 0; break; case on1: var ae2 = 1; break; case on2: var ae2 = 2;}
  switch (ae3x.substr(pos)) {case off: var ae3 = 0; break; case on1: var ae3 = 1; break; case on2: var ae3 = 2;}
  switch (ae4x.substr(pos)) {case off: var ae4 = 0; break; case on1: var ae4 = 1; break; case on2: var ae4 = 2;}
  switch (ae5x.substr(pos)) {case off: var ae5 = 0; break; case on1: var ae5 = 1; break; case on2: var ae5 = 2;}
  switch (ae6x.substr(pos)) {case off: var ae6 = 0; break; case on1: var ae6 = 1; break; case on2: var ae6 = 2;}
  switch (ae7x.substr(pos)) {case off: var ae7 = 0; break; case on1: var ae7 = 1; break; case on2: var ae7 = 2;}
  switch (ae8x.substr(pos)) {case off: var ae8 = 0; break; case on1: var ae8 = 1; break; case on2: var ae8 = 2;}
  switch (ae9x.substr(pos)) {case off: var ae9 = 0; break; case on1: var ae9 = 1; break; case on2: var ae9 = 2;}
  switch (ae10x.substr(pos)) {case off: var ae10 = 0; break; case on1: var ae10 = 1; break; case on2: var ae10 = 2;}
  switch (ae11x.substr(pos)) {case off: var ae11 = 0; break; case on1: var ae11 = 1; break; case on2: var ae11 = 2;}
  switch (ae12x.substr(pos)) {case off: var ae12 = 0; break; case on1: var ae12 = 1; break; case on2: var ae12 = 2;}
  switch (ae13x.substr(pos)) {case off: var ae13 = 0; break; case on1: var ae13 = 1; break; case on2: var ae13 = 2;}
  switch (ae14x.substr(pos)) {case off: var ae14 = 0; break; case on1: var ae14 = 1; break; case on2: var ae14 = 2;}
  switch (ae15x.substr(pos)) {case off: var ae15 = 0; break; case on1: var ae15 = 1; break; case on2: var ae15 = 2;}
  switch (ae16x.substr(pos)) {case off: var ae16 = 0; break; case on1: var ae16 = 1; break; case on2: var ae16 = 2;}
  switch (ae17x.substr(pos)) {case off: var ae17 = 0; break; case on1: var ae17 = 1; break; case on2: var ae17 = 2;}
  switch (af0x.substr(pos)) {case off: var af0 = 0; break; case on1: var af0 = 1; break; case on2: var af0 = 2;}
  switch (af1x.substr(pos)) {case off: var af1 = 0; break; case on1: var af1 = 1; break; case on2: var af1 = 2;}
  switch (af2x.substr(pos)) {case off: var af2 = 0; break; case on1: var af2 = 1; break; case on2: var af2 = 2;}
  switch (af3x.substr(pos)) {case off: var af3 = 0; break; case on1: var af3 = 1; break; case on2: var af3 = 2;}
  switch (af4x.substr(pos)) {case off: var af4 = 0; break; case on1: var af4 = 1; break; case on2: var af4 = 2;}
  switch (af5x.substr(pos)) {case off: var af5 = 0; break; case on1: var af5 = 1; break; case on2: var af5 = 2;}
  switch (af6x.substr(pos)) {case off: var af6 = 0; break; case on1: var af6 = 1; break; case on2: var af6 = 2;}
  switch (af7x.substr(pos)) {case off: var af7 = 0; break; case on1: var af7 = 1; break; case on2: var af7 = 2;}
  switch (af8x.substr(pos)) {case off: var af8 = 0; break; case on1: var af8 = 1; break; case on2: var af8 = 2;}
  switch (af9x.substr(pos)) {case off: var af9 = 0; break; case on1: var af9 = 1; break; case on2: var af9 = 2;}
  switch (af10x.substr(pos)) {case off: var af10 = 0; break; case on1: var af10 = 1; break; case on2: var af10 = 2;}
  switch (af11x.substr(pos)) {case off: var af11 = 0; break; case on1: var af11 = 1; break; case on2: var af11 = 2;}
  switch (af12x.substr(pos)) {case off: var af12 = 0; break; case on1: var af12 = 1; break; case on2: var af12 = 2;}
  switch (af13x.substr(pos)) {case off: var af13 = 0; break; case on1: var af13 = 1; break; case on2: var af13 = 2;}
  switch (af14x.substr(pos)) {case off: var af14 = 0; break; case on1: var af14 = 1; break; case on2: var af14 = 2;}
  switch (af15x.substr(pos)) {case off: var af15 = 0; break; case on1: var af15 = 1; break; case on2: var af15 = 2;}
  switch (af16x.substr(pos)) {case off: var af16 = 0; break; case on1: var af16 = 1; break; case on2: var af16 = 2;}
  switch (ag0x.substr(pos)) {case off: var ag0 = 0; break; case on1: var ag0 = 1; break; case on2: var ag0 = 2;}
  switch (ag1x.substr(pos)) {case off: var ag1 = 0; break; case on1: var ag1 = 1; break; case on2: var ag1 = 2;}
  switch (ag2x.substr(pos)) {case off: var ag2 = 0; break; case on1: var ag2 = 1; break; case on2: var ag2 = 2;}
  switch (ag3x.substr(pos)) {case off: var ag3 = 0; break; case on1: var ag3 = 1; break; case on2: var ag3 = 2;}
  switch (ag4x.substr(pos)) {case off: var ag4 = 0; break; case on1: var ag4 = 1; break; case on2: var ag4 = 2;}
  switch (ag5x.substr(pos)) {case off: var ag5 = 0; break; case on1: var ag5 = 1; break; case on2: var ag5 = 2;}
  switch (ag6x.substr(pos)) {case off: var ag6 = 0; break; case on1: var ag6 = 1; break; case on2: var ag6 = 2;}
  switch (ag7x.substr(pos)) {case off: var ag7 = 0; break; case on1: var ag7 = 1; break; case on2: var ag7 = 2;}
  switch (ag8x.substr(pos)) {case off: var ag8 = 0; break; case on1: var ag8 = 1; break; case on2: var ag8 = 2;}
  switch (ag9x.substr(pos)) {case off: var ag9 = 0; break; case on1: var ag9 = 1; break; case on2: var ag9 = 2;}
  switch (ag10x.substr(pos)) {case off: var ag10 = 0; break; case on1: var ag10 = 1; break; case on2: var ag10 = 2;}
  switch (ag11x.substr(pos)) {case off: var ag11 = 0; break; case on1: var ag11 = 1; break; case on2: var ag11 = 2;}
  switch (ag12x.substr(pos)) {case off: var ag12 = 0; break; case on1: var ag12 = 1; break; case on2: var ag12 = 2;}
  switch (ag13x.substr(pos)) {case off: var ag13 = 0; break; case on1: var ag13 = 1; break; case on2: var ag13 = 2;}
  switch (ag14x.substr(pos)) {case off: var ag14 = 0; break; case on1: var ag14 = 1; break; case on2: var ag14 = 2;}
  switch (ag15x.substr(pos)) {case off: var ag15 = 0; break; case on1: var ag15 = 1; break; case on2: var ag15 = 2;}
  switch (ag16x.substr(pos)) {case off: var ag16 = 0; break; case on1: var ag16 = 1; break; case on2: var ag16 = 2;}
  switch (ah0x.substr(pos)) {case off: var ah0 = 0; break; case on1: var ah0 = 1; break; case on2: var ah0 = 2;}
  switch (ah1x.substr(pos)) {case off: var ah1 = 0; break; case on1: var ah1 = 1; break; case on2: var ah1 = 2;}
  switch (ah2x.substr(pos)) {case off: var ah2 = 0; break; case on1: var ah2 = 1; break; case on2: var ah2 = 2;}
  switch (ah3x.substr(pos)) {case off: var ah3 = 0; break; case on1: var ah3 = 1; break; case on2: var ah3 = 2;}
  switch (ah4x.substr(pos)) {case off: var ah4 = 0; break; case on1: var ah4 = 1; break; case on2: var ah4 = 2;}
  switch (ah5x.substr(pos)) {case off: var ah5 = 0; break; case on1: var ah5 = 1; break; case on2: var ah5 = 2;}
  switch (ah6x.substr(pos)) {case off: var ah6 = 0; break; case on1: var ah6 = 1; break; case on2: var ah6 = 2;}
  switch (ah7x.substr(pos)) {case off: var ah7 = 0; break; case on1: var ah7 = 1; break; case on2: var ah7 = 2;}
  switch (ah8x.substr(pos)) {case off: var ah8 = 0; break; case on1: var ah8 = 1; break; case on2: var ah8 = 2;}
  switch (ah9x.substr(pos)) {case off: var ah9 = 0; break; case on1: var ah9 = 1; break; case on2: var ah9 = 2;}
  switch (ah10x.substr(pos)) {case off: var ah10 = 0; break; case on1: var ah10 = 1; break; case on2: var ah10 = 2;}
  switch (ah11x.substr(pos)) {case off: var ah11 = 0; break; case on1: var ah11 = 1; break; case on2: var ah11 = 2;}
  switch (ah12x.substr(pos)) {case off: var ah12 = 0; break; case on1: var ah12 = 1; break; case on2: var ah12 = 2;}
  switch (ah13x.substr(pos)) {case off: var ah13 = 0; break; case on1: var ah13 = 1; break; case on2: var ah13 = 2;}
  switch (ah14x.substr(pos)) {case off: var ah14 = 0; break; case on1: var ah14 = 1; break; case on2: var ah14 = 2;}
  switch (ah15x.substr(pos)) {case off: var ah15 = 0; break; case on1: var ah15 = 1; break; case on2: var ah15 = 2;}
  switch (ah16x.substr(pos)) {case off: var ah16 = 0; break; case on1: var ah16 = 1; break; case on2: var ah16 = 2;}
  switch (ai0x.substr(pos)) {case off: var ai0 = 0; break; case on1: var ai0 = 1; break; case on2: var ai0 = 2;}
  switch (ai1x.substr(pos)) {case off: var ai1 = 0; break; case on1: var ai1 = 1; break; case on2: var ai1 = 2;}
  switch (ai2x.substr(pos)) {case off: var ai2 = 0; break; case on1: var ai2 = 1; break; case on2: var ai2 = 2;}
  switch (ai3x.substr(pos)) {case off: var ai3 = 0; break; case on1: var ai3 = 1; break; case on2: var ai3 = 2;}
  switch (ai4x.substr(pos)) {case off: var ai4 = 0; break; case on1: var ai4 = 1; break; case on2: var ai4 = 2;}
  switch (ai5x.substr(pos)) {case off: var ai5 = 0; break; case on1: var ai5 = 1; break; case on2: var ai5 = 2;}
  switch (ai6x.substr(pos)) {case off: var ai6 = 0; break; case on1: var ai6 = 1; break; case on2: var ai6 = 2;}
  switch (ai7x.substr(pos)) {case off: var ai7 = 0; break; case on1: var ai7 = 1; break; case on2: var ai7 = 2;}
  switch (ai8x.substr(pos)) {case off: var ai8 = 0; break; case on1: var ai8 = 1; break; case on2: var ai8 = 2;}
  switch (ai9x.substr(pos)) {case off: var ai9 = 0; break; case on1: var ai9 = 1; break; case on2: var ai9 = 2;}
  switch (ai10x.substr(pos)) {case off: var ai10 = 0; break; case on1: var ai10 = 1; break; case on2: var ai10 = 2;}
  switch (ai11x.substr(pos)) {case off: var ai11 = 0; break; case on1: var ai11 = 1; break; case on2: var ai11 = 2;}
  switch (ai12x.substr(pos)) {case off: var ai12 = 0; break; case on1: var ai12 = 1; break; case on2: var ai12 = 2;}
  switch (ai13x.substr(pos)) {case off: var ai13 = 0; break; case on1: var ai13 = 1; break; case on2: var ai13 = 2;}
  switch (ai14x.substr(pos)) {case off: var ai14 = 0; break; case on1: var ai14 = 1; break; case on2: var ai14 = 2;}
  switch (aj0x.substr(pos)) {case off: var aj0 = 0; break; case on1: var aj0 = 1; break; case on2: var aj0 = 2;}
  switch (aj1x.substr(pos)) {case off: var aj1 = 0; break; case on1: var aj1 = 1; break; case on2: var aj1 = 2;}
  switch (aj2x.substr(pos)) {case off: var aj2 = 0; break; case on1: var aj2 = 1; break; case on2: var aj2 = 2;}
  switch (aj3x.substr(pos)) {case off: var aj3 = 0; break; case on1: var aj3 = 1; break; case on2: var aj3 = 2;}
  switch (aj4x.substr(pos)) {case off: var aj4 = 0; break; case on1: var aj4 = 1; break; case on2: var aj4 = 2;}
  switch (aj5x.substr(pos)) {case off: var aj5 = 0; break; case on1: var aj5 = 1; break; case on2: var aj5 = 2;}
  switch (aj6x.substr(pos)) {case off: var aj6 = 0; break; case on1: var aj6 = 1; break; case on2: var aj6 = 2;}
  switch (aj7x.substr(pos)) {case off: var aj7 = 0; break; case on1: var aj7 = 1; break; case on2: var aj7 = 2;}
  switch (aj8x.substr(pos)) {case off: var aj8 = 0; break; case on1: var aj8 = 1; break; case on2: var aj8 = 2;}
  switch (aj9x.substr(pos)) {case off: var aj9 = 0; break; case on1: var aj9 = 1; break; case on2: var aj9 = 2;}
  switch (aj10x.substr(pos)) {case off: var aj10 = 0; break; case on1: var aj10 = 1; break; case on2: var aj10 = 2;}
  switch (aj11x.substr(pos)) {case off: var aj11 = 0; break; case on1: var aj11 = 1; break; case on2: var aj11 = 2;}
  switch (aj12x.substr(pos)) {case off: var aj12 = 0; break; case on1: var aj12 = 1; break; case on2: var aj12 = 2;}
  switch (aj13x.substr(pos)) {case off: var aj13 = 0; break; case on1: var aj13 = 1; break; case on2: var aj13 = 2;}
  switch (aj14x.substr(pos)) {case off: var aj14 = 0; break; case on1: var aj14 = 1; break; case on2: var aj14 = 2;}
  switch (aj15x.substr(pos)) {case off: var aj15 = 0; break; case on1: var aj15 = 1; break; case on2: var aj15 = 2;}
  switch (aj16x.substr(pos)) {case off: var aj16 = 0; break; case on1: var aj16 = 1; break; case on2: var aj16 = 2;}
  var arrayae = [ae0,ae1,ae2,ae3,ae4,ae5,ae6,ae7,ae8,ae9,ae10,ae11,ae12,ae13,ae14,ae15,ae16,ae17].join("");
  var arrayaf = [af0,af1,af2,af3,af4,af5,af6,af7,af8,af9,af10,af11,af12,af13,af14,af15,af16].join("");
  var arrayag = [ag0,ag1,ag2,ag3,ag4,ag5,ag6,ag7,ag8,ag9,ag10,ag11,ag12,ag13,ag14,ag15,ag16].join("");
  var arrayah = [ah0,ah1,ah2,ah3,ah4,ah5,ah6,ah7,ah8,ah9,ah10,ah11,ah12,ah13,ah14,ah15,ah16].join("");
  var arrayai = [ai0,ai1,ai2,ai3,ai4,ai5,ai6,ai7,ai8,ai9,ai10,ai11,ai12,ai13,ai14].join("");
  var arrayaj = [aj0,aj1,aj2,aj3,aj4,aj5,aj6,aj7,aj8,aj9,aj10,aj11,aj12,aj13,aj14,aj15,aj16].join("");
  switch (arrayae.search(1)) {case -1: sh0 = "-"; break; case 0: sh0 = "A"; break;case 1: sh0 = "B"; break;case 2: sh0 = "C"; break;case 3: sh0 = "D"; break;case 4: sh0 = "E"; break;case 5: sh0 = "F"; break;case 6: sh0 = "G"; break;case 7: sh0 = "H"; break;case 8: sh0 = "I"; break;case 9: sh0 = "J"; break;case 10: sh0 = "K"; break;case 11: sh0 = "L"; break;case 12: sh0 = "M"; break;case 13: sh0 = "N"; break;case 14: sh0 = "O"; break;case 15: sh0 = "P"; break;case 16: sh0 = "Q"; break;case 17: sh0 = "R"; break;}
  switch (arrayae.search(2)) {case -1: sh1 = "-"; break; case 0: sh1 = "A"; break;case 1: sh1 = "B"; break;case 2: sh1 = "C"; break;case 3: sh1 = "D"; break;case 4: sh1 = "E"; break;case 5: sh1 = "F"; break;case 6: sh1 = "G"; break;case 7: sh1 = "H"; break;case 8: sh1 = "I"; break;case 9: sh1 = "J"; break;case 10: sh1 = "K"; break;case 11: sh1 = "L"; break;case 12: sh1 = "M"; break;case 13: sh1 = "N"; break;case 14: sh1 = "O"; break;case 15: sh1 = "P"; break;case 16: sh1 = "Q"; break;case 17: sh1 = "R"; break;}
  switch (arrayaf.search(1)) {case -1: sh2 = "-"; break; case 0: sh2 = "A"; break;case 1: sh2 = "B"; break;case 2: sh2 = "C"; break;case 3: sh2 = "D"; break;case 4: sh2 = "E"; break;case 5: sh2 = "F"; break;case 6: sh2 = "G"; break;case 7: sh2 = "H"; break;case 8: sh2 = "I"; break;case 9: sh2 = "J"; break;case 10: sh2 = "K"; break;case 11: sh2 = "L"; break;case 12: sh2 = "M"; break;case 13: sh2 = "N"; break;case 14: sh2 = "O"; break;case 15: sh2 = "P"; break;case 16: sh2 = "Q"; break;}
  switch (arrayaf.search(2)) {case -1: sh3 = "-"; break; case 0: sh3 = "A"; break;case 1: sh3 = "B"; break;case 2: sh3 = "C"; break;case 3: sh3 = "D"; break;case 4: sh3 = "E"; break;case 5: sh3 = "F"; break;case 6: sh3 = "G"; break;case 7: sh3 = "H"; break;case 8: sh3 = "I"; break;case 9: sh3 = "J"; break;case 10: sh3 = "K"; break;case 11: sh3 = "L"; break;case 12: sh3 = "M"; break;case 13: sh3 = "N"; break;case 14: sh3 = "O"; break;case 15: sh3 = "P"; break;case 16: sh3 = "Q"; break;}
  switch (arrayag.search(1)) {case -1: sh4 = "-"; break; case 0: sh4 = "A"; break;case 1: sh4 = "B"; break;case 2: sh4 = "C"; break;case 3: sh4 = "D"; break;case 4: sh4 = "E"; break;case 5: sh4 = "F"; break;case 6: sh4 = "G"; break;case 7: sh4 = "H"; break;case 8: sh4 = "I"; break;case 9: sh4 = "J"; break;case 10: sh4 = "K"; break;case 11: sh4 = "L"; break;case 12: sh4 = "M"; break;case 13: sh4 = "N"; break;case 14: sh4 = "O"; break;case 15: sh4 = "P"; break;case 16: sh4 = "Q"; break;}
  switch (arrayag.search(2)) {case -1: sh5 = "-"; break; case 0: sh5 = "A"; break;case 1: sh5 = "B"; break;case 2: sh5 = "C"; break;case 3: sh5 = "D"; break;case 4: sh5 = "E"; break;case 5: sh5 = "F"; break;case 6: sh5 = "G"; break;case 7: sh5 = "H"; break;case 8: sh5 = "I"; break;case 9: sh5 = "J"; break;case 10: sh5 = "K"; break;case 11: sh5 = "L"; break;case 12: sh5 = "M"; break;case 13: sh5 = "N"; break;case 14: sh5 = "O"; break;case 15: sh5 = "P"; break;case 16: sh5 = "Q"; break;}
  switch (arrayah.search(1)) {case -1: sh6 = "-"; break; case 0: sh6 = "A"; break;case 1: sh6 = "B"; break;case 2: sh6 = "C"; break;case 3: sh6 = "D"; break;case 4: sh6 = "E"; break;case 5: sh6 = "F"; break;case 6: sh6 = "G"; break;case 7: sh6 = "H"; break;case 8: sh6 = "I"; break;case 9: sh6 = "J"; break;case 10: sh6 = "K"; break;case 11: sh6 = "L"; break;case 12: sh6 = "M"; break;case 13: sh6 = "N"; break;case 14: sh6 = "O"; break;case 15: sh6 = "P"; break;case 16: sh6 = "Q"; break;}
  switch (arrayah.search(2)) {case -1: sh7 = "-"; break; case 0: sh7 = "A"; break;case 1: sh7 = "B"; break;case 2: sh7 = "C"; break;case 3: sh7 = "D"; break;case 4: sh7 = "E"; break;case 5: sh7 = "F"; break;case 6: sh7 = "G"; break;case 7: sh7 = "H"; break;case 8: sh7 = "I"; break;case 9: sh7 = "J"; break;case 10: sh7 = "K"; break;case 11: sh7 = "L"; break;case 12: sh7 = "M"; break;case 13: sh7 = "N"; break;case 14: sh7 = "O"; break;case 15: sh7 = "P"; break;case 16: sh7 = "Q"; break;}
  switch (arrayai.search(1)) {case -1: sh8 = "-"; break; case 0: sh8 = "A"; break;case 1: sh8 = "B"; break;case 2: sh8 = "C"; break;case 3: sh8 = "D"; break;case 4: sh8 = "E"; break;case 5: sh8 = "F"; break;case 6: sh8 = "G"; break;case 7: sh8 = "H"; break;case 8: sh8 = "I"; break;case 9: sh8 = "J"; break;case 10: sh8 = "K"; break;case 11: sh8 = "L"; break;case 12: sh8 = "M"; break;case 13: sh8 = "N"; break;case 14: sh8 = "O"; break;}
  switch (arrayai.search(2)) {case -1: sh9 = "-"; break; case 0: sh9 = "A"; break;case 1: sh9 = "B"; break;case 2: sh9 = "C"; break;case 3: sh9 = "D"; break;case 4: sh9 = "E"; break;case 5: sh9 = "F"; break;case 6: sh9 = "G"; break;case 7: sh9 = "H"; break;case 8: sh9 = "I"; break;case 9: sh9 = "J"; break;case 10: sh9 = "K"; break;case 11: sh9 = "L"; break;case 12: sh9 = "M"; break;case 13: sh9 = "N"; break;case 14: sh9 = "O"; break;}
  switch (arrayaj.search(1)) {case -1: sh10 = "-"; break; case 0: sh10 = "A"; break;case 1: sh10 = "B"; break;case 2: sh10 = "C"; break;case 3: sh10 = "D"; break;case 4: sh10 = "E"; break;case 5: sh10 = "F"; break;case 6: sh10 = "G"; break;case 7: sh10 = "H"; break;case 8: sh10 = "I"; break;case 9: sh10 = "J"; break;case 10: sh10 = "K"; break;case 11: sh10 = "L"; break;case 12: sh10 = "M"; break;case 13: sh10 = "N"; break;case 14: sh10 = "O"; break;case 15: sh10 = "P"; break;case 16: sh10 = "Q"; break;}
  switch (arrayaj.search(2)) {case -1: sh11 = "-"; break; case 0: sh11 = "A"; break;case 1: sh11 = "B"; break;case 2: sh11 = "C"; break;case 3: sh11 = "D"; break;case 4: sh11 = "E"; break;case 5: sh11 = "F"; break;case 6: sh11 = "G"; break;case 7: sh11 = "H"; break;case 8: sh11 = "I"; break;case 9: sh11 = "J"; break;case 10: sh11 = "K"; break;case 11: sh11 = "L"; break;case 12: sh11 = "M"; break;case 13: sh11 = "N"; break;case 14: sh11 = "O"; break;case 15: sh11 = "P"; break;case 16: sh11 = "Q"; break;}
  document.getElementById("sharemarks5").value = "https://www.retahgaming.com/ffxiv/hunttraintool.html?m="+[exp,sh0,sh1,sh2,sh3,sh4,sh5,sh6,sh7,sh8,sh9,sh10,sh11].join("");
}

function sharemarks6() {
  var exp = 6;
  var off = "/ffxiv/images/offcircle.png";
  var on1 = "/ffxiv/images/on1circle.png";
  var on2 = "/ffxiv/images/on2circle.png";
  var ak0x = document.getElementById("ak0").src;
  var ak1x = document.getElementById("ak1").src;
  var ak2x = document.getElementById("ak2").src;
  var ak3x = document.getElementById("ak3").src;
  var ak4x = document.getElementById("ak4").src;
  var ak5x = document.getElementById("ak5").src;
  var ak6x = document.getElementById("ak6").src;
  var ak7x = document.getElementById("ak7").src;
  var ak8x = document.getElementById("ak8").src;
  var ak9x = document.getElementById("ak9").src;
  var al0x = document.getElementById("al0").src;
  var al1x = document.getElementById("al1").src;
  var al2x = document.getElementById("al2").src;
  var al3x = document.getElementById("al3").src;
  var al4x = document.getElementById("al4").src;
  var al5x = document.getElementById("al5").src;
  var al6x = document.getElementById("al6").src;
  var al7x = document.getElementById("al7").src;
  var al8x = document.getElementById("al8").src;
  var am0x = document.getElementById("am0").src;
  var am1x = document.getElementById("am1").src;
  var am2x = document.getElementById("am2").src;
  var am3x = document.getElementById("am3").src;
  var am4x = document.getElementById("am4").src;
  var am5x = document.getElementById("am5").src;
  var am6x = document.getElementById("am6").src;
  var am7x = document.getElementById("am7").src;
  var am8x = document.getElementById("am8").src;
  var an0x = document.getElementById("an0").src;
  var an1x = document.getElementById("an1").src;
  var an2x = document.getElementById("an2").src;
  var an3x = document.getElementById("an3").src;
  var an4x = document.getElementById("an4").src;
  var an5x = document.getElementById("an5").src;
  var an6x = document.getElementById("an6").src;
  var an7x = document.getElementById("an7").src;
  var an8x = document.getElementById("an8").src;
  var an9x = document.getElementById("an9").src;
  var ao0x = document.getElementById("ao0").src;
  var ao1x = document.getElementById("ao1").src;
  var ao2x = document.getElementById("ao2").src;
  var ao3x = document.getElementById("ao3").src;
  var ao4x = document.getElementById("ao4").src;
  var ao5x = document.getElementById("ao5").src;
  var ao6x = document.getElementById("ao6").src;
  var ao7x = document.getElementById("ao7").src;
  var ao8x = document.getElementById("ao8").src;
  var ao9x = document.getElementById("ao9").src;
  var ao10x = document.getElementById("ao10").src;
  var ap0x = document.getElementById("ap0").src;
  var ap1x = document.getElementById("ap1").src;
  var ap2x = document.getElementById("ap2").src;
  var ap3x = document.getElementById("ap3").src;
  var ap4x = document.getElementById("ap4").src;
  var ap5x = document.getElementById("ap5").src;
  var ap6x = document.getElementById("ap6").src;
  var ap7x = document.getElementById("ap7").src;
  var ap8x = document.getElementById("ap8").src;
  var offc = document.getElementById("offc").src;
  var pos = offc.search("/ffxiv/images/");
  switch (ak0x.substr(pos)) {case off: var ak0 = 0; break; case on1: var ak0 = 1; break; case on2: var ak0 = 2;}
  switch (ak1x.substr(pos)) {case off: var ak1 = 0; break; case on1: var ak1 = 1; break; case on2: var ak1 = 2;}
  switch (ak2x.substr(pos)) {case off: var ak2 = 0; break; case on1: var ak2 = 1; break; case on2: var ak2 = 2;}
  switch (ak3x.substr(pos)) {case off: var ak3 = 0; break; case on1: var ak3 = 1; break; case on2: var ak3 = 2;}
  switch (ak4x.substr(pos)) {case off: var ak4 = 0; break; case on1: var ak4 = 1; break; case on2: var ak4 = 2;}
  switch (ak5x.substr(pos)) {case off: var ak5 = 0; break; case on1: var ak5 = 1; break; case on2: var ak5 = 2;}
  switch (ak6x.substr(pos)) {case off: var ak6 = 0; break; case on1: var ak6 = 1; break; case on2: var ak6 = 2;}
  switch (ak7x.substr(pos)) {case off: var ak7 = 0; break; case on1: var ak7 = 1; break; case on2: var ak7 = 2;}
  switch (ak8x.substr(pos)) {case off: var ak8 = 0; break; case on1: var ak8 = 1; break; case on2: var ak8 = 2;}
  switch (ak9x.substr(pos)) {case off: var ak9 = 0; break; case on1: var ak9 = 1; break; case on2: var ak9 = 2;}
  switch (al0x.substr(pos)) {case off: var al0 = 0; break; case on1: var al0 = 1; break; case on2: var al0 = 2;}
  switch (al1x.substr(pos)) {case off: var al1 = 0; break; case on1: var al1 = 1; break; case on2: var al1 = 2;}
  switch (al2x.substr(pos)) {case off: var al2 = 0; break; case on1: var al2 = 1; break; case on2: var al2 = 2;}
  switch (al3x.substr(pos)) {case off: var al3 = 0; break; case on1: var al3 = 1; break; case on2: var al3 = 2;}
  switch (al4x.substr(pos)) {case off: var al4 = 0; break; case on1: var al4 = 1; break; case on2: var al4 = 2;}
  switch (al5x.substr(pos)) {case off: var al5 = 0; break; case on1: var al5 = 1; break; case on2: var al5 = 2;}
  switch (al6x.substr(pos)) {case off: var al6 = 0; break; case on1: var al6 = 1; break; case on2: var al6 = 2;}
  switch (al7x.substr(pos)) {case off: var al7 = 0; break; case on1: var al7 = 1; break; case on2: var al7 = 2;}
  switch (al8x.substr(pos)) {case off: var al8 = 0; break; case on1: var al8 = 1; break; case on2: var al8 = 2;}
  switch (am0x.substr(pos)) {case off: var am0 = 0; break; case on1: var am0 = 1; break; case on2: var am0 = 2;}
  switch (am1x.substr(pos)) {case off: var am1 = 0; break; case on1: var am1 = 1; break; case on2: var am1 = 2;}
  switch (am2x.substr(pos)) {case off: var am2 = 0; break; case on1: var am2 = 1; break; case on2: var am2 = 2;}
  switch (am3x.substr(pos)) {case off: var am3 = 0; break; case on1: var am3 = 1; break; case on2: var am3 = 2;}
  switch (am4x.substr(pos)) {case off: var am4 = 0; break; case on1: var am4 = 1; break; case on2: var am4 = 2;}
  switch (am5x.substr(pos)) {case off: var am5 = 0; break; case on1: var am5 = 1; break; case on2: var am5 = 2;}
  switch (am6x.substr(pos)) {case off: var am6 = 0; break; case on1: var am6 = 1; break; case on2: var am6 = 2;}
  switch (am7x.substr(pos)) {case off: var am7 = 0; break; case on1: var am7 = 1; break; case on2: var am7 = 2;}
  switch (am8x.substr(pos)) {case off: var am8 = 0; break; case on1: var am8 = 1; break; case on2: var am8 = 2;}
  switch (an0x.substr(pos)) {case off: var an0 = 0; break; case on1: var an0 = 1; break; case on2: var an0 = 2;}
  switch (an1x.substr(pos)) {case off: var an1 = 0; break; case on1: var an1 = 1; break; case on2: var an1 = 2;}
  switch (an2x.substr(pos)) {case off: var an2 = 0; break; case on1: var an2 = 1; break; case on2: var an2 = 2;}
  switch (an3x.substr(pos)) {case off: var an3 = 0; break; case on1: var an3 = 1; break; case on2: var an3 = 2;}
  switch (an4x.substr(pos)) {case off: var an4 = 0; break; case on1: var an4 = 1; break; case on2: var an4 = 2;}
  switch (an5x.substr(pos)) {case off: var an5 = 0; break; case on1: var an5 = 1; break; case on2: var an5 = 2;}
  switch (an6x.substr(pos)) {case off: var an6 = 0; break; case on1: var an6 = 1; break; case on2: var an6 = 2;}
  switch (an7x.substr(pos)) {case off: var an7 = 0; break; case on1: var an7 = 1; break; case on2: var an7 = 2;}
  switch (an8x.substr(pos)) {case off: var an8 = 0; break; case on1: var an8 = 1; break; case on2: var an8 = 2;}
  switch (an9x.substr(pos)) {case off: var an9 = 0; break; case on1: var an9 = 1; break; case on2: var an9 = 2;}
  switch (ao0x.substr(pos)) {case off: var ao0 = 0; break; case on1: var ao0 = 1; break; case on2: var ao0 = 2;}
  switch (ao1x.substr(pos)) {case off: var ao1 = 0; break; case on1: var ao1 = 1; break; case on2: var ao1 = 2;}
  switch (ao2x.substr(pos)) {case off: var ao2 = 0; break; case on1: var ao2 = 1; break; case on2: var ao2 = 2;}
  switch (ao3x.substr(pos)) {case off: var ao3 = 0; break; case on1: var ao3 = 1; break; case on2: var ao3 = 2;}
  switch (ao4x.substr(pos)) {case off: var ao4 = 0; break; case on1: var ao4 = 1; break; case on2: var ao4 = 2;}
  switch (ao5x.substr(pos)) {case off: var ao5 = 0; break; case on1: var ao5 = 1; break; case on2: var ao5 = 2;}
  switch (ao6x.substr(pos)) {case off: var ao6 = 0; break; case on1: var ao6 = 1; break; case on2: var ao6 = 2;}
  switch (ao7x.substr(pos)) {case off: var ao7 = 0; break; case on1: var ao7 = 1; break; case on2: var ao7 = 2;}
  switch (ao8x.substr(pos)) {case off: var ao8 = 0; break; case on1: var ao8 = 1; break; case on2: var ao8 = 2;}
  switch (ao9x.substr(pos)) {case off: var ao9 = 0; break; case on1: var ao9 = 1; break; case on2: var ao9 = 2;}
  switch (ao10x.substr(pos)) {case off: var ao10 = 0; break; case on1: var ao10 = 1; break; case on2: var ao10 = 2;}
  switch (ap0x.substr(pos)) {case off: var ap0 = 0; break; case on1: var ap0 = 1; break; case on2: var ap0 = 2;}
  switch (ap1x.substr(pos)) {case off: var ap1 = 0; break; case on1: var ap1 = 1; break; case on2: var ap1 = 2;}
  switch (ap2x.substr(pos)) {case off: var ap2 = 0; break; case on1: var ap2 = 1; break; case on2: var ap2 = 2;}
  switch (ap3x.substr(pos)) {case off: var ap3 = 0; break; case on1: var ap3 = 1; break; case on2: var ap3 = 2;}
  switch (ap4x.substr(pos)) {case off: var ap4 = 0; break; case on1: var ap4 = 1; break; case on2: var ap4 = 2;}
  switch (ap5x.substr(pos)) {case off: var ap5 = 0; break; case on1: var ap5 = 1; break; case on2: var ap5 = 2;}
  switch (ap6x.substr(pos)) {case off: var ap6 = 0; break; case on1: var ap6 = 1; break; case on2: var ap6 = 2;}
  switch (ap7x.substr(pos)) {case off: var ap7 = 0; break; case on1: var ap7 = 1; break; case on2: var ap7 = 2;}
  switch (ap8x.substr(pos)) {case off: var ap8 = 0; break; case on1: var ap8 = 1; break; case on2: var ap8 = 2;}
  var arrayak = [ak0,ak1,ak2,ak3,ak4,ak5,ak6,ak7,ak8,ak9].join("");
  var arrayal = [al0,al1,al2,al3,al4,al5,al6,al7,al8].join("");
  var arrayam = [am0,am1,am2,am3,am4,am5,am6,am7,am8].join("");
  var arrayan = [an0,an1,an2,an3,an4,an5,an6,an7,an8,an9].join("");
  var arrayao = [ao0,ao1,ao2,ao3,ao4,ao5,ao6,ao7,ao8,ao9,ao10].join("");
  var arrayap = [ap0,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8].join("");
  switch (arrayak.search(1)) {case -1: sh0 = "-"; break; case 0: sh0 = "A"; break;case 1: sh0 = "B"; break;case 2: sh0 = "C"; break;case 3: sh0 = "D"; break;case 4: sh0 = "E"; break;case 5: sh0 = "F"; break;case 6: sh0 = "G"; break;case 7: sh0 = "H"; break;case 8: sh0 = "I"; break;case 9: sh0 = "J"; break;}
  switch (arrayak.search(2)) {case -1: sh1 = "-"; break; case 0: sh1 = "A"; break;case 1: sh1 = "B"; break;case 2: sh1 = "C"; break;case 3: sh1 = "D"; break;case 4: sh1 = "E"; break;case 5: sh1 = "F"; break;case 6: sh1 = "G"; break;case 7: sh1 = "H"; break;case 8: sh1 = "I"; break;case 9: sh1 = "J"; break;}
  switch (arrayal.search(1)) {case -1: sh2 = "-"; break; case 0: sh2 = "A"; break;case 1: sh2 = "B"; break;case 2: sh2 = "C"; break;case 3: sh2 = "D"; break;case 4: sh2 = "E"; break;case 5: sh2 = "F"; break;case 6: sh2 = "G"; break;case 7: sh2 = "H"; break;case 8: sh2 = "I"; break;}
  switch (arrayal.search(2)) {case -1: sh3 = "-"; break; case 0: sh3 = "A"; break;case 1: sh3 = "B"; break;case 2: sh3 = "C"; break;case 3: sh3 = "D"; break;case 4: sh3 = "E"; break;case 5: sh3 = "F"; break;case 6: sh3 = "G"; break;case 7: sh3 = "H"; break;case 8: sh3 = "I"; break;}
  switch (arrayam.search(1)) {case -1: sh4 = "-"; break; case 0: sh4 = "A"; break;case 1: sh4 = "B"; break;case 2: sh4 = "C"; break;case 3: sh4 = "D"; break;case 4: sh4 = "E"; break;case 5: sh4 = "F"; break;case 6: sh4 = "G"; break;case 7: sh4 = "H"; break;case 8: sh4 = "I"; break;}
  switch (arrayam.search(2)) {case -1: sh5 = "-"; break; case 0: sh5 = "A"; break;case 1: sh5 = "B"; break;case 2: sh5 = "C"; break;case 3: sh5 = "D"; break;case 4: sh5 = "E"; break;case 5: sh5 = "F"; break;case 6: sh5 = "G"; break;case 7: sh5 = "H"; break;case 8: sh5 = "I"; break;}
  switch (arrayan.search(1)) {case -1: sh6 = "-"; break; case 0: sh6 = "A"; break;case 1: sh6 = "B"; break;case 2: sh6 = "C"; break;case 3: sh6 = "D"; break;case 4: sh6 = "E"; break;case 5: sh6 = "F"; break;case 6: sh6 = "G"; break;case 7: sh6 = "H"; break;case 8: sh6 = "I"; break;case 9: sh6 = "J"; break;}
  switch (arrayan.search(2)) {case -1: sh7 = "-"; break; case 0: sh7 = "A"; break;case 1: sh7 = "B"; break;case 2: sh7 = "C"; break;case 3: sh7 = "D"; break;case 4: sh7 = "E"; break;case 5: sh7 = "F"; break;case 6: sh7 = "G"; break;case 7: sh7 = "H"; break;case 8: sh7 = "I"; break;case 9: sh7 = "J"; break;}
  switch (arrayao.search(1)) {case -1: sh8 = "-"; break; case 0: sh8 = "A"; break;case 1: sh8 = "B"; break;case 2: sh8 = "C"; break;case 3: sh8 = "D"; break;case 4: sh8 = "E"; break;case 5: sh8 = "F"; break;case 6: sh8 = "G"; break;case 7: sh8 = "H"; break;case 8: sh8 = "I"; break;case 9: sh8 = "J"; break;case 10: sh8 = "K"; break;}
  switch (arrayao.search(2)) {case -1: sh9 = "-"; break; case 0: sh9 = "A"; break;case 1: sh9 = "B"; break;case 2: sh9 = "C"; break;case 3: sh9 = "D"; break;case 4: sh9 = "E"; break;case 5: sh9 = "F"; break;case 6: sh9 = "G"; break;case 7: sh9 = "H"; break;case 8: sh9 = "I"; break;case 9: sh9 = "J"; break;case 10: sh9 = "K"; break;}
  switch (arrayap.search(1)) {case -1: sh10 = "-"; break; case 0: sh10 = "A"; break;case 1: sh10 = "B"; break;case 2: sh10 = "C"; break;case 3: sh10 = "D"; break;case 4: sh10 = "E"; break;case 5: sh10 = "F"; break;case 6: sh10 = "G"; break;case 7: sh10 = "H"; break;case 8: sh10 = "I"; break;}
  switch (arrayap.search(2)) {case -1: sh11 = "-"; break; case 0: sh11 = "A"; break;case 1: sh11 = "B"; break;case 2: sh11 = "C"; break;case 3: sh11 = "D"; break;case 4: sh11 = "E"; break;case 5: sh11 = "F"; break;case 6: sh11 = "G"; break;case 7: sh11 = "H"; break;case 8: sh11 = "I"; break;}
  document.getElementById("sharemarks6").value = "https://www.retahgaming.com/ffxiv/hunttraintool.html?m="+[exp,sh0,sh1,sh2,sh3,sh4,sh5,sh6,sh7,sh8,sh9,sh10,sh11].join("");
}

function codeimport(load){
  //var load = document.getElementById("codeimport").value;
  var off = document.getElementById("offc").src;
  var on1 = document.getElementById("on1c").src;
  var on2 = document.getElementById("on2c").src;
  var exp = load.charAt(0);
  var sh0 = load.charAt(1);
  var sh1 = load.charAt(2);
  var sh2 = load.charAt(3);
  var sh3 = load.charAt(4);
  var sh4 = load.charAt(5);
  var sh5 = load.charAt(6);
  var sh6 = load.charAt(7);
  var sh7 = load.charAt(8);
  var sh8 = load.charAt(9);
  var sh9 = load.charAt(10);
  var sh10 = load.charAt(11);
  var sh11 = load.charAt(12);
  if (exp == 5) {
    document.getElementById("shbbtn").style.borderColor = "#ccc";
    document.getElementById("endbtn").style.borderColor = "#666";
    document.getElementById("httshb").style.display = "block";
    document.getElementById("httend").style.display = "none";
    document.getElementById("ae0").src = off;
    document.getElementById("ae1").src = off;
    document.getElementById("ae2").src = off;
    document.getElementById("ae3").src = off;
    document.getElementById("ae4").src = off;
    document.getElementById("ae5").src = off;
    document.getElementById("ae6").src = off;
    document.getElementById("ae7").src = off;
    document.getElementById("ae8").src = off;
    document.getElementById("ae9").src = off;
    document.getElementById("ae10").src = off;
    document.getElementById("ae11").src = off;
    document.getElementById("ae12").src = off;
    document.getElementById("ae13").src = off;
    document.getElementById("ae14").src = off;
    document.getElementById("ae15").src = off;
    document.getElementById("ae16").src = off;
    document.getElementById("ae17").src = off;
    document.getElementById("af0").src = off;
    document.getElementById("af1").src = off;
    document.getElementById("af2").src = off;
    document.getElementById("af3").src = off;
    document.getElementById("af4").src = off;
    document.getElementById("af5").src = off;
    document.getElementById("af6").src = off;
    document.getElementById("af7").src = off;
    document.getElementById("af8").src = off;
    document.getElementById("af9").src = off;
    document.getElementById("af10").src = off;
    document.getElementById("af11").src = off;
    document.getElementById("af12").src = off;
    document.getElementById("af13").src = off;
    document.getElementById("af14").src = off;
    document.getElementById("af15").src = off;
    document.getElementById("af16").src = off;
    document.getElementById("ag0").src = off;
    document.getElementById("ag1").src = off;
    document.getElementById("ag2").src = off;
    document.getElementById("ag3").src = off;
    document.getElementById("ag4").src = off;
    document.getElementById("ag5").src = off;
    document.getElementById("ag6").src = off;
    document.getElementById("ag7").src = off;
    document.getElementById("ag8").src = off;
    document.getElementById("ag9").src = off;
    document.getElementById("ag10").src = off;
    document.getElementById("ag11").src = off;
    document.getElementById("ag12").src = off;
    document.getElementById("ag13").src = off;
    document.getElementById("ag14").src = off;
    document.getElementById("ag15").src = off;
    document.getElementById("ag16").src = off;
    document.getElementById("ah0").src = off;
    document.getElementById("ah1").src = off;
    document.getElementById("ah2").src = off;
    document.getElementById("ah3").src = off;
    document.getElementById("ah4").src = off;
    document.getElementById("ah5").src = off;
    document.getElementById("ah6").src = off;
    document.getElementById("ah7").src = off;
    document.getElementById("ah8").src = off;
    document.getElementById("ah9").src = off;
    document.getElementById("ah10").src = off;
    document.getElementById("ah11").src = off;
    document.getElementById("ah12").src = off;
    document.getElementById("ah13").src = off;
    document.getElementById("ah14").src = off;
    document.getElementById("ah15").src = off;
    document.getElementById("ah16").src = off;
    document.getElementById("ai0").src = off;
    document.getElementById("ai1").src = off;
    document.getElementById("ai2").src = off;
    document.getElementById("ai3").src = off;
    document.getElementById("ai4").src = off;
    document.getElementById("ai5").src = off;
    document.getElementById("ai6").src = off;
    document.getElementById("ai7").src = off;
    document.getElementById("ai8").src = off;
    document.getElementById("ai9").src = off;
    document.getElementById("ai10").src = off;
    document.getElementById("ai11").src = off;
    document.getElementById("ai12").src = off;
    document.getElementById("ai13").src = off;
    document.getElementById("ai14").src = off;
    document.getElementById("aj0").src = off;
    document.getElementById("aj1").src = off;
    document.getElementById("aj2").src = off;
    document.getElementById("aj3").src = off;
    document.getElementById("aj4").src = off;
    document.getElementById("aj5").src = off;
    document.getElementById("aj6").src = off;
    document.getElementById("aj7").src = off;
    document.getElementById("aj8").src = off;
    document.getElementById("aj9").src = off;
    document.getElementById("aj10").src = off;
    document.getElementById("aj11").src = off;
    document.getElementById("aj12").src = off;
    document.getElementById("aj13").src = off;
    document.getElementById("aj14").src = off;
    document.getElementById("aj15").src = off;
    document.getElementById("aj16").src = off;
    if (sh0 == "A") {document.getElementById("ae0").src = on1;}
    if (sh0 == "B") {document.getElementById("ae1").src = on1;}
    if (sh0 == "C") {document.getElementById("ae2").src = on1;}
    if (sh0 == "D") {document.getElementById("ae3").src = on1;}
    if (sh0 == "E") {document.getElementById("ae4").src = on1;}
    if (sh0 == "F") {document.getElementById("ae5").src = on1;}
    if (sh0 == "G") {document.getElementById("ae6").src = on1;}
    if (sh0 == "H") {document.getElementById("ae7").src = on1;}
    if (sh0 == "I") {document.getElementById("ae8").src = on1;}
    if (sh0 == "J") {document.getElementById("ae9").src = on1;}
    if (sh0 == "K") {document.getElementById("ae10").src = on1;}
    if (sh0 == "L") {document.getElementById("ae11").src = on1;}
    if (sh0 == "M") {document.getElementById("ae12").src = on1;}
    if (sh0 == "N") {document.getElementById("ae13").src = on1;}
    if (sh0 == "O") {document.getElementById("ae14").src = on1;}
    if (sh0 == "P") {document.getElementById("ae15").src = on1;}
    if (sh0 == "Q") {document.getElementById("ae16").src = on1;}
    if (sh0 == "R") {document.getElementById("ae17").src = on1;}
    if (sh1 == "A") {document.getElementById("ae0").src = on2;}
    if (sh1 == "B") {document.getElementById("ae1").src = on2;}
    if (sh1 == "C") {document.getElementById("ae2").src = on2;}
    if (sh1 == "D") {document.getElementById("ae3").src = on2;}
    if (sh1 == "E") {document.getElementById("ae4").src = on2;}
    if (sh1 == "F") {document.getElementById("ae5").src = on2;}
    if (sh1 == "G") {document.getElementById("ae6").src = on2;}
    if (sh1 == "H") {document.getElementById("ae7").src = on2;}
    if (sh1 == "I") {document.getElementById("ae8").src = on2;}
    if (sh1 == "J") {document.getElementById("ae9").src = on2;}
    if (sh1 == "K") {document.getElementById("ae10").src = on2;}
    if (sh1 == "L") {document.getElementById("ae11").src = on2;}
    if (sh1 == "M") {document.getElementById("ae12").src = on2;}
    if (sh1 == "N") {document.getElementById("ae13").src = on2;}
    if (sh1 == "O") {document.getElementById("ae14").src = on2;}
    if (sh1 == "P") {document.getElementById("ae15").src = on2;}
    if (sh1 == "Q") {document.getElementById("ae16").src = on2;}
    if (sh1 == "R") {document.getElementById("ae17").src = on2;}
    if (sh2 == "A") {document.getElementById("af0").src = on1;}
    if (sh2 == "B") {document.getElementById("af1").src = on1;}
    if (sh2 == "C") {document.getElementById("af2").src = on1;}
    if (sh2 == "D") {document.getElementById("af3").src = on1;}
    if (sh2 == "E") {document.getElementById("af4").src = on1;}
    if (sh2 == "F") {document.getElementById("af5").src = on1;}
    if (sh2 == "G") {document.getElementById("af6").src = on1;}
    if (sh2 == "H") {document.getElementById("af7").src = on1;}
    if (sh2 == "I") {document.getElementById("af8").src = on1;}
    if (sh2 == "J") {document.getElementById("af9").src = on1;}
    if (sh2 == "K") {document.getElementById("af10").src = on1;}
    if (sh2 == "L") {document.getElementById("af11").src = on1;}
    if (sh2 == "M") {document.getElementById("af12").src = on1;}
    if (sh2 == "N") {document.getElementById("af13").src = on1;}
    if (sh2 == "O") {document.getElementById("af14").src = on1;}
    if (sh2 == "P") {document.getElementById("af15").src = on1;}
    if (sh2 == "Q") {document.getElementById("af16").src = on1;}
    if (sh3 == "A") {document.getElementById("af0").src = on2;}
    if (sh3 == "B") {document.getElementById("af1").src = on2;}
    if (sh3 == "C") {document.getElementById("af2").src = on2;}
    if (sh3 == "D") {document.getElementById("af3").src = on2;}
    if (sh3 == "E") {document.getElementById("af4").src = on2;}
    if (sh3 == "F") {document.getElementById("af5").src = on2;}
    if (sh3 == "G") {document.getElementById("af6").src = on2;}
    if (sh3 == "H") {document.getElementById("af7").src = on2;}
    if (sh3 == "I") {document.getElementById("af8").src = on2;}
    if (sh3 == "J") {document.getElementById("af9").src = on2;}
    if (sh3 == "K") {document.getElementById("af10").src = on2;}
    if (sh3 == "L") {document.getElementById("af11").src = on2;}
    if (sh3 == "M") {document.getElementById("af12").src = on2;}
    if (sh3 == "N") {document.getElementById("af13").src = on2;}
    if (sh3 == "O") {document.getElementById("af14").src = on2;}
    if (sh3 == "P") {document.getElementById("af15").src = on2;}
    if (sh3 == "Q") {document.getElementById("af16").src = on2;}
    if (sh4 == "A") {document.getElementById("ag0").src = on1;}
    if (sh4 == "B") {document.getElementById("ag1").src = on1;}
    if (sh4 == "C") {document.getElementById("ag2").src = on1;}
    if (sh4 == "D") {document.getElementById("ag3").src = on1;}
    if (sh4 == "E") {document.getElementById("ag4").src = on1;}
    if (sh4 == "F") {document.getElementById("ag5").src = on1;}
    if (sh4 == "G") {document.getElementById("ag6").src = on1;}
    if (sh4 == "H") {document.getElementById("ag7").src = on1;}
    if (sh4 == "I") {document.getElementById("ag8").src = on1;}
    if (sh4 == "J") {document.getElementById("ag9").src = on1;}
    if (sh4 == "K") {document.getElementById("ag10").src = on1;}
    if (sh4 == "L") {document.getElementById("ag11").src = on1;}
    if (sh4 == "M") {document.getElementById("ag12").src = on1;}
    if (sh4 == "N") {document.getElementById("ag13").src = on1;}
    if (sh4 == "O") {document.getElementById("ag14").src = on1;}
    if (sh4 == "P") {document.getElementById("ag15").src = on1;}
    if (sh4 == "Q") {document.getElementById("ag16").src = on1;}
    if (sh5 == "A") {document.getElementById("ag0").src = on2;}
    if (sh5 == "B") {document.getElementById("ag1").src = on2;}
    if (sh5 == "C") {document.getElementById("ag2").src = on2;}
    if (sh5 == "D") {document.getElementById("ag3").src = on2;}
    if (sh5 == "E") {document.getElementById("ag4").src = on2;}
    if (sh5 == "F") {document.getElementById("ag5").src = on2;}
    if (sh5 == "G") {document.getElementById("ag6").src = on2;}
    if (sh5 == "H") {document.getElementById("ag7").src = on2;}
    if (sh5 == "I") {document.getElementById("ag8").src = on2;}
    if (sh5 == "J") {document.getElementById("ag9").src = on2;}
    if (sh5 == "K") {document.getElementById("ag10").src = on2;}
    if (sh5 == "L") {document.getElementById("ag11").src = on2;}
    if (sh5 == "M") {document.getElementById("ag12").src = on2;}
    if (sh5 == "N") {document.getElementById("ag13").src = on2;}
    if (sh5 == "O") {document.getElementById("ag14").src = on2;}
    if (sh5 == "P") {document.getElementById("ag15").src = on2;}
    if (sh5 == "Q") {document.getElementById("ag16").src = on2;}
    if (sh6 == "A") {document.getElementById("ah0").src = on1;}
    if (sh6 == "B") {document.getElementById("ah1").src = on1;}
    if (sh6 == "C") {document.getElementById("ah2").src = on1;}
    if (sh6 == "D") {document.getElementById("ah3").src = on1;}
    if (sh6 == "E") {document.getElementById("ah4").src = on1;}
    if (sh6 == "F") {document.getElementById("ah5").src = on1;}
    if (sh6 == "G") {document.getElementById("ah6").src = on1;}
    if (sh6 == "H") {document.getElementById("ah7").src = on1;}
    if (sh6 == "I") {document.getElementById("ah8").src = on1;}
    if (sh6 == "J") {document.getElementById("ah9").src = on1;}
    if (sh6 == "K") {document.getElementById("ah10").src = on1;}
    if (sh6 == "L") {document.getElementById("ah11").src = on1;}
    if (sh6 == "M") {document.getElementById("ah12").src = on1;}
    if (sh6 == "N") {document.getElementById("ah13").src = on1;}
    if (sh6 == "O") {document.getElementById("ah14").src = on1;}
    if (sh6 == "P") {document.getElementById("ah15").src = on1;}
    if (sh6 == "Q") {document.getElementById("ah16").src = on1;}
    if (sh7 == "A") {document.getElementById("ah0").src = on2;}
    if (sh7 == "B") {document.getElementById("ah1").src = on2;}
    if (sh7 == "C") {document.getElementById("ah2").src = on2;}
    if (sh7 == "D") {document.getElementById("ah3").src = on2;}
    if (sh7 == "E") {document.getElementById("ah4").src = on2;}
    if (sh7 == "F") {document.getElementById("ah5").src = on2;}
    if (sh7 == "G") {document.getElementById("ah6").src = on2;}
    if (sh7 == "H") {document.getElementById("ah7").src = on2;}
    if (sh7 == "I") {document.getElementById("ah8").src = on2;}
    if (sh7 == "J") {document.getElementById("ah9").src = on2;}
    if (sh7 == "K") {document.getElementById("ah10").src = on2;}
    if (sh7 == "L") {document.getElementById("ah11").src = on2;}
    if (sh7 == "M") {document.getElementById("ah12").src = on2;}
    if (sh7 == "N") {document.getElementById("ah13").src = on2;}
    if (sh7 == "O") {document.getElementById("ah14").src = on2;}
    if (sh7 == "P") {document.getElementById("ah15").src = on2;}
    if (sh7 == "Q") {document.getElementById("ah16").src = on2;}
    if (sh8 == "A") {document.getElementById("ai0").src = on1;}
    if (sh8 == "B") {document.getElementById("ai1").src = on1;}
    if (sh8 == "C") {document.getElementById("ai2").src = on1;}
    if (sh8 == "D") {document.getElementById("ai3").src = on1;}
    if (sh8 == "E") {document.getElementById("ai4").src = on1;}
    if (sh8 == "F") {document.getElementById("ai5").src = on1;}
    if (sh8 == "G") {document.getElementById("ai6").src = on1;}
    if (sh8 == "H") {document.getElementById("ai7").src = on1;}
    if (sh8 == "I") {document.getElementById("ai8").src = on1;}
    if (sh8 == "J") {document.getElementById("ai9").src = on1;}
    if (sh8 == "K") {document.getElementById("ai10").src = on1;}
    if (sh8 == "L") {document.getElementById("ai11").src = on1;}
    if (sh8 == "M") {document.getElementById("ai12").src = on1;}
    if (sh8 == "N") {document.getElementById("ai13").src = on1;}
    if (sh8 == "O") {document.getElementById("ai14").src = on1;}
    if (sh9 == "A") {document.getElementById("ai0").src = on2;}
    if (sh9 == "B") {document.getElementById("ai1").src = on2;}
    if (sh9 == "C") {document.getElementById("ai2").src = on2;}
    if (sh9 == "D") {document.getElementById("ai3").src = on2;}
    if (sh9 == "E") {document.getElementById("ai4").src = on2;}
    if (sh9 == "F") {document.getElementById("ai5").src = on2;}
    if (sh9 == "G") {document.getElementById("ai6").src = on2;}
    if (sh9 == "H") {document.getElementById("ai7").src = on2;}
    if (sh9 == "I") {document.getElementById("ai8").src = on2;}
    if (sh9 == "J") {document.getElementById("ai9").src = on2;}
    if (sh9 == "K") {document.getElementById("ai10").src = on2;}
    if (sh9 == "L") {document.getElementById("ai11").src = on2;}
    if (sh9 == "M") {document.getElementById("ai12").src = on2;}
    if (sh9 == "N") {document.getElementById("ai13").src = on2;}
    if (sh9 == "O") {document.getElementById("ai14").src = on2;}
    if (sh10 == "A") {document.getElementById("aj0").src = on1;}
    if (sh10 == "B") {document.getElementById("aj1").src = on1;}
    if (sh10 == "C") {document.getElementById("aj2").src = on1;}
    if (sh10 == "D") {document.getElementById("aj3").src = on1;}
    if (sh10 == "E") {document.getElementById("aj4").src = on1;}
    if (sh10 == "F") {document.getElementById("aj5").src = on1;}
    if (sh10 == "G") {document.getElementById("aj6").src = on1;}
    if (sh10 == "H") {document.getElementById("aj7").src = on1;}
    if (sh10 == "I") {document.getElementById("aj8").src = on1;}
    if (sh10 == "J") {document.getElementById("aj9").src = on1;}
    if (sh10 == "K") {document.getElementById("aj10").src = on1;}
    if (sh10 == "L") {document.getElementById("aj11").src = on1;}
    if (sh10 == "M") {document.getElementById("aj12").src = on1;}
    if (sh10 == "N") {document.getElementById("aj13").src = on1;}
    if (sh10 == "O") {document.getElementById("aj14").src = on1;}
    if (sh10 == "P") {document.getElementById("aj15").src = on1;}
    if (sh10 == "Q") {document.getElementById("aj16").src = on1;}
    if (sh11 == "A") {document.getElementById("aj0").src = on2;}
    if (sh11 == "B") {document.getElementById("aj1").src = on2;}
    if (sh11 == "C") {document.getElementById("aj2").src = on2;}
    if (sh11 == "D") {document.getElementById("aj3").src = on2;}
    if (sh11 == "E") {document.getElementById("aj4").src = on2;}
    if (sh11 == "F") {document.getElementById("aj5").src = on2;}
    if (sh11 == "G") {document.getElementById("aj6").src = on2;}
    if (sh11 == "H") {document.getElementById("aj7").src = on2;}
    if (sh11 == "I") {document.getElementById("aj8").src = on2;}
    if (sh11 == "J") {document.getElementById("aj9").src = on2;}
    if (sh11 == "K") {document.getElementById("aj10").src = on2;}
    if (sh11 == "L") {document.getElementById("aj11").src = on2;}
    if (sh11 == "M") {document.getElementById("aj12").src = on2;}
    if (sh11 == "N") {document.getElementById("aj13").src = on2;}
    if (sh11 == "O") {document.getElementById("aj14").src = on2;}
    if (sh11 == "P") {document.getElementById("aj15").src = on2;}
    if (sh11 == "Q") {document.getElementById("aj16").src = on2;}
  }  
  if (exp == 6) {
    document.getElementById("endbtn").style.borderColor = "#ccc";
    document.getElementById("shbbtn").style.borderColor = "#666";
    document.getElementById("httend").style.display = "block";
    document.getElementById("httshb").style.display = "none";
    document.getElementById("ak0").src = off;
    document.getElementById("ak1").src = off;
    document.getElementById("ak2").src = off;
    document.getElementById("ak3").src = off;
    document.getElementById("ak4").src = off;
    document.getElementById("ak5").src = off;
    document.getElementById("ak6").src = off;
    document.getElementById("ak7").src = off;
    document.getElementById("ak8").src = off;
    document.getElementById("ak9").src = off;
    document.getElementById("al0").src = off;
    document.getElementById("al1").src = off;
    document.getElementById("al2").src = off;
    document.getElementById("al3").src = off;
    document.getElementById("al4").src = off;
    document.getElementById("al5").src = off;
    document.getElementById("al6").src = off;
    document.getElementById("al7").src = off;
    document.getElementById("al8").src = off;
    document.getElementById("am0").src = off;
    document.getElementById("am1").src = off;
    document.getElementById("am2").src = off;
    document.getElementById("am3").src = off;
    document.getElementById("am4").src = off;
    document.getElementById("am5").src = off;
    document.getElementById("am6").src = off;
    document.getElementById("am7").src = off;
    document.getElementById("am8").src = off;
    document.getElementById("an0").src = off;
    document.getElementById("an1").src = off;
    document.getElementById("an2").src = off;
    document.getElementById("an3").src = off;
    document.getElementById("an4").src = off;
    document.getElementById("an5").src = off;
    document.getElementById("an6").src = off;
    document.getElementById("an7").src = off;
    document.getElementById("an8").src = off;
    document.getElementById("an9").src = off;
    document.getElementById("ao0").src = off;
    document.getElementById("ao1").src = off;
    document.getElementById("ao2").src = off;
    document.getElementById("ao3").src = off;
    document.getElementById("ao4").src = off;
    document.getElementById("ao5").src = off;
    document.getElementById("ao6").src = off;
    document.getElementById("ao7").src = off;
    document.getElementById("ao8").src = off;
    document.getElementById("ao9").src = off;
    document.getElementById("ao10").src = off;
    document.getElementById("ap0").src = off;
    document.getElementById("ap1").src = off;
    document.getElementById("ap2").src = off;
    document.getElementById("ap3").src = off;
    document.getElementById("ap4").src = off;
    document.getElementById("ap5").src = off;
    document.getElementById("ap6").src = off;
    document.getElementById("ap7").src = off;
    document.getElementById("ap8").src = off;
    if (sh0 == "A") {document.getElementById("ak0").src = on1;}
    if (sh0 == "B") {document.getElementById("ak1").src = on1;}
    if (sh0 == "C") {document.getElementById("ak2").src = on1;}
    if (sh0 == "D") {document.getElementById("ak3").src = on1;}
    if (sh0 == "E") {document.getElementById("ak4").src = on1;}
    if (sh0 == "F") {document.getElementById("ak5").src = on1;}
    if (sh0 == "G") {document.getElementById("ak6").src = on1;}
    if (sh0 == "H") {document.getElementById("ak7").src = on1;}
    if (sh0 == "I") {document.getElementById("ak8").src = on1;}
    if (sh0 == "J") {document.getElementById("ak9").src = on1;}
    if (sh1 == "A") {document.getElementById("ak0").src = on2;}
    if (sh1 == "B") {document.getElementById("ak1").src = on2;}
    if (sh1 == "C") {document.getElementById("ak2").src = on2;}
    if (sh1 == "D") {document.getElementById("ak3").src = on2;}
    if (sh1 == "E") {document.getElementById("ak4").src = on2;}
    if (sh1 == "F") {document.getElementById("ak5").src = on2;}
    if (sh1 == "G") {document.getElementById("ak6").src = on2;}
    if (sh1 == "H") {document.getElementById("ak7").src = on2;}
    if (sh1 == "I") {document.getElementById("ak8").src = on2;}
    if (sh1 == "J") {document.getElementById("ak9").src = on2;}
    if (sh2 == "A") {document.getElementById("al0").src = on1;}
    if (sh2 == "B") {document.getElementById("al1").src = on1;}
    if (sh2 == "C") {document.getElementById("al2").src = on1;}
    if (sh2 == "D") {document.getElementById("al3").src = on1;}
    if (sh2 == "E") {document.getElementById("al4").src = on1;}
    if (sh2 == "F") {document.getElementById("al5").src = on1;}
    if (sh2 == "G") {document.getElementById("al6").src = on1;}
    if (sh2 == "H") {document.getElementById("al7").src = on1;}
    if (sh2 == "I") {document.getElementById("al8").src = on1;}
    if (sh3 == "A") {document.getElementById("al0").src = on2;}
    if (sh3 == "B") {document.getElementById("al1").src = on2;}
    if (sh3 == "C") {document.getElementById("al2").src = on2;}
    if (sh3 == "D") {document.getElementById("al3").src = on2;}
    if (sh3 == "E") {document.getElementById("al4").src = on2;}
    if (sh3 == "F") {document.getElementById("al5").src = on2;}
    if (sh3 == "G") {document.getElementById("al6").src = on2;}
    if (sh3 == "H") {document.getElementById("al7").src = on2;}
    if (sh3 == "I") {document.getElementById("al8").src = on2;}
    if (sh4 == "A") {document.getElementById("am0").src = on1;}
    if (sh4 == "B") {document.getElementById("am1").src = on1;}
    if (sh4 == "C") {document.getElementById("am2").src = on1;}
    if (sh4 == "D") {document.getElementById("am3").src = on1;}
    if (sh4 == "E") {document.getElementById("am4").src = on1;}
    if (sh4 == "F") {document.getElementById("am5").src = on1;}
    if (sh4 == "G") {document.getElementById("am6").src = on1;}
    if (sh4 == "H") {document.getElementById("am7").src = on1;}
    if (sh4 == "I") {document.getElementById("am8").src = on1;}
    if (sh5 == "A") {document.getElementById("am0").src = on2;}
    if (sh5 == "B") {document.getElementById("am1").src = on2;}
    if (sh5 == "C") {document.getElementById("am2").src = on2;}
    if (sh5 == "D") {document.getElementById("am3").src = on2;}
    if (sh5 == "E") {document.getElementById("am4").src = on2;}
    if (sh5 == "F") {document.getElementById("am5").src = on2;}
    if (sh5 == "G") {document.getElementById("am6").src = on2;}
    if (sh5 == "H") {document.getElementById("am7").src = on2;}
    if (sh5 == "I") {document.getElementById("am8").src = on2;}
    if (sh6 == "A") {document.getElementById("an0").src = on1;}
    if (sh6 == "B") {document.getElementById("an1").src = on1;}
    if (sh6 == "C") {document.getElementById("an2").src = on1;}
    if (sh6 == "D") {document.getElementById("an3").src = on1;}
    if (sh6 == "E") {document.getElementById("an4").src = on1;}
    if (sh6 == "F") {document.getElementById("an5").src = on1;}
    if (sh6 == "G") {document.getElementById("an6").src = on1;}
    if (sh6 == "H") {document.getElementById("an7").src = on1;}
    if (sh6 == "I") {document.getElementById("an8").src = on1;}
    if (sh6 == "J") {document.getElementById("an9").src = on1;}
    if (sh7 == "A") {document.getElementById("an0").src = on2;}
    if (sh7 == "B") {document.getElementById("an1").src = on2;}
    if (sh7 == "C") {document.getElementById("an2").src = on2;}
    if (sh7 == "D") {document.getElementById("an3").src = on2;}
    if (sh7 == "E") {document.getElementById("an4").src = on2;}
    if (sh7 == "F") {document.getElementById("an5").src = on2;}
    if (sh7 == "G") {document.getElementById("an6").src = on2;}
    if (sh7 == "H") {document.getElementById("an7").src = on2;}
    if (sh7 == "I") {document.getElementById("an8").src = on2;}
    if (sh7 == "J") {document.getElementById("an9").src = on2;}
    if (sh8 == "A") {document.getElementById("ao0").src = on1;}
    if (sh8 == "B") {document.getElementById("ao1").src = on1;}
    if (sh8 == "C") {document.getElementById("ao2").src = on1;}
    if (sh8 == "D") {document.getElementById("ao3").src = on1;}
    if (sh8 == "E") {document.getElementById("ao4").src = on1;}
    if (sh8 == "F") {document.getElementById("ao5").src = on1;}
    if (sh8 == "G") {document.getElementById("ao6").src = on1;}
    if (sh8 == "H") {document.getElementById("ao7").src = on1;}
    if (sh8 == "I") {document.getElementById("ao8").src = on1;}
    if (sh8 == "J") {document.getElementById("ao9").src = on1;}
    if (sh8 == "K") {document.getElementById("ao10").src = on1;}
    if (sh9 == "A") {document.getElementById("ao0").src = on2;}
    if (sh9 == "B") {document.getElementById("ao1").src = on2;}
    if (sh9 == "C") {document.getElementById("ao2").src = on2;}
    if (sh9 == "D") {document.getElementById("ao3").src = on2;}
    if (sh9 == "E") {document.getElementById("ao4").src = on2;}
    if (sh9 == "F") {document.getElementById("ao5").src = on2;}
    if (sh9 == "G") {document.getElementById("ao6").src = on2;}
    if (sh9 == "H") {document.getElementById("ao7").src = on2;}
    if (sh9 == "I") {document.getElementById("ao8").src = on2;}
    if (sh9 == "J") {document.getElementById("ao9").src = on2;}
    if (sh9 == "K") {document.getElementById("ao10").src = on2;}
    if (sh10 == "A") {document.getElementById("ap0").src = on1;}
    if (sh10 == "B") {document.getElementById("ap1").src = on1;}
    if (sh10 == "C") {document.getElementById("ap2").src = on1;}
    if (sh10 == "D") {document.getElementById("ap3").src = on1;}
    if (sh10 == "E") {document.getElementById("ap4").src = on1;}
    if (sh10 == "F") {document.getElementById("ap5").src = on1;}
    if (sh10 == "G") {document.getElementById("ap6").src = on1;}
    if (sh10 == "H") {document.getElementById("ap7").src = on1;}
    if (sh10 == "I") {document.getElementById("ap8").src = on1;}
    if (sh11 == "A") {document.getElementById("ap0").src = on2;}
    if (sh11 == "B") {document.getElementById("ap1").src = on2;}
    if (sh11 == "C") {document.getElementById("ap2").src = on2;}
    if (sh11 == "D") {document.getElementById("ap3").src = on2;}
    if (sh11 == "E") {document.getElementById("ap4").src = on2;}
    if (sh11 == "F") {document.getElementById("ap5").src = on2;}
    if (sh11 == "G") {document.getElementById("ap6").src = on2;}
    if (sh11 == "H") {document.getElementById("ap7").src = on2;}
    if (sh11 == "I") {document.getElementById("ap8").src = on2;}
  }
}



