function zoom_click() {
    if (document.getElementById("dropdownzoom").style.display === "block"){
        document.getElementById("dropdownzoom").style.display = "none";
    } else {
        document.getElementById("dropdownzoom").style.display = "block";
        document.getElementById("dropdownarr").style.display = "none";
        document.getElementById("dropdownhw").style.display = "none";
        document.getElementById("dropdownsb").style.display = "none";
        document.getElementById("dropdownsh").style.display = "none";
        document.getElementById("dropdownend").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function arealmreborn_click() {
    if (document.getElementById("dropdownarr").style.display === "block"){
        document.getElementById("dropdownarr").style.display = "none";
    } else {
        document.getElementById("dropdownarr").style.display = "block";
        document.getElementById("dropdownzoom").style.display = "none";
        document.getElementById("dropdownhw").style.display = "none";
        document.getElementById("dropdownsb").style.display = "none";
        document.getElementById("dropdownsh").style.display = "none";
        document.getElementById("dropdownend").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function lanoscea_click() {
    if (document.getElementById("dropdownlano").style.display === "block"){
        document.getElementById("dropdownlano").style.display = "none";
    } else {
        document.getElementById("dropdownlano").style.display = "block";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function blackshroud_click() {
    if (document.getElementById("dropdownblsh").style.display === "block"){
        document.getElementById("dropdownblsh").style.display = "none";
    } else {
        document.getElementById("dropdownblsh").style.display = "block";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function thanalan_click() {
    if (document.getElementById("dropdownthan").style.display === "block"){
        document.getElementById("dropdownthan").style.display = "none";
    } else {
        document.getElementById("dropdownthan").style.display = "block";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
    }
}

function heavensward_click() {
    if (document.getElementById("dropdownhw").style.display === "block"){
        document.getElementById("dropdownhw").style.display = "none";
    } else {
        document.getElementById("dropdownhw").style.display = "block";
        document.getElementById("dropdownzoom").style.display = "none";
        document.getElementById("dropdownarr").style.display = "none";
        document.getElementById("dropdownsb").style.display = "none";
        document.getElementById("dropdownsh").style.display = "none";
        document.getElementById("dropdownend").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function stormblood_click() {
    if (document.getElementById("dropdownsb").style.display === "block"){
        document.getElementById("dropdownsb").style.display = "none";
    } else {
        document.getElementById("dropdownsb").style.display = "block";
        document.getElementById("dropdownzoom").style.display = "none";
        document.getElementById("dropdownarr").style.display = "none";
        document.getElementById("dropdownhw").style.display = "none";
        document.getElementById("dropdownsh").style.display = "none";
        document.getElementById("dropdownend").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function shadowbringers_click() {
    if (document.getElementById("dropdownsh").style.display === "block"){
        document.getElementById("dropdownsh").style.display = "none";
    } else {
        document.getElementById("dropdownsh").style.display = "block";
        document.getElementById("dropdownzoom").style.display = "none";
        document.getElementById("dropdownarr").style.display = "none";
        document.getElementById("dropdownhw").style.display = "none";
        document.getElementById("dropdownsb").style.display = "none";
        document.getElementById("dropdownend").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}
function endwalker_click() {
    if (document.getElementById("dropdownend").style.display === "block"){
        document.getElementById("dropdownend").style.display = "none";
    } else {
        document.getElementById("dropdownend").style.display = "block";
        document.getElementById("dropdownzoom").style.display = "none";
        document.getElementById("dropdownarr").style.display = "none";
        document.getElementById("dropdownhw").style.display = "none";
        document.getElementById("dropdownsb").style.display = "none";
        document.getElementById("dropdownsh").style.display = "none";
        document.getElementById("dropdownlano").style.display = "none";
        document.getElementById("dropdownblsh").style.display = "none";
        document.getElementById("dropdownthan").style.display = "none";
    }
}

function zoom100() {
  document.getElementById("mapframe").style.width = "1024px";
  hidemenu();
}
function zoom075() {
  document.getElementById("mapframe").style.width = "768px";
  hidemenu();
}
function zoom050() {
  document.getElementById("mapframe").style.width = "512px";
  hidemenu();
}
function zoom025() {
  document.getElementById("mapframe").style.width = "256px";
  hidemenu();
}

function hidemenu() {
    document.getElementById("dropdownzoom").style.display = "none";
    document.getElementById("dropdownarr").style.display = "none";
    document.getElementById("dropdownhw").style.display = "none";
    document.getElementById("dropdownsb").style.display = "none";
    document.getElementById("dropdownsh").style.display = "none";
    document.getElementById("dropdownend").style.display = "none";
    document.getElementById("dropdownlano").style.display = "none";
    document.getElementById("dropdownblsh").style.display = "none";
    document.getElementById("dropdownthan").style.display = "none";
}

/* Hunt Clicks */
function hunt_click_i() {
  var hunt0 = document.getElementById("hunt_i");
  var toggle = document.getElementsByClassName("buttoni");
  if (hunt0.style.visibility === "hidden") {
    hunt0.style.visibility = "visible";
    toggle[0].style.borderColor = "#ffffff";
    toggle[1].style.borderColor = "#ffffff";
  } else {
    hunt0.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_ss() {
  var huntss1 = document.getElementById("hunt_ss");
  var toggle = document.getElementsByClassName("buttonss");
  if (huntss1.style.visibility === "hidden") {
    huntss1.style.visibility = "visible";
    toggle[0].style.borderColor = "#990000";
    toggle[1].style.borderColor = "#990000";
  } else {
    huntss1.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_f() {
  var huntf1 = document.getElementById("hunt_f");
  var toggle = document.getElementsByClassName("buttonf");
  if (huntf1.style.visibility === "hidden") {
    huntf1.style.visibility = "visible";
    toggle[0].style.borderColor = "#e2b9f5";
    toggle[1].style.borderColor = "#e2b9f5";
  } else {
    huntf1.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_t() {
  var treasureg = document.getElementById("hunt_t");
  var toggle = document.getElementsByClassName("buttont");
  if (treasureg.style.visibility === "hidden") {
    treasureg.style.visibility = "visible";
    toggle[0].style.borderColor = "#00ff00";
    toggle[1].style.borderColor = "#00ff00";
  } else {
    treasureg.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_s() {
  var hunt1 = document.getElementById("hunt_s");
  var toggle = document.getElementsByClassName("buttons");
  if (hunt1.style.visibility === "hidden") {
    hunt1.style.visibility = "visible";
    toggle[0].style.borderColor = "#ff3333";
    toggle[1].style.borderColor = "#ff3333";
  } else {
    hunt1.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_a1() {
  var hunt2 = document.getElementById("hunt_a1");
  var toggle = document.getElementsByClassName("buttona1");
  if (hunt2.style.visibility === "hidden") {
    hunt2.style.visibility = "visible";
    toggle[0].style.borderColor = "#6666ff";
    toggle[1].style.borderColor = "#6666ff";
  } else {
    hunt2.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_a2() {
  var hunt3 = document.getElementById("hunt_a2");
  var toggle = document.getElementsByClassName("buttona2");
  if (hunt3.style.visibility === "hidden") {
    hunt3.style.visibility = "visible";
    toggle[0].style.borderColor = "#00ffff";
    toggle[1].style.borderColor = "#00ffff";
  } else {
    hunt3.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_b1() {
  var hunt4 = document.getElementById("hunt_b1");
  var toggle = document.getElementsByClassName("buttonb1");
  if (hunt4.style.visibility === "hidden") {
    hunt4.style.visibility = "visible";
    toggle[0].style.borderColor = "#eeee00";
    toggle[1].style.borderColor = "#eeee00";
  } else {
    hunt4.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}
function hunt_click_b2() {
  var hunt5 = document.getElementById("hunt_b2");
  var toggle = document.getElementsByClassName("buttonb2");
  if (hunt5.style.visibility === "hidden") {
    hunt5.style.visibility = "visible";
    toggle[0].style.borderColor = "#ff00ff";
    toggle[1].style.borderColor = "#ff00ff";
  } else {
    hunt5.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666666";
    toggle[1].style.borderColor = "#666666";
  }
}

//Diadem
function grade2diadem() {
  document.getElementById("diademgrade2").style.display = "block";
  document.getElementById("diademgrade3").style.display = "none";
  document.getElementById("diademgrade4").style.display = "none";
  document.getElementById("diademg2").style.borderColor = "#ccc";
  document.getElementById("diademg3").style.borderColor = "#666";
  document.getElementById("diademg4").style.borderColor = "#666";
}
function grade3diadem() {
  document.getElementById("diademgrade2").style.display = "none";
  document.getElementById("diademgrade3").style.display = "block";
  document.getElementById("diademgrade4").style.display = "none";
  document.getElementById("diademg2").style.borderColor = "#666";
  document.getElementById("diademg3").style.borderColor = "#ccc";
  document.getElementById("diademg4").style.borderColor = "#666";
}
function grade4diadem() {
  document.getElementById("diademgrade2").style.display = "none";
  document.getElementById("diademgrade3").style.display = "none";
  document.getElementById("diademgrade4").style.display = "block";
  document.getElementById("diademg2").style.borderColor = "#666";
  document.getElementById("diademg3").style.borderColor = "#666";
  document.getElementById("diademg4").style.borderColor = "#ccc";
}
function diademinfo() {
  var diadem1 = document.getElementsByClassName("diadem_info");
  var toggle = document.getElementsByClassName("diadem1");
  if (diadem1[0].style.visibility === "hidden") {
    diadem1[0].style.visibility = "visible";
    diadem1[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    diadem1[0].style.visibility = "hidden";
    diadem1[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function diademmobs() {
  var diadem2 = document.getElementById("diadem_mobs");
  var toggle = document.getElementById("diadem2");
  if (diadem2.style.visibility === "hidden") {
    diadem2.style.visibility = "visible";
    toggle.style.borderColor = "#ccc";
  } else {
    diadem2.style.visibility = "hidden";
    toggle.style.borderColor = "#666";
  }
}
function diademminbot() {
  var diadem3 = document.getElementsByClassName("diadem_minbot");
  var toggle = document.getElementsByClassName("diadem3");
  if (diadem3[0].style.visibility === "hidden") {
    diadem3[0].style.visibility = "visible";
    diadem3[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    diadem3[0].style.visibility = "hidden";
    diadem3[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function diademfsh() {
  var diadem4 = document.getElementsByClassName("diadem_fsh");
  var toggle = document.getElementsByClassName("diadem4");
  if (diadem4[0].style.visibility === "hidden") {
    diadem4[0].style.visibility = "visible";
    diadem4[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    diadem4[0].style.visibility = "hidden";
    diadem4[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}

//Bozja
function bsffragments() {
  var bozja1 = document.getElementById("bsf_fragments");
  var toggle = document.getElementsByClassName("bozja1");
  if (bozja1.style.visibility === "hidden") {
    bozja1.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja1.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfskirmishes () {
  var bozja2 = document.getElementById("bsf_skirmishes");
  var toggle = document.getElementsByClassName("bozja2");
  if (bozja2.style.visibility === "hidden") {
    bozja2.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja2.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfengagements () {
  var bozja3 = document.getElementById("bsf_engagements");
  var toggle = document.getElementsByClassName("bozja3");
  if (bozja3.style.visibility === "hidden") {
    bozja3.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja3.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfmobs() {
  var bozja10 = document.getElementsByClassName("bsf_mobs");
  var toggle = document.getElementsByClassName("bozja10");
  if (bozja10[0].style.display === "none") {
    bozja10[0].style.display = "block";
    bozja10[1].style.display = "block";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja10[0].style.display = "none";
    bozja10[1].style.display = "none";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfinfo() {
  var bozja4 = document.getElementById("bsf_info");
  var toggle = document.getElementsByClassName("bozja4");
  if (bozja4.style.display === "none") {
    bozja4.style.display = "block";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja4.style.display = "none";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfnormalmobs() {
  var bozja5 = document.getElementsByClassName("bsf_normalmobs");
  var toggle = document.getElementsByClassName("bozja5");
  if (bozja5[0].style.visibility === "hidden") {
    bozja5[0].style.visibility = "visible";
    bozja5[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja5[0].style.visibility = "hidden";
    bozja5[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfashkin() {
  var bozja6 = document.getElementsByClassName("bsf_ashkin");
  var toggle = document.getElementsByClassName("bozja6");
  if (bozja6[0].style.visibility === "hidden") {
    bozja6[0].style.visibility = "visible";
    bozja6[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja6[0].style.visibility = "hidden";
    bozja6[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfmagitek() {
  var bozja7 = document.getElementsByClassName("bsf_magitek");
  var toggle = document.getElementsByClassName("bozja7");
  if (bozja7[0].style.visibility === "hidden") {
    bozja7[0].style.visibility = "visible";
    bozja7[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja7[0].style.visibility = "hidden";
    bozja7[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfsprites() {
  var bozja8 = document.getElementsByClassName("bsf_sprites");
  var toggle = document.getElementsByClassName("bozja8");
  if (bozja8[0].style.visibility === "hidden") {
    bozja8[0].style.visibility = "visible";
    bozja8[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja8[0].style.visibility = "hidden";
    bozja8[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function bsfstarmobs() {
  var bozja9 = document.getElementById("bsf_starmobs");
  var toggle = document.getElementsByClassName("bozja9");
  if (bozja9.style.visibility === "hidden") {
    bozja9.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    bozja9.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}

//zadnor
function zadnorfragments() {
  var zadnor1 = document.getElementById("zadnor_fragments");
  var toggle = document.getElementsByClassName("zadnor1");
  if (zadnor1.style.visibility === "hidden") {
    zadnor1.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor1.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnorskirmishes () {
  var zadnor2 = document.getElementById("zadnor_skirmishes");
  var toggle = document.getElementsByClassName("zadnor2");
  if (zadnor2.style.visibility === "hidden") {
    zadnor2.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor2.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnorengagements () {
  var zadnor3 = document.getElementById("zadnor_engagements");
  var toggle = document.getElementsByClassName("zadnor3");
  if (zadnor3.style.visibility === "hidden") {
    zadnor3.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor3.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnormobs() {
  var zadnor10 = document.getElementsByClassName("zadnor_mobs");
  var toggle = document.getElementsByClassName("zadnor10");
  if (zadnor10[0].style.display === "none") {
    zadnor10[0].style.display = "block";
    zadnor10[1].style.display = "block";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor10[0].style.display = "none";
    zadnor10[1].style.display = "none";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnorinfo() {
  var zadnor4 = document.getElementById("zadnor_info");
  var toggle = document.getElementsByClassName("zadnor4");
  if (zadnor4.style.display === "none") {
    zadnor4.style.display = "block";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor4.style.display = "none";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnornormalmobs() {
  var zadnor5 = document.getElementsByClassName("zadnor_normalmobs");
  var toggle = document.getElementsByClassName("zadnor5");
  if (zadnor5[0].style.visibility === "hidden") {
    zadnor5[0].style.visibility = "visible";
    zadnor5[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor5[0].style.visibility = "hidden";
    zadnor5[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnorashkin() {
  var zadnor6 = document.getElementsByClassName("zadnor_ashkin");
  var toggle = document.getElementsByClassName("zadnor6");
  if (zadnor6[0].style.visibility === "hidden") {
    zadnor6[0].style.visibility = "visible";
    zadnor6[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor6[0].style.visibility = "hidden";
    zadnor6[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnormagitek() {
  var zadnor7 = document.getElementsByClassName("zadnor_magitek");
  var toggle = document.getElementsByClassName("zadnor7");
  if (zadnor7[0].style.visibility === "hidden") {
    zadnor7[0].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
  } else {
    zadnor7[0].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
  }
}
function zadnorsprites() {
  var zadnor8 = document.getElementsByClassName("zadnor_sprites");
  var toggle = document.getElementsByClassName("zadnor8");
  if (zadnor8[0].style.visibility === "hidden") {
    zadnor8[0].style.visibility = "visible";
    zadnor8[1].style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor8[0].style.visibility = "hidden";
    zadnor8[1].style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}
function zadnorstarmobs() {
  var zadnor9 = document.getElementById("zadnor_starmobs");
  var toggle = document.getElementsByClassName("zadnor9");
  if (zadnor9.style.visibility === "hidden") {
    zadnor9.style.visibility = "visible";
    toggle[0].style.borderColor = "#ccc";
    toggle[1].style.borderColor = "#ccc";
  } else {
    zadnor9.style.visibility = "hidden";
    toggle[0].style.borderColor = "#666";
    toggle[1].style.borderColor = "#666";
  }
}

//Treasure Maps
function treasure_click_all() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  if (toggle1[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "visible";
    hunt1b.style.visibility = "hidden";
    hunt2.style.visibility = "visible";
    hunt2b.style.visibility = "hidden";
    toggle1[0].style.borderColor = "#ffffff";
    toggle1[1].style.borderColor = "#ffffff";
    toggle2[0].style.borderColor = "#666666";
    toggle2[1].style.borderColor = "#666666";
    toggle3[0].style.borderColor = "#666666";
    toggle3[1].style.borderColor = "#666666";
  }
}
function treasure_click_s() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  if (toggle2[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "hidden";
    hunt1b.style.visibility = "visible";
    hunt2.style.visibility = "hidden";
    hunt2b.style.visibility = "hidden";
    toggle2[0].style.borderColor = "#ff3333";
    toggle2[1].style.borderColor = "#ff3333";
    toggle1[0].style.borderColor = "#666666";
    toggle1[1].style.borderColor = "#666666";
    toggle3[0].style.borderColor = "#666666";
    toggle3[1].style.borderColor = "#666666";
  }
}
function treasure_click_a1() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  if (toggle3[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "hidden";
    hunt1b.style.visibility = "hidden";
    hunt2.style.visibility = "hidden";
    hunt2b.style.visibility = "visible";
    toggle3[0].style.borderColor = "#6666ff";
    toggle3[1].style.borderColor = "#6666ff";
    toggle1[0].style.borderColor = "#666666";
    toggle1[1].style.borderColor = "#666666";
    toggle2[0].style.borderColor = "#666666";
    toggle2[1].style.borderColor = "#666666";
  }
}

//Treasure Maps A1 Overlaps
function treasure_click_all_a1overlaps() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var hunt2c = document.getElementById("treasure_a1images2");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  var toggle4 = document.getElementsByClassName("buttontma1_2");
  if (toggle1[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "visible";
    hunt1b.style.visibility = "hidden";
    hunt2.style.visibility = "visible";
    hunt2b.style.visibility = "hidden";
    hunt2c.style.visibility = "hidden";
    toggle1[0].style.borderColor = "#ffffff";
    toggle1[1].style.borderColor = "#ffffff";
    toggle2[0].style.borderColor = "#666666";
    toggle2[1].style.borderColor = "#666666";
    toggle3[0].style.borderColor = "#666666";
    toggle3[1].style.borderColor = "#666666";
    toggle4[0].style.borderColor = "#666666";
    toggle4[1].style.borderColor = "#666666";
  }
}
function treasure_click_s_a1overlaps() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var hunt2c = document.getElementById("treasure_a1images2");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  var toggle4 = document.getElementsByClassName("buttontma1_2");
  if (toggle2[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "hidden";
    hunt1b.style.visibility = "visible";
    hunt2.style.visibility = "hidden";
    hunt2b.style.visibility = "hidden";
    hunt2c.style.visibility = "hidden";
    toggle2[0].style.borderColor = "#ff3333";
    toggle2[1].style.borderColor = "#ff3333";
    toggle1[0].style.borderColor = "#666666";
    toggle1[1].style.borderColor = "#666666";
    toggle3[0].style.borderColor = "#666666";
    toggle3[1].style.borderColor = "#666666";
    toggle4[0].style.borderColor = "#666666";
    toggle4[1].style.borderColor = "#666666";
  }
}
function treasure_click_a1_a1overlaps() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var hunt2c = document.getElementById("treasure_a1images2");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  var toggle4 = document.getElementsByClassName("buttontma1_2");
  if (toggle3[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "hidden";
    hunt1b.style.visibility = "hidden";
    hunt2.style.visibility = "hidden";
    hunt2b.style.visibility = "visible";
    hunt2c.style.visibility = "hidden";
    toggle3[0].style.borderColor = "#6666ff";
    toggle3[1].style.borderColor = "#6666ff";
    toggle1[0].style.borderColor = "#666666";
    toggle1[1].style.borderColor = "#666666";
    toggle2[0].style.borderColor = "#666666";
    toggle2[1].style.borderColor = "#666666";
    toggle4[0].style.borderColor = "#666666";
    toggle4[1].style.borderColor = "#666666";
  }
}
function treasure_click_a1_a1overlaps2() {
  var hunt1a = document.getElementById("treasure_s");
  var hunt1b = document.getElementById("treasure_simages");
  var hunt2 = document.getElementById("treasure_a1");
  var hunt2b = document.getElementById("treasure_a1images");
  var hunt2c = document.getElementById("treasure_a1images2");
  var toggle1 = document.getElementsByClassName("buttontmi");
  var toggle2 = document.getElementsByClassName("buttontms");
  var toggle3 = document.getElementsByClassName("buttontma1");
  var toggle4 = document.getElementsByClassName("buttontma1_2");
  if (toggle4[0].style.borderColor = "666666") {
    hunt1a.style.visibility = "hidden";
    hunt1b.style.visibility = "hidden";
    hunt2.style.visibility = "hidden";
    hunt2b.style.visibility = "hidden";
    hunt2c.style.visibility = "visible";
    toggle4[0].style.borderColor = "#6666ff";
    toggle4[1].style.borderColor = "#6666ff";
    toggle1[0].style.borderColor = "#666666";
    toggle1[1].style.borderColor = "#666666";
    toggle2[0].style.borderColor = "#666666";
    toggle2[1].style.borderColor = "#666666";
    toggle3[0].style.borderColor = "#666666";
    toggle3[1].style.borderColor = "#666666";
  }
}