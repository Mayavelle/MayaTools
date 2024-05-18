//Select Functions
function select_1() {
    document.getElementById("select_1").style.display = "block"
    document.getElementById("select_1_btn").style.borderColor = "#ccc"
    document.getElementById("select_2").style.display = "none"
    document.getElementById("select_2_btn").style.borderColor = "#666"
}

function select_2() {
    document.getElementById("select_2").style.display = "block"
    document.getElementById("select_2_btn").style.borderColor = "#ccc"
    document.getElementById("select_1").style.display = "none"
    document.getElementById("select_1_btn").style.borderColor = "#666"
}

//Sub Select Functions
function subselect_1() {
    document.getElementById("subselect_1").style.display = "block"
    document.getElementById("subselect_1_btn").style.borderColor = "#ccc"
    document.getElementById("subselect_2").style.display = "none"
    document.getElementById("subselect_2_btn").style.borderColor = "#666"
    document.getElementById("subselect_3").style.display = "none"
    document.getElementById("subselect_3_btn").style.borderColor = "#666"
}
function subselect_2() {
    document.getElementById("subselect_2").style.display = "block"
    document.getElementById("subselect_2_btn").style.borderColor = "#ccc"
    document.getElementById("subselect_1").style.display = "none"
    document.getElementById("subselect_1_btn").style.borderColor = "#666"
    document.getElementById("subselect_3").style.display = "none"
    document.getElementById("subselect_3_btn").style.borderColor = "#666"
}
function subselect_3() {
    document.getElementById("subselect_3").style.display = "block"
    document.getElementById("subselect_3_btn").style.borderColor = "#ccc"
    document.getElementById("subselect_1").style.display = "none"
    document.getElementById("subselect_1_btn").style.borderColor = "#666"
    document.getElementById("subselect_2").style.display = "none"
    document.getElementById("subselect_2_btn").style.borderColor = "#666"
}

//Container Display Functions
function huntcnt1() {
    document.getElementById("huntcnt1").style.display = "block"
    document.getElementById("huntcnt1btn").style.borderColor = "#ccc"
    document.getElementById("huntcnt2").style.display = "none"
    document.getElementById("huntcnt2btn").style.borderColor = "#666"
    document.getElementById("huntcnt3").style.display = "none"
    document.getElementById("huntcnt3btn").style.borderColor = "#666"    
    document.getElementById("huntcnt4").style.display = "none"
    document.getElementById("huntcnt4btn").style.borderColor = "#666"
}

function huntcnt2() {
    document.getElementById("huntcnt2").style.display = "block"
    document.getElementById("huntcnt2btn").style.borderColor = "#ccc"
    document.getElementById("huntcnt1").style.display = "none"
    document.getElementById("huntcnt1btn").style.borderColor = "#666"
    document.getElementById("huntcnt3").style.display = "none"
    document.getElementById("huntcnt3btn").style.borderColor = "#666"    
    document.getElementById("huntcnt4").style.display = "none"
    document.getElementById("huntcnt4btn").style.borderColor = "#666"
}
function huntcnt3() {
    document.getElementById("huntcnt3").style.display = "block"
    document.getElementById("huntcnt3btn").style.borderColor = "#ccc"
    document.getElementById("huntcnt1").style.display = "none"
    document.getElementById("huntcnt1btn").style.borderColor = "#666"
    document.getElementById("huntcnt2").style.display = "none"
    document.getElementById("huntcnt2btn").style.borderColor = "#666"    
    document.getElementById("huntcnt4").style.display = "none"
    document.getElementById("huntcnt4btn").style.borderColor = "#666"
}
function huntcnt4() {
    document.getElementById("huntcnt4").style.display = "block"
    document.getElementById("huntcnt4btn").style.borderColor = "#ccc"
    document.getElementById("huntcnt1").style.display = "none"
    document.getElementById("huntcnt1btn").style.borderColor = "#666"
    document.getElementById("huntcnt2").style.display = "none"
    document.getElementById("huntcnt2btn").style.borderColor = "#666"    
    document.getElementById("huntcnt3").style.display = "none"
    document.getElementById("huntcnt3btn").style.borderColor = "#666"
}

//Sort Table Functions
function sortTable1(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("bozjafrags");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTable2(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("bozjafrags");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function viewonly_click(){
  document.getElementById("viewonlybtn").style.borderColor = "#CCC";
  document.getElementById("markingbtn").style.borderColor = "#666";
}
function marking_click(){
  document.getElementById("viewonlybtn").style.borderColor = "#666";
  document.getElementById("markingbtn").style.borderColor = "#CCC";
}