// main.js

// load text on document.ready
$("document").ready(function() {
  document.getElementById("headline").innerHTML = "jQuery is loaded. Time to experiment.";
  addColor();
  addNameToPage();
});

// add color with a button
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

// add accordion nav
