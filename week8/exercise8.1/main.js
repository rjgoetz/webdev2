// main.js

// declare global variables
var h1 = document.getElementsByTagName("h1"),
    h2 = document.getElementsByTagName("h2"),
    buttons = [false, false];

// returns number of elements of same type on page
function numElements(element) {
  var num = element.length;
  return num;
};

// adds ".red" class to element
function colorRed(element) {
  for (var i = 0; i < numElements(element); i++) {
    element[i].className = "red";
  };
};

// adds ".blue" class to element
function colorBlue(element) {
  for (var i = 0; i < numElements(element); i++) {
    element[i].className = "blue";
  };
};

// removes class from element
function colorOff(element) {
  for (var i = 0; i < numElements(element); i++) {
    element[i].className = "";
  };
};

// button event turns on / off colorRed
document.getElementById("btn0").onclick = function () {
  if (buttons[0]) {
    colorOff(h1);
    this.setAttribute("style", "background: white; color: black");
    buttons[0] = false;
  } else {
    colorRed(h1);
    this.setAttribute("style", "background: red; color: white");
    buttons[0] = true;
  };
};

// button event turns on / off colorBlue
document.getElementById("btn1").onclick = function () {
  if (buttons[1]) {
    colorOff(h2);
    this.setAttribute("style", "background: white; color: black");
    buttons[1] = false;
  } else {
    colorBlue(h2);
    this.setAttribute("style", "background: blue; color: white");
    buttons[1] = true;
  };
};
