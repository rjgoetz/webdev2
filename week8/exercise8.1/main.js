// main.js

// declare global variables
var h1 = document.getElementsByTagName("h1"),
    h2 = document.getElementsByTagName("h2"),
    active = false;

// returns number of elements of same type on page
function loopElement(element) {
  var num = element.length;
  return num;
};

// adds ".red" class to element
function colorRed(element) {
  for (var i = 0; i < loopElement(element); i++) {
    element[i].className = "red";
  };
};

// removes class from element
function colorOff(element) {
  for (var i = 0; i < loopElement(element); i++) {
    element[i].className = "";
  };
};

// button event turns on / off colorRed
document.getElementById("btn1").onclick = function () {
  if (active) {
    colorOff(h1);
    colorOff(h2);
    this.setAttribute("style", "background: white; color: black");
    active = false;
  } else {
    colorRed(h1);
    colorRed(h2);
    this.setAttribute("style", "background: red; color: white");
    active = true;
  };
};
