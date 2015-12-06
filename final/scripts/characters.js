// characters.js

var
  player1CharName,
  player2CharName,
  player1Active = 1,
  player2Active = 0
;

// choose character for each player and swap in / out images
function addCharacter() {
  $(".mario-characters img").click(function() {
    if (player1Active === 1 && player2Active === 0) {
      player1CharName = $(this).attr("alt");
      $(".player1-choice img").attr("src", "images/" + player1CharName + "-pick.jpg");
      console.log("Player 1 : " + player1CharName);

      // store character name in session storage
      sessionStorage.setItem("player1", player1CharName);

      // move active box marker
      $("#one").find("div").remove();
      $("#two").append("<div class='activeBox'> &#10006;</div>");

      // set active states
      player1Active = 0;
      player2Active = 1;

    } else if (player2Active === 1 && player1Active === 0) {
      player2CharName = $(this).attr("alt");
      $(".player2-choice img").attr("src", "images/" + player2CharName + "-pick.jpg");
      console.log("Player 2 : " + player2CharName);

      // store character name in session storage
      sessionStorage.setItem("player2", player2CharName);

      // move active box marker
      $("#two").find("div").remove();
      $("#one").append("<div class='activeBox'> &#10006;</div>");

      // set active states
      player1Active = 1;
      player2Active = 0;
    };
    playButtonActive();
  });
};

// disable play button until two characters are chosen
function playButtonActive() {
  var
    a = typeof player1CharName,
    b = typeof player2CharName
  ;

  if (a === "string" && b === "string") {
    $(".character-button a").attr("class", "").attr("href", "mario-war.html");
    console.log("true");
  };
};

$(document).ready(function() {
  addCharacter();
  playButtonActive();
});
