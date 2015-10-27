// main.js

// global variables
var
  numbersElement = document.getElementById("numbers"),
  i = 1
;

// count from 1 to 10
function countNumbers() {
  setTimeout(function() {
    var newListItem = document.createElement("li");
    numbersElement.appendChild(newListItem);
    var newListText = document.createTextNode(i);
    newListItem.appendChild(newListText);
    i++;
    if (i < 11) {
      countNumbers();
    }
  }, 100)
};

// restart count on button click
function btnRecount() {
  numbersElement.innerHTML = "";
  i = 1;
  countNumbers();
};

document.getElementById("btn0").addEventListener("click", btnRecount);


/* ********************** */
/* jQuery experimentation */
/* ********************** */

// add color by clicking button
function addColor() {
  $(".btn1").click(function() {
    $(".box1").toggleClass("green");
  });
};

// add text from field to page
function addNameToPage() {
  $("button").click(function() {
    var nameText = $("input").val();
    $(".box2").text(nameText);
  });
};

// load functions on document.ready
$("document").ready(function() {
  document.getElementById("headline").innerHTML = "jQuery is loaded.";
  countNumbers();
  addColor();
  addNameToPage();
});
