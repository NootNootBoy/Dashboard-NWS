var i = 0;
function toggle() {
  if (i == 0) {
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("toggle").style.left = "0";
    document.getElementById("arrow").style.color = "white";
    document.getElementById("menu").style.left = "-300px";
    document.getElementById("flexcol1").style.display = "none";
    i = 1;
  } else {
    document.getElementById("arrow").style.transform = "rotate(-180deg)";
    document.getElementById("menu").style.left = "0";
    document.getElementById("arrow").style.color = "white";
    document.getElementById("toggle").style.left = "100px";
    document.getElementById("flexcol1").style.display = "flex";
    i = 0;
  }
}

function toggle2() {
  if (i == 0) {
    document.getElementById("arrow2").style.transform = "rotate(-180deg)";
    document.getElementById("toggle2").style.left = "50px";
    document.getElementById("arrow2").style.color = "white";
    document.getElementById("menu").style.left = "0";
    document.getElementById("flexcol1").style.display = "flex";
    document.getElementById("flexcol1").style.width = "100%";
    document.getElementById("flexcol2").style.display = "none";
    i = 1;
  } else {
    document.getElementById("arrow2").style.transform = "rotate(0deg)";
    document.getElementById("menu").style.left = "-200px";
    document.getElementById("arrow2").style.color = "white";
    document.getElementById("toggle2").style.left = "0";
    document.getElementById("flexcol1").style.display = "none";
    document.getElementById("flexcol2").style.display = "block";

    i = 0;
  }
}
